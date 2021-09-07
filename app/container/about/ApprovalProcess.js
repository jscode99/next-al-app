import { useRouter } from "next/router";
import Layout from "../layout";
//Component
import ApprovalProcess from "../../component/about/subPages/approvalProcess";

export default function ApprovalProcessContainer({
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
      title={"approval process and selection criteria"}
    >
      <ApprovalProcess staticSite={staticSite} staticSiteAr={staticSiteAr} />
    </Layout>
  );
}
