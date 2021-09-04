//components
import Layout from "../layout";
import StoriesDetailsComponent from "../../component/success-stories/StoriesDetailsSection";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function StoriesDetailsContainer({
  storiesProps,
  projectTitle,
  bannerImage,
}) {
  // const router = useRouter();
  console.log("storiesProps", storiesProps);
  // useEffect(() => {
  //   if (!storiesProps) router.push("/success-stories");
  // }, [storiesProps]);
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
