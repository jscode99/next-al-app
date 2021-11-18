import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Layout from "../layout";
import SuccessStories from "../../component/success-stories/index";
//Context API
import AppContext from "../../AppContext";

export default function SuccessStoriesContainer({
  stories,
  successStoriesAR,
  projectTitle,
  projectAr,
  bannerImage,
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
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"success stories"}
    >
      <SuccessStories stories={stories} successStoriesAR={successStoriesAR} />
    </Layout>
  );
}
