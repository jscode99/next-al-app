import Layout from "../layout";
import Governance from "../../component/about/subPages/governance";

export default function GovernanceContainer({ projectTitle, bannerImage }) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
      title={"Governance Structure"}
    >
      <Governance />
    </Layout>
  );
}
