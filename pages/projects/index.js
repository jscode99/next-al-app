import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import ProjectsContainer from "../../app/container/projects";

export default function Project({
  projectTitle,
  projectAr,
  projectData,
  projectDataAr,
  bannerImage,
  arab,
  arabAr,
}) {
  // console.log("projectData", projectData);
  // console.log("projectDataAr", projectDataAr);
  const { t } = useTranslation("common");

  return (
    <>
      <Helmet>
        <title>{t("projects")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <ProjectsContainer
        projectTitle={projectTitle}
        projectAr={projectAr}
        projectData={projectData}
        projectDataAr={projectDataAr}
        bannerImage={bannerImage}
        arab={arab}
        arabAr={arabAr}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let projectDetailsUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_DATA + "?_limit=-1";
  let projectDetailsArUrl =
    process.env.BASE_URL +
    process.env.PATH.PROJECT_DATA +
    "?_locale=ar-001" +
    "&&_limit=-1";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  let arabFundUrl =
    process.env.BASE_URL + process.env.PATH.ARAB_FUND + `?_limit=-1`;
  let arabFundArUrl =
    process.env.BASE_URL + process.env.PATH.ARAB_FUND + "?_locale=ar-001";

  const [
    projectTitle,
    projectAr,
    projectData,
    projectDataAr,
    bannerImage,
    arab,
    arabAr,
  ] = await Promise.all([
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsArUrl, CONST.API_METHOD.GET),
    await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
    await fetchService(arabFundUrl, CONST.API_METHOD.GET),
    await fetchService(arabFundArUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      projectTitle,
      projectAr,
      projectData,
      projectDataAr,
      bannerImage,
      arab,
      arabAr,
    },
    revalidate: 10,
  };
}
