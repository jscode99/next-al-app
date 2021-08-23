import { useState } from "react";
// Common Components
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
//Components
import SuccessStoriesDetails from "./success-stories-details/SuccessDetails";
//Styles
import styles from "./index.module.sass";

export default function StoriesDetailsComponent({ storiesProps }) {
  return (
    <>
      <div className={`${styles.bg}`}>
        <InnerLayout>
          <PageCommonSection title={storiesProps.Title} />
          <div className={`${styles.stories_card_container}`}>
            <SuccessStoriesDetails storiesProps={storiesProps} />
          </div>
        </InnerLayout>
      </div>
    </>
  );
}
