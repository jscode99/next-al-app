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

  const [staticSite, staticSiteAr, projectTitle, projectAr, bannerImage] =
    await Promise.all([
      await fetchService(staticSiteUrl, CONST.API_METHOD.GET),
      await fetchService(staticSiteArUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
    ]);
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
