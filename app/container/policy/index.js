import React from 'react'
import { useEffect, useContext } from "react";
import Policy from '../../component/policy';
import Layout from "../layout/index";

import AppContext from "../../AppContext";


export default function PolicyContainer({
  projectTitle,
  bannerImage
}) {
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
        page={"policy"}
        pageName={"policy"}
        projectTitle={projectTitle}
        title={"privacy policy"}
        heroImage={bannerImage}
        >
            <Policy />
         </Layout>
    );
}

