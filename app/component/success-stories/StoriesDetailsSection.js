//Components
import SuccessStoriesDetails from "./success-stories-details/SuccessDetails";

export default function StoriesDetailsComponent({
  successMedia,
  storiesProps,
}) {
  // let jsonStories = JSON.parse(storiesProps);
  return (
    <>
      <SuccessStoriesDetails
        successMedia={successMedia}
        storiesProps={storiesProps}
      />
    </>
  );
}
