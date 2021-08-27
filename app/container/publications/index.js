import Layout from "../layout";
import Publications from "../../component/publications";

export default function PublicationsContainer({
  publication,
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      page={"publications"}
      pageName={"publications"}
      projectTitle={projectTitle}
      title={"Publications"}
      heroImage={bannerImage}
    >
      <Publications pubListData={publication} />
    </Layout>
  );
}
