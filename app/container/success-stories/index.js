import { useRouter } from "next/router";
import Layout from "../layout";
import SuccessStories from "../../component/success-stories/index";

export default function SuccessStoriesContainer({
  stories,
  successStoriesAR,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"success stories"}
    >
      <SuccessStories stories={stories} successStoriesAR={successStoriesAR} />
    </Layout>
  );
}
