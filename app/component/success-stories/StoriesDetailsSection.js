//Components
import SuccessStoriesDetails from "./success-stories-details/SuccessDetails";

export default function StoriesDetailsComponent({
  successMedia,
  storiesProps,
}) {
  return (
    <>
      <SuccessStoriesDetails
        successMedia={successMedia}
        storiesProps={storiesProps}
      />
    </>
  );
}
