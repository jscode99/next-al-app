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
}) {
  return (
    <ProjectDetailsContainer
      projectTitle={projectTitleData}
      projectDetailsProp={projectDetailsProp}
      sector={sector}
    />
  );
}

// // Static Path
export async function getStaticPaths() {
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

  const [projectTitleData, projectData, sector] = await Promise.all([
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
    await fetchService(sectorUrl, CONST.API_METHOD.GET),
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
    },
    revalidate: 10,
  };
}
