import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
import axios from "axios";
import https from "https";
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

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  // const [storiesRes, successStoriesARRes] = await Promise.all([
  //   await axios.get(storiesUrl, { httpAgent }),
  //   await axios.get(storiesArUrl, { httpAgent }),
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  const storiesRes = await axios.get(storiesUrl, { httpAgent });
  const successStoriesARRes = await axios.get(storiesArUrl, { httpAgent });

  // const [stories, successStoriesAR] = await Promise.all([
  //   await storiesRes.data,
  //   await successStoriesARRes.data,
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });
  const stories = await storiesRes.data;
  const successStoriesAR = await successStoriesARRes.data;

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

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  // const [
  //   successMediaRes,
  //   storiesRes,
  //   successStoriesARRes,
  //   projectTitleRes,
  //   projectArRes,
  //   bannerImageRes,
  // ] = await Promise.all([
  //   await axios.get(successMediaUrl, { httpAgent }),
  //   await axios.get(storiesUrl, { httpAgent }),
  //   await axios.get(storiesArUrl, { httpAgent }),
  //   await axios.get(projectTitleUrl, { httpAgent }),
  //   await axios.get(projectTitleArUrl, { httpAgent }),
  //   await axios.get(bannerImageUrl, { httpAgent }),
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  const successMediaRes = await axios.get(successMediaUrl, { httpAgent });
  const storiesRes = await axios.get(storiesUrl, { httpAgent });
  const successStoriesARRes = await axios.get(storiesArUrl, { httpAgent });
  const projectTitleRes = await axios.get(projectTitleUrl, { httpAgent });
  const projectArRes = await axios.get(projectTitleArUrl, { httpAgent });
  const bannerImageRes = await axios.get(bannerImageUrl, { httpAgent });

  // const [
  //   successMedia,
  //   stories,
  //   successStoriesAR,
  //   projectTitle,
  //   projectAr,
  //   bannerImage,
  // ] = await Promise.all([
  //   await successMediaRes.data,
  //   await storiesRes.data,
  //   await successStoriesARRes.data,
  //   await projectTitleRes.data,
  //   await projectArRes.data,
  //   await bannerImageRes.data,
  // ]).catch(function (error) {
  //   console.log("Error: " + error);
  // });

  const successMedia = await successMediaRes.data;
  const stories = await storiesRes.data;
  const successStoriesAR = await successStoriesARRes.data;
  const projectTitle = await projectTitleRes.data;
  const projectAr = await projectArRes.data;
  const bannerImage = await bannerImageRes.data;

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
