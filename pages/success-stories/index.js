import { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
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

  const [stories, successStoriesAR, projectTitle, projectAr, bannerImage] =
    await Promise.all([
      await fetchService(storiesUrl, CONST.API_METHOD.GET),
      await fetchService(storiesArUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
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
