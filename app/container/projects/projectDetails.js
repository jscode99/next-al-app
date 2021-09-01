//Common-components
import Layout from "../layout";
//Components
import ProjectDetails from "../../component/projects/projectDetails";

export default function ProjectDetailsContainer({
  projectTitle,
  projectDetailsProp,
  projectPageTitle,
  sector,
  bannerImage,
}) {
  console.log("projectPageTitle", projectPageTitle);
  return (
    <Layout
      heroImage={bannerImage}
      page={"projects"}
      pageName={"projects"}
      projectTitle={projectTitle}
      title={projectPageTitle[0].title}
    >
      <ProjectDetails
        projectTitle={projectTitle}
        projectData={projectDetailsProp}
        sector={sector}
      />
    </Layout>
  );
}
