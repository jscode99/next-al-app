import Layout from "../layout";
import About from "../../component/about";

export default function AboutContainer({ projectTitle, bannerImage }) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
      title={"al aqsa fund"}
    >
      <About />
    </Layout>
  );
}
