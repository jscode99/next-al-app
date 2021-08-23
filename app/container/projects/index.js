import Layout from "../layout";
import Projects from "../../component/projects";

export default function ProjectsContainer({ projectTitle, projectData }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"projects"}
      pageName={"projects"}
      projectTitle={projectTitle}
    >
      <Projects projectTitle={projectTitle} projectData={projectData} />
    </Layout>
  );
}
