import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import https from "https";
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
  // console.log("flag", flag);
  // console.log("PROJECT", projectData);
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

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });


  const staticSiteRes = await axios.get(staticSiteUrl, { httpAgent });
  const staticSiteArRes = await axios.get(staticSiteArUrl, { httpAgent });
  const projectDataRes = await axios.get(projectDetailsUrl, { httpAgent });
  const projectDataArRes = await axios.get(projectDetailsArUrl, { httpAgent });
  const sectorRes = await axios.get(sectorUrl, { httpAgent });
  const sectorArRes = await axios.get(sectorArUrl, { httpAgent });
  const projectTitleRes = await axios.get(projectTitleUrl, { httpAgent });
  const projectArRes = await axios.get(projectTitleArUrl, { httpAgent });
  const alAqsaRes = await axios.get(alAqsaFundUrl, { httpAgent });
  const alAqsaArRes = await axios.get(alAqsaFundArUrl, { httpAgent });
  const arabRes = await axios.get(arabFundUrl, { httpAgent });
  const arabArRes = await axios.get(arabFundArUrl, { httpAgent });
  const yearlyRes = await axios.get(yearlyApprovalUrl, { httpAgent });
  const yearlyArRes = await axios.get(yearlyApprovalArUrl, { httpAgent });
  const bannerImageRes = await axios.get(bannerImageUrl, { httpAgent });
  const flagRes = await axios.get(flagUrl, { httpAgent });
  const flagArRes = await axios.get(flagArUrl, { httpAgent });
  const isdbManageRes = await axios.get(isdbManagesUrl, { httpAgent });
  const isdbManageArRes = await axios.get(isdbManagesArUrl, { httpAgent });

  // const [
  //   staticSiteRes,
  //   staticSiteArRes,
  //   projectDataRes,
  //   projectDataArRes,
  //   sectorRes,
  //   sectorArRes,
  //   projectTitleRes,
  //   projectArRes,
  //   alAqsaRes,
  //   alAqsaArRes,
  //   arabRes,
  //   arabArRes,
  //   yearlyRes,
  //   yearlyArRes,
  //   bannerImageRes,
  //   flagRes,
  //   flagArRes,
  //   isdbManageRes,
  //   isdbManageArRes,
  // ] = await Promise.all([
  //   await axios.get(staticSiteUrl, { httpAgent }),
  //   await axios.get(staticSiteArUrl, { httpAgent }),
  //   await axios.get(projectDetailsUrl, { httpAgent }),
  //   await axios.get(projectDetailsArUrl, { httpAgent }),
  //   await axios.get(sectorUrl, { httpAgent }),

  //   await axios.get(sectorArUrl, { httpAgent }),

  //   await axios.get(projectTitleUrl, { httpAgent }),

  //   await axios.get(projectTitleArUrl, { httpAgent }),

  //   await axios.get(alAqsaFundUrl, { httpAgent }),

  //   await axios.get(alAqsaFundArUrl, { httpAgent }),

  //   await axios.get(arabFundUrl, { httpAgent }),

  //   await axios.get(arabFundArUrl, { httpAgent }),

  //   await axios.get(yearlyApprovalUrl, { httpAgent }),

  //   await axios.get(yearlyApprovalArUrl, { httpAgent }),

  //   await axios.get(bannerImageUrl, { httpAgent }),

  //   await axios.get(flagUrl, { httpAgent }),

  //   await axios.get(flagArUrl, { httpAgent }),
  //   await axios.get(isdbManagesUrl, { httpAgent }),
  //   await axios.get(isdbManagesArUrl, { httpAgent }),
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  const staticSite = await staticSiteRes.data;
  const staticSiteAr = await staticSiteArRes.data;
  const projectData = await projectDataRes.data;
  const projectDataAr = await projectDataArRes.data;
  const sector = await sectorRes.data;
  const sectorAr = await sectorArRes.data;
  const projectTitle = await projectTitleRes.data;
  const projectAr = await projectArRes.data;
  const alAqsa = await alAqsaRes.data;
  const alAqsaAr = await alAqsaArRes.data;
  const arab = await arabRes.data;
  const arabAr = await arabArRes.data;
  const yearly = await yearlyRes.data;
  const yearlyAr = await yearlyArRes.data;
  const bannerImage = await bannerImageRes.data;
  const flag = await flagRes.data;
  const flagAr = await flagArRes.data;
  const isdbManage = await isdbManageRes.data;
  const isdbManageAr = await isdbManageArRes.data;

  // const [
  //   staticSite,
  //   staticSiteAr,
  //   projectData,
  //   projectDataAr,
  //   sector,
  //   sectorAr,
  //   projectTitle,
  //   projectAr,
  //   alAqsa,
  //   alAqsaAr,
  //   arab,
  //   arabAr,
  //   yearly,
  //   yearlyAr,
  //   bannerImage,
  //   flag,
  //   flagAr,
  //   isdbManage,
  //   isdbManageAr,
  // ] = await Promise.all([
  //   await staticSiteRes.data,
  //   await staticSiteArRes.data,
  //   await projectDataRes.data,
  //   await projectDataArRes.data,

  //   await sectorRes.data,

  //   await sectorArRes.data,
  //   await projectTitleRes.data,
  //   await projectArRes.data,
  //   await alAqsaRes.data,
  //   await alAqsaArRes.data,
  //   await arabRes.data,
  //   await arabArRes.data,
  //   await yearlyRes.data,
  //   await yearlyArRes.data,
  //   await bannerImageRes.data,
  //   await flagRes.data,
  //   await flagArRes.data,
  //   await isdbManageRes.data,
  //   await isdbManageArRes.data,
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

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
