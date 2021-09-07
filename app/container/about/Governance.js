import { useRouter } from "next/router";
import Layout from "../layout";
import Governance from "../../component/about/subPages/governance";

export default function GovernanceContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"governance structure"}
    >
      <Governance staticSite={staticSite} staticSiteAr={staticSiteAr} />
    </Layout>
  );
}
