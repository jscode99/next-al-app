import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Empty } from "antd";
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
        <div className={`${style.publication_list_container} px-5`}>
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
          <PaginationSection
            listData={pubListData}
            listSize={listSize}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </>
  );
}
