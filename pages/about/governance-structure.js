//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import GovernanceContainer from "../../app/container/about/Governance";

export default function Governance({
  staticSite,
  staticSiteAr,
  projectTitle,
  bannerImage,
}) {
  return (
    <GovernanceContainer
      staticSite={staticSite}
      staticSiteAr={staticSiteAr}
      projectTitle={projectTitle}
      bannerImage={bannerImage}
    />
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
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const [staticSite, staticSiteAr, projectTitle, bannerImage] =
    await Promise.all([
      await fetchService(staticSiteUrl, CONST.API_METHOD.GET),
      await fetchService(staticSiteArUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
    ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      staticSite,
      staticSiteAr,
      projectTitle,
      bannerImage,
    },
    revalidate: 10,
  };
}
