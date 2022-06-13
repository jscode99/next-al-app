import React from "react";
import { useEffect, useContext } from "react";
import Sitemap from "../../component/sitemap";
import Layout from "../layout/index";

import AppContext from "../../AppContext";

export default function SitemapContainer({ projectTitle, bannerImage }) {
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
      page={""}
      pageName={""}
      projectTitle={projectTitle}
      title={""}
      heroImage={bannerImage}
    >
      <Sitemap projectTitle={projectTitle} />
    </Layout>
  );
}
