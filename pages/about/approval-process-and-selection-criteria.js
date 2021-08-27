//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import ApprovalProcessContainer from "../../app/container/about/ApprovalProcess";

export default function ApprovalProcess({ projectTitle, bannerImage }) {
  return (
    <ApprovalProcessContainer
      projectTitle={projectTitle}
      bannerImage={bannerImage}
    />
  );
}

export async function getStaticProps({ locale }) {
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const [projectTitle, bannerImage] = await Promise.all([
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      projectTitle,
      bannerImage,
    },
    revalidate: 10,
  };
}
