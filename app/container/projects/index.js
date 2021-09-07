import { useRouter } from "next/router";
import Layout from "../layout";
import Projects from "../../component/projects";

export default function ProjectsContainer({
  projectTitle,
  projectAr,
  projectData,
  projectDataAr,
  bannerImage,
  arab,
  arabAr,
}) {
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"projects"}
      pageName={"projects"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"projects"}
    >
      <Projects
        projectTitle={router.locale === "en" ? projectTitle : projectAr}
        projectData={router.locale === "en" ? projectData : projectDataAr}
        arab={arab}
        arabAr={arabAr}
      />
    </Layout>
  );
}
