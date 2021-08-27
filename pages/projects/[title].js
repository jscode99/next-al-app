import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
//Title
import {
  mapTitleToRoutePath,
  mapRoutePathToTitle,
} from "../../app/services/projectTitle";

//Container
import ProjectDetailsContainer from "../../app/container/projects/projectDetails";

export default function ProjectDetails({
  projectTitleData,
  projectDetailsProp,
  sector,
  bannerImage,
}) {
  return (
    <ProjectDetailsContainer
      projectTitle={projectTitleData}
      projectDetailsProp={projectDetailsProp}
      sector={sector}
      bannerImage={bannerImage}
    />
  );
}

// // Static Path
export async function getStaticPaths({ locales }) {
  let projectDetailsUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_DATA + `?_limit=-1`;

  const [projectData] = await Promise.all([
    await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
  ]);
  //path
  const paths = projectData.map(projectD => {
    return {
      params: {
        title: mapTitleToRoutePath(projectD.projectTitle),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
// // Static Prop
export async function getStaticProps(context) {
  const path = context.params.title;
  mapRoutePathToTitle(path);
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectDetailsUrl =
    process.env.BASE_URL +
    process.env.PATH.PROJECT_DATA +
    // `?projectTitle=${mapRoutePathToTitle(path).toUpperCase()}&_limit=-1`;
    `?_limit=-1`;
  // `?projectTitle=Al Aqsa Fund&_limit=-1`;
  let sectorUrl = process.env.BASE_URL + process.env.PATH.SECTOR_ALLOCATION;
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const [projectTitleData, projectData, sector, bannerImage] =
    await Promise.all([
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
      await fetchService(sectorUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
    ]);

  const projectDetailsProp = projectData.filter(
    data => data.projectTitle.toLowerCase() === mapRoutePathToTitle(path),
  );
  //   // Not path
  if (!projectDetailsProp) {
    return {
      redirect: {
        destination: "/projects",
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
      projectTitleData,
      projectDetailsProp,
      sector,
      bannerImage,
    },
    revalidate: 10,
  };
}
