import Layout from "../layout";
import Projects from "../../component/projects";

export default function ProjectsContainer({
  projectTitle,
  projectData,
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
      <Projects projectTitle={projectTitle} projectData={projectData} />
    </Layout>
  );
}
