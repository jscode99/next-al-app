import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Empty } from "antd";
//Common Components
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
import PaginationSection from "../../common-component/pagination/Pagination";
//Page components
import PublicationList from "./publication-list/PublicationList";
import style from "./index.module.sass";

export default function Publications({ pubListData }) {
  let router = useRouter();
  const { t } = useTranslation("common");
  const [listSize, setListSize] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
      <div className={`${style.bg}`}>
        <InnerLayout>
          <PageCommonSection title={t("Publications")} />
          <div className={`${style.publication_list_container}`}>
            {pubListData && pubListData.length > 0 ? (
              <>
                <PublicationList
                  listData={pubListData}
                  listSize={listSize}
                  pageNumber={pageNumber}
                />
              </>
            ) : (
              <Empty className={`mb-4`} />
            )}
          </div>
          <PaginationSection
            listData={pubListData}
            listSize={listSize}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </InnerLayout>
      </div>
    </>
  );
}
