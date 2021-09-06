import Layout from "../layout";
import Governance from "../../component/about/subPages/governance";

export default function GovernanceContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
      title={"governance structure"}
    >
      <Governance staticSite={staticSite} staticSiteAr={staticSiteAr} />
    </Layout>
  );
}
