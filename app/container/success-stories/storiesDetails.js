//components
import Layout from "../layout";
import StoriesDetailsComponent from "../../component/success-stories/StoriesDetailsSection";

export default function StoriesDetailsContainer({
  storiesProps,
  projectTitle,
}) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={projectTitle}
    >
      <StoriesDetailsComponent storiesProps={storiesProps} />
    </Layout>
  );
}
