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
      title={"Approval Process and Selection Criteria"}
    >
      <ApprovalProcess />
    </Layout>
  );
}
