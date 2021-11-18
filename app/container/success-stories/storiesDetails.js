//components
import Layout from "../layout";
import StoriesDetailsComponent from "../../component/success-stories/StoriesDetailsSection";
import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function StoriesDetailsContainer({
  successMedia,
  storiesProps,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const router = useRouter();
  // useEffect(() => {
  //   if (!storiesProps) router.push("/success-stories");
  // }, [storiesProps]);
  return (
    <Layout
      heroImage={bannerImage}
      page={"success-stories"}
      pageName={"success stories"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={storiesProps.Title}
    >
      <StoriesDetailsComponent
        successMedia={successMedia}
        storiesProps={storiesProps}
      />
    </Layout>
  );
}
