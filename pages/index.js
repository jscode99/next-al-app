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
    staticSiteRes,
    staticSiteArRes,
    projectDataRes,
    projectDataArRes,
    sectorRes,
    sectorArRes,
    projectTitleRes,
    projectArRes,
    alAqsaRes,
    alAqsaArRes,
    arabRes,
    arabArRes,
    yearlyRes,
    yearlyArRes,
    bannerImageRes,
    flagRes,
    flagArRes,
    isdbManageRes,
    isdbManageArRes,
  ] = await Promise.all([
    await fetch(staticSiteUrl),
    await fetch(staticSiteArUrl),
    await fetch(projectDetailsUrl),
    await fetch(projectDetailsArUrl),
    await fetch(sectorUrl),
    await fetch(sectorArUrl),
    await fetch(projectTitleUrl),
    await fetch(projectTitleArUrl),
    await fetch(alAqsaFundUrl),
    await fetch(alAqsaFundArUrl),
    await fetch(arabFundUrl),
    await fetch(arabFundArUrl),
    await fetch(yearlyApprovalUrl),
    await fetch(yearlyApprovalArUrl),
    await fetch(bannerImageUrl),
    await fetch(flagUrl),
    await fetch(flagArUrl),
    await fetch(isdbManagesUrl),
    await fetch(isdbManagesArUrl),
  ]);

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
    await staticSiteRes.json(),
    await staticSiteArRes.json(),
    await projectDataRes.json(),
    await projectDataArRes.json(),
    await sectorRes.json(),
    await sectorArRes.json(),
    await projectTitleRes.json(),
    await projectArRes.json(),
    await alAqsaRes.json(),
    await alAqsaArRes.json(),
    await arabRes.json(),
    await arabArRes.json(),
    await yearlyRes.json(),
    await yearlyArRes.json(),
    await bannerImageRes.json(),
    await flagRes.json(),
    await flagArRes.json(),
    await isdbManageRes.json(),
    await isdbManageArRes.json(),
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
