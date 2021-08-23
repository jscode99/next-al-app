import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
//Title
import {
  mapRoutePathToTitle,
  mapTitleToRoutePath,
  mapRoutePathToTitleAR,
} from "../../app/services/storiesTitle";
//Container
import StoriesDetailsContainer from "../../app/container/success-stories/storiesDetails";

export default function storiesDetails({ storiesDetailsProp, projectTitle }) {
  // console.log("storiesArDetailsProp", storiesProps);
  return (
    <>
      <StoriesDetailsContainer
        storiesProps={storiesDetailsProp}
        projectTitle={projectTitle}
      />
    </>
  );
}

// Static Path
export async function getStaticPaths({ locales }) {
  let storiesUrl = process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES;
  // let storiesArUrl =
  //   process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES + "?_locale=ar-001";
  //successStoriesAR
  const [stories] = await Promise.all([
    await fetchService(storiesUrl, CONST.API_METHOD.GET),
    // await fetchService(storiesArUrl, CONST.API_METHOD.GET),
  ]);
  //path
  const storiesPaths = stories.map(storiesData => {
    return {
      params: {
        title: mapTitleToRoutePath(storiesData),
      },
      // locale: locales[0],
    };
  });

  // const successStoriesARPaths = successStoriesAR.map(storiesData => {
  //   return {
  //     params: {
  //       title: mapTitleToRoutePath(storiesData),
  //     },
  //     locale: locales[1],
  //   };
  // });
  //, ...successStoriesARPaths
  // const paths = [...storiesPaths];
  const paths = storiesPaths;

  return {
    paths,
    fallback: false,
  };
}

// Static Prop
export async function getStaticProps(context) {
  let storiesUrl = process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES;
  // let storiesArUrl =
  //   process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES + "?_locale=ar-001";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  // , successStoriesAR

  const [stories, projectTitle] = await Promise.all([
    await fetchService(storiesUrl, CONST.API_METHOD.GET),
    // await fetchService(storiesArUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
  ]);
  const path = context.params.title;
  const storiesDetailsProp = stories.find(
    storiesData =>
      storiesData.Title.toLowerCase() === mapRoutePathToTitle(path),
  );
  // const storiesArDetailsProp = successStoriesAR.find(
  //   storiesData => storiesData.Title === mapRoutePathToTitleAR(path),
  // );

  // const storiesProps = storiesDetailsProp;
  //|| storiesArDetailsProp;

  // Not path
  if (!storiesDetailsProp) {
    return {
      redirect: {
        destination: "/success-stories",
        permanent: false,
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale,
        ["common"],
        nextI18NextConfig,
      )),
      storiesDetailsProp,
      projectTitle,
    },
    revalidate: 10,
  };
}
