import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
import axios from "axios";
import https from "https";
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
  reserve,
  reserverAr,
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
        reserve={reserve}
        reserverAr={reserverAr}
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
  let projectReserveUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_RESERVE;
  let projectReserveArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_RESERVE + "?_locale=ar-001";

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const projectTitleRes = await axios.get(projectTitleUrl, { httpAgent });
  const projectArRes = await axios.get(projectTitleArUrl, { httpAgent });
  const projectDataRes = await axios.get(projectDetailsUrl, { httpAgent });
  const projectDataArRes = await axios.get(projectDetailsArUrl, { httpAgent });
  const bannerImageRes = await axios.get(bannerImageUrl, { httpAgent });
  const arabRes = await axios.get(arabFundUrl, { httpAgent });
  const arabArRes = await axios.get(arabFundArUrl, { httpAgent });
  const reserveRes = await axios.get(projectReserveUrl, { httpAgent });
  const reserveArRes = await axios.get(projectReserveArUrl, { httpAgent });

  // const [
  //   projectTitleRes,
  //   projectArRes,
  //   projectDataRes,
  //   projectDataArRes,
  //   bannerImageRes,
  //   arabRes,
  //   arabArRes,
  // ] = await Promise.all([
  //   await axios.get(projectTitleUrl, { httpAgent }),
  //   await axios.get(projectTitleArUrl, { httpAgent }),
  //   await axios.get(projectDetailsUrl, { httpAgent }),
  //   await axios.get(projectDetailsArUrl, { httpAgent }),
  //   await axios.get(bannerImageUrl, { httpAgent }),
  //   await axios.get(arabFundUrl, { httpAgent }),
  //   await axios.get(arabFundArUrl, { httpAgent }),
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  const projectTitle = await projectTitleRes.data;
  const projectAr = await projectArRes.data;
  const projectData = await projectDataRes.data;
  const projectDataAr = await projectDataArRes.data;
  const bannerImage = await bannerImageRes.data;
  const arab = await arabRes.data;
  const arabAr = await arabArRes.data;
  const reserve = await reserveRes.data;
  const reserverAr = await reserveArRes.data;

  // const [
  //   projectTitle,
  //   projectAr,
  //   projectData,
  //   projectDataAr,
  //   bannerImage,
  //   arab,
  //   arabAr,
  // ] = await Promise.all([
  //   await projectTitleRes.data,
  //   await projectArRes.data,
  //   await projectDataRes.data,
  //   await projectDataArRes.data,
  //   await bannerImageRes.data,
  //   await arabRes.data,
  //   await arabArRes.data,
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

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
      reserve,
      reserverAr,
    },
    revalidate: 10,
  };
}
