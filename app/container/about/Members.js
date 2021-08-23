import Layout from "../layout";
import Members from "../../component/about/subPages/members";

export default function MembersContainer({ projectTitle }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
    >
      <Members />
    </Layout>
  );
}
