import Layout from "../layout";
import Contact from "../../component/contact";

export default function ContactContainer({
  staticSite,
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"contact"}
      pageName={"contact"}
      projectTitle={projectTitle}
      title={"get in touch"}
    >
      <Contact staticSite={staticSite} />
    </Layout>
  );
}
