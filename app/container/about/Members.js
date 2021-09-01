import Layout from "../layout";
import Members from "../../component/about/subPages/members";

export default function MembersContainer({
  projectTitle,
  bannerImage,
  members,
  flag,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
      title={"members"}
    >
      <Members members={members} flag={flag} />
    </Layout>
  );
}
