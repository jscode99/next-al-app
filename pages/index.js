import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
import Landing from "../app/container/landing";
//Context Api
import AppContext from "../app/AppContext";

export default function Home({
  staticSite,
  staticSiteAr,
  projectData,
  projectDataAr,
  sector,
  sectorAr,
  projectTitle,
  projectAr,
  alAqsa,
  alAqsaAr,
  arab,
  arabAr,
  yearly,
  yearlyAr,
  bannerImage,
  flag,
  flagAr,
  isdbManage,
  isdbManageAr,
}) {
  const router = useRouter();
  const { t } = useTranslation("common");
  let { appContext, setAppContext } = useContext(AppContext);
  // console.log(
  //   "==================================================>",
  //   appContext.fLinkClick
  // );
  console.log("flag", flag);
  console.log("PROJECT", projectData);
  useEffect(() => {
    if (appContext && appContext.fLinkClick) {
      setAppContext({
        ...appContext,
        fLinkClick: false,
        loader: true,
      });
      router.back();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("al aqsa fund")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <Landing
        staticSite={staticSite}
        staticSiteAr={staticSiteAr}
        projectData={projectData}
        projectDataAr={projectDataAr}
        sector={sector}
        sectorAr={sectorAr}
        projectTitle={projectTitle}
        projectAr={projectAr}
        alAqsa={alAqsa}
        alAqsaAr={alAqsaAr}
        arab={arab}
        arabAr={arabAr}
        yearly={yearly}
        yearlyAr={yearlyAr}
        bannerImage={bannerImage}
        flag={flag}
        flagAr={flagAr}
        isdbManage={isdbManage}
        isdbManageAr={isdbManageAr}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let staticSiteUrl =
    process.env.BASE_URL + process.env.PATH.STATIC_SITE + "?_limit=-1";
  let staticSiteArUrl =
    process.env.BASE_URL +
    process.env.PATH.STATIC_SITE +
    "?_locale=ar-001" +
    "&&_limit=-1";
  let projectDetailsUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_DATA + "?_limit=-1";
  let projectDetailsArUrl =
    process.env.BASE_URL +
    process.env.PATH.PROJECT_DATA +
    "?_locale=ar-001" +
    "&&_limit=-1";
  let sectorUrl =
    process.env.BASE_URL + process.env.PATH.SECTOR_ALLOCATION + `?_limit=-1`;
  let sectorArUrl =
    process.env.BASE_URL +
    process.env.PATH.SECTOR_ALLOCATION +
    "?_locale=ar-001";
  let projectTitleUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + `?_limit=-1`;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let alAqsaFundUrl =
    process.env.BASE_URL + process.env.PATH.AL_AQSA_FUND + `?_limit=-1`;
  let alAqsaFundArUrl =
    process.env.BASE_URL + process.env.PATH.AL_AQSA_FUND + "?_locale=ar-001";
  let arabFundUrl =
    process.env.BASE_URL + process.env.PATH.ARAB_FUND + `?_limit=-1`;
  let arabFundArUrl =
    process.env.BASE_URL + process.env.PATH.ARAB_FUND + "?_locale=ar-001";
  let yearlyApprovalUrl =
    process.env.BASE_URL + process.env.PATH.YEARLY_APPROVAL + `?_limit=-1`;
  let yearlyApprovalArUrl =
    process.env.BASE_URL + process.env.PATH.YEARLY_APPROVAL + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  let flagUrl = process.env.BASE_URL + process.env.PATH.FLAG;
  let flagArUrl =
    process.env.BASE_URL + process.env.PATH.FLAG + "?_locale=ar-001";
  let isdbManagesUrl = process.env.BASE_URL + process.env.PATH.ISDB_MANAGES;
  let isdbManagesArUrl =
    process.env.BASE_URL + process.env.PATH.ISDB_MANAGES + "?_locale=ar-001";

  const [
    staticSite,
    staticSiteAr,
    projectData,
    projectDataAr,
    sector,
    sectorAr,
    projectTitle,
    projectAr,
    alAqsa,
    alAqsaAr,
    arab,
    arabAr,
    yearly,
    yearlyAr,
    bannerImage,
    flag,
    flagAr,
    isdbManage,
    isdbManageAr,
  ] = await Promise.all([
    await fetchService(staticSiteUrl, CONST.API_METHOD.GET),
    await fetchService(staticSiteArUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsArUrl, CONST.API_METHOD.GET),
    await fetchService(sectorUrl, CONST.API_METHOD.GET),
    await fetchService(sectorArUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
    await fetchService(alAqsaFundUrl, CONST.API_METHOD.GET),
    await fetchService(alAqsaFundArUrl, CONST.API_METHOD.GET),
    await fetchService(arabFundUrl, CONST.API_METHOD.GET),
    await fetchService(arabFundArUrl, CONST.API_METHOD.GET),
    await fetchService(yearlyApprovalUrl, CONST.API_METHOD.GET),
    await fetchService(yearlyApprovalArUrl, CONST.API_METHOD.GET),
    await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
    await fetchService(flagUrl, CONST.API_METHOD.GET),
    await fetchService(flagArUrl, CONST.API_METHOD.GET),
    await fetchService(isdbManagesUrl, CONST.API_METHOD.GET),
    await fetchService(isdbManagesArUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      staticSite,
      staticSiteAr,
      projectData,
      projectDataAr,
      sector,
      sectorAr,
      projectTitle,
      projectAr,
      alAqsa,
      alAqsaAr,
      arab,
      arabAr,
      yearly,
      yearlyAr,
      bannerImage,
      flag,
      flagAr,
      isdbManage,
      isdbManageAr,
    },
    revalidate: 10,
  };
}
