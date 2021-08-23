import Layout from "../layout";
import About from "../../component/about";

export default function AboutContainer({ projectTitle }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"about"}
      pageName={"about"}
      projectTitle={projectTitle}
    >
      <About />
    </Layout>
  );
}
