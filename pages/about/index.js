//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
//Container
import AboutContainer from "../../app/container/about";

export default function About({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
  flag,
  flagAr,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("about")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <AboutContainer
        staticSite={staticSite}
        staticSiteAr={staticSiteAr}
        projectTitle={projectTitle}
        projectAr={projectAr}
        bannerImage={bannerImage}
        flag={flag}
        flagAr={flagAr}
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
  let flagUrl = process.env.BASE_URL + process.env.PATH.FLAG;
  let flagArUrl =
    process.env.BASE_URL + process.env.PATH.FLAG + "?_locale=ar-001";

  const [
    staticSiteRes,
    staticSiteArRes,
    projectTitleRes,
    projectArRes,
    bannerImageRes,
    flagRes,
    flagArRes,
  ] = await Promise.all([
    await fetch(staticSiteUrl),
    await fetch(staticSiteArUrl),
    await fetch(projectTitleUrl),
    await fetch(projectTitleArUrl),
    await fetch(bannerImageUrl),
    await fetch(flagUrl),
    await fetch(flagArUrl),
  ]);

  const [
    staticSite,
    staticSiteAr,
    projectTitle,
    projectAr,
    bannerImage,
    flag,
    flagAr,
  ] = await Promise.all([
    await staticSiteRes.json(),
    await staticSiteArRes.json(),
    await projectTitleRes.json(),
    await projectArRes.json(),
    await bannerImageRes.json(),
    await flagRes.json(),
    await flagArRes.json(),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      staticSite,
      staticSiteAr,
      projectTitle,
      projectAr,
      bannerImage,
      flag,
      flagAr,
    },
    revalidate: 10,
  };
}
