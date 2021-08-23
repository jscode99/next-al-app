import { useState, useContext } from "react";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Language Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
// Container
import ContributionsContainer from "../app/container/contributions";

export default function Contributions({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
  projectTitle,
}) {
  return (
    <ContributionsContainer
      arabContributions={arabContributions}
      arabArContributions={arabArContributions}
      overallContributions={overallContributions}
      overallArContributions={overallArContributions}
      projectTitle={projectTitle}
    />
  );
}

export async function getStaticProps({ locale }) {
  let arabContributionsUrl =
    process.env.BASE_URL + process.env.PATH.ARAB_CONTRIBUTIONS;
  let arabArContributionsUrl =
    process.env.BASE_URL +
    process.env.PATH.ARAB_CONTRIBUTIONS +
    "?_locale=ar-001";
  let overallContributionsUrl =
    process.env.BASE_URL + process.env.PATH.OVERALL_CONTRIBUTIONS;
  let overallArContributionsUrl =
    process.env.BASE_URL +
    process.env.PATH.OVERALL_CONTRIBUTIONS +
    "?_locale=ar-001";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;

  const [
    arabContributions,
    arabArContributions,
    overallContributions,
    overallArContributions,
    projectTitle,
  ] = await Promise.all([
    await fetchService(arabContributionsUrl, CONST.API_METHOD.GET),
    await fetchService(arabArContributionsUrl, CONST.API_METHOD.GET),
    await fetchService(overallContributionsUrl, CONST.API_METHOD.GET),
    await fetchService(overallArContributionsUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      arabContributions,
      arabArContributions,
      overallContributions,
      overallArContributions,
      projectTitle,
    },
    revalidate: 10,
  };
}
