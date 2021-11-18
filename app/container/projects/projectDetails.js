import { useRouter } from "next/router";
//Common-components
import Layout from "../layout";
//Components
import ProjectDetails from "../../component/projects/projectDetails";

export default function ProjectDetailsContainer({
  projectTitle,
  projectAr,
  projectDetailsEnProp,
  projectDetailsArProp,
  projectTitleEn,
  projectTitleAr,
  sector,
  sectorAr,
  bannerImage,
}) {
  const router = useRouter();
  // console.log("projectDetailsEnProp CONTAINER", projectDetailsEnProp);
  return (
    <Layout
      heroImage={bannerImage}
      page={"projects"}
      pageName={"projects"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={
        router.locale === "en"
          ? projectTitleEn &&
            projectTitleEn.length > 0 &&
            projectTitleEn[0].title
          : projectTitleAr &&
            projectTitleAr.length > 0 &&
            projectTitleAr[0].title
      }
    >
      <ProjectDetails
        projectTitle={router.locale === "en" ? projectTitle : projectAr}
        projectData={
          router.locale === "en" ? projectDetailsEnProp : projectDetailsArProp
        }
        sector={router.locale === "en" ? sector : sectorAr}
      />
    </Layout>
  );
}
