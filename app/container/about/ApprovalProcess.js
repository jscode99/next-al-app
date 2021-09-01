import Layout from "../layout";
//Component
import ApprovalProcess from "../../component/about/subPages/approvalProcess";

export default function ApprovalProcessContainer({
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
      title={"approval process and selection criteria"}
    >
      <ApprovalProcess />
    </Layout>
  );
}
