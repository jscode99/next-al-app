import axios from "axios";
import https from "https";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Language Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
// Container
import ContributionsContainer from "../app/container/contributions";

export default function Contributions({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("contributions")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <ContributionsContainer
        arabContributions={arabContributions}
        arabArContributions={arabArContributions}
        overallContributions={overallContributions}
        overallArContributions={overallArContributions}
        projectTitle={projectTitle}
        projectAr={projectAr}
        bannerImage={bannerImage}
      />
    </>
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
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const arabContributionsRes = await axios.get(arabContributionsUrl, {
    httpAgent,
  });
  const arabArContributionsRes = await axios.get(arabArContributionsUrl, {
    httpAgent,
  });
  const overallContributionsRes = await axios.get(overallContributionsUrl, {
    httpAgent,
  });
  const overallArContributionsRes = await axios.get(overallArContributionsUrl, {
    httpAgent,
  });
  const projectTitleRes = await axios.get(projectTitleUrl, { httpAgent });
  const projectArRes = await axios.get(projectTitleArUrl, { httpAgent });
  const bannerImageRes = await axios.get(bannerImageUrl, { httpAgent });

  // const [
  //   arabContributionsRes,
  //   arabArContributionsRes,
  //   overallContributionsRes,
  //   overallArContributionsRes,
  //   projectTitleRes,
  //   projectArRes,
  //   bannerImageRes,
  // ] = await Promise.all([
  //   await axios.get(arabContributionsUrl, { httpAgent }),
  //   await axios.get(arabArContributionsUrl, { httpAgent }),
  //   await axios.get(overallContributionsUrl, { httpAgent }),
  //   await axios.get(overallArContributionsUrl, { httpAgent }),
  //   await axios.get(projectTitleUrl, { httpAgent }),
  //   await axios.get(projectTitleArUrl, { httpAgent }),
  //   await axios.get(bannerImageUrl, { httpAgent }),
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  const arabContributions = await arabContributionsRes.data;
  const arabArContributions = await arabArContributionsRes.data;
  const overallContributions = await overallContributionsRes.data;
  const overallArContributions = await overallArContributionsRes.data;
  const projectTitle = await projectTitleRes.data;
  const projectAr = await projectArRes.data;
  const bannerImage = await bannerImageRes.data;

  // const [
  //   arabContributions,
  //   arabArContributions,
  //   overallContributions,
  //   overallArContributions,
  //   projectTitle,
  //   projectAr,
  //   bannerImage,
  // ] = await Promise.all([
  //   await arabContributionsRes.data,
  //   await arabArContributionsRes.data,
  //   await overallContributionsRes.data,
  //   await overallArContributionsRes.data,
  //   await projectTitleRes.data,
  //   await projectArRes.data,
  //   await bannerImageRes.data,
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      arabContributions,
      arabArContributions,
      overallContributions,
      overallArContributions,
      projectTitle,
      projectAr,
      bannerImage,
    },
    revalidate: 10,
  };
}
