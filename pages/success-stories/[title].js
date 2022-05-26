import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
// import { useRouter } from "next/router";
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

export default function StoriesDetails({
  successMedia,
  storiesProps,
  path,
  projectTitle,
  projectAr,
  bannerImage,
  context,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("success stories")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <StoriesDetailsContainer
        successMedia={successMedia}
        storiesProps={storiesProps}
        projectTitle={projectTitle}
        projectAr={projectAr}
        bannerImage={bannerImage}
      />
    </>
  );
}

// Static Path
export async function getStaticPaths({ locales }) {
  let storiesUrl = process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES;
  let storiesArUrl =
    process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES + "?_locale=ar-001";
  //, successStoriesAR
  const [storiesRes, successStoriesARRes] = await Promise.all([
    await fetch(storiesUrl),
    await fetch(storiesArUrl),
  ]);

  const [stories, successStoriesAR] = await Promise.all([
    await storiesRes.json(),
    await successStoriesARRes.json(),
  ]);

  //path
  const storiesPaths = stories.map((storiesData) => {
    return {
      params: {
        title: mapTitleToRoutePath(storiesData.Title),
      },
      locale: locales[1],
    };
  });

  const successStoriesARPaths = successStoriesAR.map((storiesData) => {
    return {
      params: {
        title: mapTitleToRoutePath(storiesData.Title),
      },
      locale: locales[0],
    };
  });

  //, ...successStoriesARPaths
  const paths = [...storiesPaths, ...successStoriesARPaths];

  return {
    paths,
    fallback: false,
  };
}

// Static Prop
export async function getStaticProps(context) {
  let successMediaUrl =
    process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES_MEDIA;
  let storiesUrl = process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES;
  let storiesArUrl =
    process.env.BASE_URL + process.env.PATH.SUCCESS_STORIES + "?_locale=ar-001";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  // , successStoriesAR
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  // successStoriesAR,
  const [
    successMediaRes,
    storiesRes,
    successStoriesARRes,
    projectTitleRes,
    projectArRes,
    bannerImageRes,
  ] = await Promise.all([
    await fetch(successMediaUrl),
    await fetch(storiesUrl),
    await fetch(storiesArUrl),
    await fetch(projectTitleUrl),
    await fetch(projectTitleArUrl),
    await fetch(bannerImageUrl),
  ]);

  const [
    successMedia,
    stories,
    successStoriesAR,
    projectTitle,
    projectAr,
    bannerImage,
  ] = await Promise.all([
    await successMediaRes.json(),
    await storiesRes.json(),
    await successStoriesARRes.json(),
    await projectTitleRes.json(),
    await projectArRes.json(),
    await bannerImageRes.json(),
  ]);

  const path = context.params.title;

  const storiesDetailsProp = stories.find(
    (storiesData) =>
      storiesData.Title.toLowerCase() === mapRoutePathToTitle(path)
  );
  const storiesArDetailsProp = successStoriesAR.find(
    (storiesData) => storiesData.Title === mapRoutePathToTitleAR(path)
  );
  //|| storiesArDetailsProp;
  const storiesProps = storiesDetailsProp || storiesArDetailsProp;

  // Not path
  // if (!storiesProps) {
  // debugger;
  // return {
  //   redirect: {
  //     destination: "/success-stories",
  //     permanent: false,
  //   },
  // };
  // }

  return {
    props: {
      ...(await serverSideTranslations(
        context.locale,
        ["common"],
        nextI18NextConfig
      )),
      successMedia,
      storiesProps,
      path,
      projectTitle,
      projectAr,
      bannerImage,
      context,
    },
    revalidate: 10,
  };
}
