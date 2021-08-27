import Layout from "../layout";
import Members from "../../component/about/subPages/members";

export default function MembersContainer({ projectTitle, bannerImage }) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
      title={"Members"}
    >
      <Members />
    </Layout>
  );
}
