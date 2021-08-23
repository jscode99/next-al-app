import Layout from "../layout";
import Governance from "../../component/about/subPages/governance";

export default function GovernanceContainer({ projectTitle }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
    >
      <Governance />
    </Layout>
  );
}
