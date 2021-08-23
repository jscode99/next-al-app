import Layout from "../layout";
import Publications from "../../component/publications";

export default function PublicationsContainer({ publication, projectTitle }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"publications"}
      pageName={"publications"}
      projectTitle={projectTitle}
    >
      <Publications pubListData={publication} />
    </Layout>
  );
}
