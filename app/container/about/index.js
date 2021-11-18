import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Layout from "../layout";
import About from "../../component/about";
//Context API
import AppContext from "../../AppContext";

export default function AboutContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
  flag,
  flagAr,
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
      page={"about"}
      pageName={"about"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"al aqsa fund"}
    >
      <About
        staticSite={staticSite}
        staticSiteAr={staticSiteAr}
        flag={flag}
        flagAr={flagAr}
      />
    </Layout>
  );
}
