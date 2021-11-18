import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Layout from "../layout";
import Projects from "../../component/projects";
//Context API
import AppContext from "../../AppContext";

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
  let { appContext, setAppContext } = useContext(AppContext);
  useEffect(() => {
    if (appContext && !appContext.fLinkClick)
      setAppContext({
        ...appContext,
        loader: false,
      });
  }, [appContext.fLinkClick]);

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
