import Layout from "../layout";
//Component
import ApprovalProcess from "../../component/about/subPages/approvalProcess";

export default function ApprovalProcessContainer({ projectTitle }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
    >
      <ApprovalProcess />
    </Layout>
  );
}
