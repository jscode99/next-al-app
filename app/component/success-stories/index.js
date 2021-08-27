import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import SuccessStoriesCard from "../success-stories/success-stories-card/SuccessStoriesCard";
import PaginationSection from "../../common-component/pagination/Pagination";
import styles from "./index.module.sass";

export default function SuccessStories({ stories, successStoriesAR }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [listSize, setListSize] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className={`${styles.bg}`}>
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
      <PaginationSection
        listData={stories}
        listSize={listSize}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
