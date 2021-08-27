import { useRouter } from "next/router";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
//Container
import PublicationsContainer from "../app/container/publications";

export default function Publication({
  publication,
  publicationAr,
  projectTitle,
  bannerImage,
}) {
  let router = useRouter();

  return router.locale === "en" ? (
    <PublicationsContainer
      publication={publication}
      projectTitle={projectTitle}
      bannerImage={bannerImage}
    />
  ) : (
    <PublicationsContainer
      publication={publicationAr}
      projectTitle={projectTitle}
      bannerImage={bannerImage}
    />
  );
}

export async function getStaticProps({ locale }) {
  let publicationUrl = process.env.BASE_URL + process.env.PATH.PUBLICATION;
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  let publicationArUrl =
    process.env.BASE_URL + process.env.PATH.PUBLICATION + "?_locale=ar-001";
  const [publication, publicationAr, projectTitle, bannerImage] =
    await Promise.all([
      await fetchService(publicationUrl, CONST.API_METHOD.GET),
      await fetchService(publicationArUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
    ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      publication,
      publicationAr,
      projectTitle,
      bannerImage,
    },
    revalidate: 10,
  };
}
