import { useEffect, useContext } from "react";
import Layout from "../layout";
import Publications from "../../component/publications";
//Context API
import AppContext from "../../AppContext";

export default function PublicationsContainer({
  publication,
  projectTitle,
  bannerImage,
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
      page={"publications"}
      pageName={"publications"}
      projectTitle={projectTitle}
      title={"publications"}
      heroImage={bannerImage}
    >
      <Publications pubListData={publication} />
    </Layout>
  );
}
