import Layout from "../layout";
import About from "../../component/about";

export default function AboutContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  bannerImage,
  flag,
  flagAr,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
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
