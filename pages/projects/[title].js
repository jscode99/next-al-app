import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
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
  const { t } = useTranslation("common");

  return (
    <>
      <Helmet>
        <title>{t("projects")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
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
    </>
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
  const [projectDataRes, projectDataArRes] = await Promise.all([
    await fetch(projectDetailsUrl),
    await fetch(projectDetailsArUrl),
  ]);

  const [projectData, projectDataAr] = await Promise.all([
    await projectDataRes.json(),
    await projectDataArRes.json(),
  ]);

  //path
  const pathsEn = projectData.map((projectD) => {
    return {
      params: {
        title: mapTitleToRoutePath(projectD.projectTitle),
      },
      locale: locales[1],
    };
  });
  //Path Arabic
  const pathsAr = projectDataAr.map((projectD) => {
    return {
      params: {
        title: mapTitleToRoutePath(projectD.projectTitle),
      },
      locale: locales[0],
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
    projectTitleDataRes,
    projectArRes,
    projectDataRes,
    projectDataArRes,
    sectorRes,
    sectorArRes,
    bannerImageRes,
  ] = await Promise.all([
    await fetch(projectTitleUrl),
    await fetch(projectTitleArUrl),
    await fetch(projectDetailsUrl),
    await fetch(projectDetailsArUrl),
    await fetch(sectorUrl),
    await fetch(sectorArUrl),
    await fetch(bannerImageUrl),
  ]);

  const [
    projectTitleData,
    projectAr,
    projectData,
    projectDataAr,
    sector,
    sectorAr,
    bannerImage,
  ] = await Promise.all([
    await projectTitleDataRes.json(),
    await projectArRes.json(),
    await projectDataRes.json(),
    await projectDataArRes.json(),
    await sectorRes.json(),
    await sectorArRes.json(),
    await bannerImageRes.json(),
  ]);

  const projectDetailsEnProp = projectData.filter(
    (data) => data.projectTitle.toLowerCase() === mapRoutePathToTitle(path)
  );
  const projectDetailsArProp = projectDataAr.filter(
    (data) => data.projectTitle.toLowerCase() === mapRoutePathToTitle(path)
  );

  //Project Data
  // const projectDetailsProp = projectDetailsEnProp || projectDetailsArProp;

  const projectTitleEn = projectTitleData.filter(
    (data) => data.title.toLowerCase() === mapRoutePathToTitle(path)
  );

  const projectTitleAr = projectAr.filter(
    (data) => data.title.toLowerCase() === mapRoutePathToTitle(path)
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
        nextI18NextConfig
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
