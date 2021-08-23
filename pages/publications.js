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
}) {
  let router = useRouter();

  return router.locale === "en" ? (
    <PublicationsContainer
      publication={publication}
      projectTitle={projectTitle}
    />
  ) : (
    <PublicationsContainer
      publication={publicationAr}
      projectTitle={projectTitle}
    />
  );
}

export async function getStaticProps({ locale }) {
  let publicationUrl = process.env.BASE_URL + process.env.PATH.PUBLICATION;
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;

  let publicationArUrl =
    process.env.BASE_URL + process.env.PATH.PUBLICATION + "?_locale=ar-001";
  const [publication, publicationAr, projectTitle] = await Promise.all([
    await fetchService(publicationUrl, CONST.API_METHOD.GET),
    await fetchService(publicationArUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      publication,
      publicationAr,
      projectTitle,
    },
    revalidate: 10,
  };
}
