import { useEffect, useContext } from "react";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import Landing from "../app/container/landing";
//Context Api
import AppContext from "../app/AppContext";

export default function Home({
  sector,
  projectTitle,
  projectData,
  overallContributions,
}) {
  return (
    <Landing
      sector={sector}
      projectTitle={projectTitle}
      projectData={projectData}
      overallContributions={overallContributions}
    />
  );
}

export async function getStaticProps({ locale }) {
  let sectorUrl = process.env.BASE_URL + process.env.PATH.SECTOR_ALLOCATION;
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectDetailsUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_DATA + `?_limit=-1`;
  let overallContributionsUrl =
    process.env.BASE_URL + process.env.PATH.OVERALL_CONTRIBUTIONS;
  const [sector, projectTitle, projectData, overallContributions] =
    await Promise.all([
      await fetchService(sectorUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
      await fetchService(overallContributionsUrl, CONST.API_METHOD.GET),
    ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      sector,
      projectTitle,
      projectData,
      overallContributions,
    },
    revalidate: 10,
  };
}
