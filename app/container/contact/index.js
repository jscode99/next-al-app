import Layout from "../layout";
import Contact from "../../component/contact";

export default function ContactContainer({ projectTitle }) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"contact"}
      pageName={"contact"}
      projectTitle={projectTitle}
    >
      <Contact />
    </Layout>
  );
}
