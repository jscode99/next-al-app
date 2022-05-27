import { useRouter } from "next/router";
import axios from "axios";
import https from "https";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
//Container
import PublicationsContainer from "../app/container/publications";

export default function Publication({
  publication,
  publicationAr,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return router.locale === "en" ? (
    <>
      <Helmet>
        <title>{t("publications")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <PublicationsContainer
        publication={publication}
        projectTitle={projectTitle}
        bannerImage={bannerImage}
      />
    </>
  ) : (
    <>
      <Helmet>
        <title>{t("publications")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <PublicationsContainer
        publication={publicationAr}
        projectTitle={projectAr}
        bannerImage={bannerImage}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const publicationUrl = process.env.BASE_URL + process.env.PATH.PUBLICATION;
  const projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  const projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  const bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  const publicationArUrl =
    process.env.BASE_URL + process.env.PATH.PUBLICATION + "?_locale=ar-001";

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const publicationRes = await axios.get(publicationUrl, { httpAgent });
  const publicationArRes = await axios.get(publicationArUrl, { httpAgent });
  const projectTitleRes = await axios.get(projectTitleUrl, { httpAgent });
  const projectArRes = await axios.get(projectTitleArUrl, { httpAgent });
  const bannerImageRes = await axios.get(bannerImageUrl, { httpAgent });

  const publication = await publicationRes.data;
  const publicationAr = await publicationArRes.data;
  const projectTitle = await projectTitleRes.data;
  const projectAr = await projectArRes.data;
  const bannerImage = await bannerImageRes.data;

  // const [
  //   // publicationRes,
  //   // publicationArRes,
  //   // projectTitleRes,
  //   // projectArRes,
  //   // bannerImageRes,
  // ] = await Promise.all([
  //   await axios.get(publicationUrl, { httpAgent }),
  //   await axios.get(publicationArUrl, { httpAgent }),
  //   await axios.get(projectTitleUrl, { httpAgent }),
  //   await axios.get(projectTitleArUrl, { httpAgent }),
  //   await axios.get(bannerImageUrl, { httpAgent }),
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  // const [publication, publicationAr, projectTitle, projectAr, bannerImage] =
  //   await Promise.all([
  //     await publicationRes.data,
  //     await publicationArRes.data,
  //     await projectTitleRes.data,
  //     await projectArRes.data,
  //     await bannerImageRes.data,
  //   ]).catch(function (error) {
  //     console.log("Error: " + error);
  //   });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      publication,
      publicationAr,
      projectTitle,
      projectAr,
      bannerImage,
    },
    revalidate: 10,
  };
}
