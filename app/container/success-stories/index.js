import Layout from "../layout";
import SuccessStories from "../../component/success-stories/index";

export default function SuccessStoriesContainer({
  stories,
  successStoriesAR,
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={projectTitle}
      title={"Success Stories"}
    >
      <SuccessStories stories={stories} successStoriesAR={successStoriesAR} />
    </Layout>
  );
}
