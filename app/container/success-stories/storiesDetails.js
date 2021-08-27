//components
import Layout from "../layout";
import StoriesDetailsComponent from "../../component/success-stories/StoriesDetailsSection";

export default function StoriesDetailsContainer({
  storiesProps,
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={projectTitle}
      title={storiesProps.Title}
    >
      <StoriesDetailsComponent storiesProps={storiesProps} />
    </Layout>
  );
}
