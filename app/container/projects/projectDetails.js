//Common-components
import Layout from "../layout";
//Components
import ProjectDetails from "../../component/projects/projectDetails";

export default function ProjectDetailsContainer({
  projectTitle,
  projectDetailsProp,
  sector,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"projects"}
      pageName={"projects"}
      projectTitle={projectTitle}
      title={"Projects"}
    >
      <ProjectDetails
        projectTitle={projectTitle}
        projectData={projectDetailsProp}
        sector={sector}
      />
    </Layout>
  );
}
