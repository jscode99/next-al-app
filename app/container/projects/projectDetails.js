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
  bannerImage,
}) {
  const router = useRouter();
  console.log("projectDetailsEnProp CONTAINER", projectDetailsEnProp);
  return (
    <Layout
      heroImage={bannerImage}
      page={"projects"}
      pageName={"projects"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"projects"}
    >
      <ProjectDetails
        projectTitle={router.locale === "en" ? projectTitle : projectAr}
        projectData={
          router.locale === "en" ? projectDetailsEnProp : projectDetailsArProp
        }
        sector={sector}
      />
    </Layout>
  );
}
