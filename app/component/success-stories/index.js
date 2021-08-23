import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Components
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
import SuccessStoriesCard from "../success-stories/success-stories-card/SuccessStoriesCard";
import PaginationSection from "../../common-component/pagination/Pagination";
import styles from "./index.module.sass";

export default function SuccessStories({ stories, successStoriesAR }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [listSize, setListSize] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <div className={`${styles.bg}`}>
        <InnerLayout>
          <PageCommonSection title={t("Success Stories")} />

          <div className={`${styles.stories_card_container}`}>
            {router.locale === "en" && stories && stories.length > 0 && (
              <SuccessStoriesCard
                listData={stories}
                listSize={listSize}
                pageNumber={pageNumber}
              />
            )}
            {router.locale === "ar" &&
              successStoriesAR &&
              successStoriesAR.length > 0 && (
                <SuccessStoriesCard
                  listData={successStoriesAR}
                  listSize={listSize}
                  pageNumber={pageNumber}
                />
              )}
          </div>
        </InnerLayout>
        <PaginationSection
          listData={stories}
          listSize={listSize}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}
