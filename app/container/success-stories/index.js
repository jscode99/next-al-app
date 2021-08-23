import Layout from "../layout";
import SuccessStories from "../../component/success-stories/index";

export default function SuccessStoriesContainer({
  stories,
  successStoriesAR,
  projectTitle,
}) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={projectTitle}
    >
      <SuccessStories stories={stories} successStoriesAR={successStoriesAR} />
    </Layout>
  );
}
