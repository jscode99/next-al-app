import Layout from "../layout";
import Projects from "../../component/projects";

export default function ProjectsContainer({
  projectTitle,
  projectAr,
  projectData,
  bannerImage,
  arab,
  arabAr,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"projects"}
      pageName={"projects"}
      projectTitle={projectTitle}
      title={"projects"}
    >
      <Projects
        projectTitle={projectTitle}
        projectAr={projectAr}
        projectData={projectData}
        arab={arab}
        arabAr={arabAr}
      />
    </Layout>
  );
}
