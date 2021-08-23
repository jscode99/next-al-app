import { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
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
}) {
  console.log("stories", stories);
  return (
    <SuccessStoriesContainer
      stories={stories}
      successStoriesAR={successStoriesAR}
      projectTitle={projectTitle}
    />
  );
}

export async function getStaticProps({ locale }) {
  let storiesUrl = process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES;
  let storiesArUrl =
    process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES + "?_locale=ar-001";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;

  const [stories, successStoriesAR, projectTitle] = await Promise.all([
    await fetchService(storiesUrl, CONST.API_METHOD.GET),
    await fetchService(storiesArUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      stories,
      successStoriesAR,
      projectTitle,
    },
    revalidate: 60,
  };
}
