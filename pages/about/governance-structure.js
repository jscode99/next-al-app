import axios from "axios";
import https from "https";
//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
//Container
import GovernanceContainer from "../../app/container/about/Governance";

export default function Governance({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("governance structure")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <GovernanceContainer
        staticSite={staticSite}
        staticSiteAr={staticSiteAr}
        projectTitle={projectTitle}
        projectAr={projectAr}
        bannerImage={bannerImage}
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
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const [
    staticSiteRes,
    staticSiteArRes,
    projectTitleRes,
    projectArRes,
    bannerImageRes,
  ] = await Promise.all([
    await axios.get(staticSiteUrl, { httpAgent }),
    await axios.get(staticSiteArUrl, { httpAgent }),
    await axios.get(projectTitleUrl, { httpAgent }),
    await axios.get(projectTitleArUrl, { httpAgent }),
    await axios.get(bannerImageUrl, { httpAgent }),
  ]).catch(function (error) {
    console.log("Error: " + error);
  });

  const [staticSite, staticSiteAr, projectTitle, projectAr, bannerImage] =
    await Promise.all([
      await staticSiteRes.data,
      await staticSiteArRes.data,
      await projectTitleRes.data,
      await projectArRes.data,
      await bannerImageRes.data,
    ]).catch(function (error) {
      console.log("Error: " + error);
    });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      staticSite,
      staticSiteAr,
      projectTitle,
      projectAr,
      bannerImage,
    },
    revalidate: 10,
  };
}
