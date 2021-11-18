import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Layout from "../layout";
import Contributions from "../../component/contributions";
//Context API
import AppContext from "../../AppContext";

export default function ContributionsContainer({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
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
      page={"contributions"}
      pageName={"contributions"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"contributions"}
    >
      <Contributions
        arabContributions={arabContributions}
        arabArContributions={arabArContributions}
        overallContributions={overallContributions}
        overallArContributions={overallArContributions}
      />
    </Layout>
  );
}
