//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import AboutContainer from "../../app/container/about";

export default function About({
  staticSite,
  projectTitle,
  bannerImage,
  flag,
  flagAr,
}) {
  return (
    <AboutContainer
      staticSite={staticSite}
      projectTitle={projectTitle}
      bannerImage={bannerImage}
      flag={flag}
      flagAr={flagAr}
    />
  );
}

export async function getStaticProps({ locale }) {
  let staticSiteUrl =
    process.env.BASE_URL + process.env.PATH.STATIC_SITE + "?_limit=-1";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  let flagUrl = process.env.BASE_URL + process.env.PATH.FLAG;
  let flagArUrl =
    process.env.BASE_URL + process.env.PATH.FLAG + "?_locale=ar-001";

  const [staticSite, projectTitle, bannerImage, flag, flagAr] =
    await Promise.all([
      await fetchService(staticSiteUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
      await fetchService(flagUrl, CONST.API_METHOD.GET),
      await fetchService(flagArUrl, CONST.API_METHOD.GET),
    ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      staticSite,
      projectTitle,
      bannerImage,
      flag,
      flagAr,
    },
    revalidate: 10,
  };
}
