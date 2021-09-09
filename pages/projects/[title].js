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
  projectAr,
  projectDetailsEnProp,
  projectDetailsArProp,
  projectTitleEn,
  projectTitleAr,
  sector,
  sectorAr,
  bannerImage,
}) {
  return (
    <ProjectDetailsContainer
      projectTitle={projectTitleData}
      projectAr={projectAr}
      projectDetailsEnProp={projectDetailsEnProp}
      projectDetailsArProp={projectDetailsArProp}
      projectTitleEn={projectTitleEn}
      projectTitleAr={projectTitleAr}
      sector={sector}
      sectorAr={sectorAr}
      bannerImage={bannerImage}
    />
  );
}

// // Static Path
export async function getStaticPaths({ locales }) {
  let projectDetailsUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_DATA + `?_limit=-1`;
  let projectDetailsArUrl =
    process.env.BASE_URL +
    process.env.PATH.PROJECT_DATA +
    "?_locale=ar-001" +
    "&&_limit=-1";
  const [projectData, projectDataAr] = await Promise.all([
    await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsArUrl, CONST.API_METHOD.GET),
  ]);
  //path
  const pathsEn = projectData.map(projectD => {
    return {
      params: {
        title: mapTitleToRoutePath(projectD.projectTitle),
      },
      locale: locales[0],
    };
  });
  //Path Arabic
  const pathsAr = projectDataAr.map(projectD => {
    return {
      params: {
        title: mapTitleToRoutePath(projectD.projectTitle),
      },
      locale: locales[1],
    };
  });

  const paths = [...pathsEn, ...pathsAr];

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
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let projectDetailsUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_DATA + `?_limit=-1`;
  let projectDetailsArUrl =
    process.env.BASE_URL +
    process.env.PATH.PROJECT_DATA +
    "?_locale=ar-001" +
    "&&_limit=-1";
  let sectorUrl = process.env.BASE_URL + process.env.PATH.SECTOR_ALLOCATION;
  let sectorArUrl =
    process.env.BASE_URL +
    process.env.PATH.SECTOR_ALLOCATION +
    "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const [
    projectTitleData,
    projectAr,
    projectData,
    projectDataAr,
    sector,
    sectorAr,
    bannerImage,
  ] = await Promise.all([
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsUrl, CONST.API_METHOD.GET),
    await fetchService(projectDetailsArUrl, CONST.API_METHOD.GET),
    await fetchService(sectorUrl, CONST.API_METHOD.GET),
    await fetchService(sectorArUrl, CONST.API_METHOD.GET),
    await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
  ]);

  const projectDetailsEnProp = projectData.filter(
    data => data.projectTitle.toLowerCase() === mapRoutePathToTitle(path),
  );
  const projectDetailsArProp = projectDataAr.filter(
    data => data.projectTitle.toLowerCase() === mapRoutePathToTitle(path),
  );

  //Project Data
  // const projectDetailsProp = projectDetailsEnProp || projectDetailsArProp;

  const projectTitleEn = projectTitleData.filter(
    data => data.title.toLowerCase() === mapRoutePathToTitle(path),
  );

  const projectTitleAr = projectAr.filter(
    data => data.title.toLowerCase() === mapRoutePathToTitle(path),
  );

  // const projectPageTitle = projectTitleEn || projectTitleAr;

  //   // Not path
  // if (!projectDetailsProp) {
  //   return {
  //     redirect: {
  //       destination: "/projects",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale,
        ["common"],
        nextI18NextConfig,
      )),
      projectTitleData,
      projectAr,
      projectDetailsEnProp,
      projectDetailsArProp,
      projectTitleEn,
      projectTitleAr,
      sector,
      sectorAr,
      bannerImage,
    },
    revalidate: 10,
  };
}
