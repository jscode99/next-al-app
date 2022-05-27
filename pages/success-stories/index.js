import { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
import axios from "axios";
import https from "https";
//Context
import AppContext from "../../app/AppContext";
//Constants
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import SuccessStoriesContainer from "../../app/container/success-stories/index";

export default function SuccessStories({
  stories,
  successStoriesAR,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("success stories")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <SuccessStoriesContainer
        stories={stories}
        successStoriesAR={successStoriesAR}
        projectTitle={projectTitle}
        projectAr={projectAr}
        bannerImage={bannerImage}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let storiesUrl = process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES;
  let storiesArUrl =
    process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES + "?_locale=ar-001";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const [
    storiesRes,
    successStoriesARRes,
    projectTitleRes,
    projectArRes,
    bannerImageRes,
  ] = await Promise.all([
    await axios.get(storiesUrl, { httpAgent }),
    await axios.get(storiesArUrl, { httpAgent }),
    await axios.get(projectTitleUrl, { httpAgent }),
    await axios.get(projectTitleArUrl, { httpAgent }),
    await axios.get(bannerImageUrl, { httpAgent }),
  ]);

  const [stories, successStoriesAR, projectTitle, projectAr, bannerImage] =
    await Promise.all([
      await storiesRes.data,
      await successStoriesARRes.data,
      await projectTitleRes.data,
      await projectArRes.data,
      await bannerImageRes.data,
    ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      stories,
      successStoriesAR,
      projectTitle,
      projectAr,
      bannerImage,
    },
    revalidate: 60,
  };
}
