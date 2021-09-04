//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import ApprovalProcessContainer from "../../app/container/about/ApprovalProcess";

export default function ApprovalProcess({
  staticSite,
  projectTitle,
  bannerImage,
}) {
  return (
    <ApprovalProcessContainer
      staticSite={staticSite}
      projectTitle={projectTitle}
      bannerImage={bannerImage}
    />
  );
}

export async function getStaticProps({ locale }) {
  let staticSiteUrl =
    process.env.BASE_URL + process.env.PATH.STATIC_SITE + "?_limit=-1";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const [staticSite, projectTitle, bannerImage] = await Promise.all([
    await fetchService(staticSiteUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      staticSite,
      projectTitle,
      bannerImage,
    },
    revalidate: 10,
  };
}
