import Layout from "../layout";
import SuccessStories from "../../component/success-stories/index";

export default function SuccessStoriesContainer({
  stories,
  successStoriesAR,
  projectTitle,
  bannerImage,
}) {
  console.log("successStoriesAR", successStoriesAR);
  return (
    <Layout
      heroImage={bannerImage}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={projectTitle}
      title={"success stories"}
    >
      <SuccessStories stories={stories} successStoriesAR={successStoriesAR} />
    </Layout>
  );
}
