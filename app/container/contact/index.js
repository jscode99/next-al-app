import { useRouter } from "next/router";
import Layout from "../layout";
import { useEffect, useContext } from "react";
import Contact from "../../component/contact";
//Context API
import AppContext from "../../AppContext";

export default function ContactContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const router = useRouter();
  let { appContext, setAppContext } = useContext(AppContext);
  useEffect(() => {
    // console.log(
    //   "======================CONTACT===========================>",
    //   appContext.fLinkClick
    // );
    if (appContext && !appContext.fLinkClick)
      setAppContext({
        ...appContext,
        loader: false,
      });
  }, [appContext.fLinkClick]);
  return (
    <Layout
      heroImage={bannerImage}
      page={"contact"}
      pageName={"contact"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"get in touch"}
    >
      <Contact staticSite={staticSite} staticSiteAr={staticSiteAr} />
    </Layout>
  );
}
