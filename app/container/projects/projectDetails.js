//Common-components
import Layout from "../layout";
//Components
import ProjectDetails from "../../component/projects/projectDetails";

export default function ProjectDetailsContainer({
  projectTitle,
  projectDetailsProp,
  sector,
}) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"projects"}
      pageName={"projects"}
      projectTitle={projectTitle}
    >
      <ProjectDetails
        projectTitle={projectTitle}
        projectData={projectDetailsProp}
        sector={sector}
      />
    </Layout>
  );
}
