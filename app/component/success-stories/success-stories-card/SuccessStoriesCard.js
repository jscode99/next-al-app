import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
//Antd
import { Row, Col } from "antd";

//Services
import { paginationService } from "../../../services/commonService";
// Title
import { mapTitleToRoutePath } from "../../../services/storiesTitle";

//Styles
import styles from "./index.module.sass";

export default function SuccessStoriesCard({ listData, listSize, pageNumber }) {
  // console.log("listData", listData);
  // Translation Lib
  const { t } = useTranslation("common");
  const base_url = process.env.BASE_URL;
  //router
  const router = useRouter();
  const [paginatedListData, setPaginatedListData] = useState([]);
  //UseEffect
  useEffect(() => {
    if (listData && listData.length > 0)
      setPaginatedListData(paginationService(listData, listSize, pageNumber));
  }, [listSize, pageNumber, listData]);

  return (
    <div className={`${styles.stories_card_container} px-5`}>
      <Row gutter={[16, 16]} className={`px-3 pt-3`}>
        {paginatedListData &&
          paginatedListData.length > 0 &&
          paginatedListData.map((data) => (
            <>
              {/* {console.log("data", data)} */}
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                className={`px-2 mt-3`}
              >
                <div
                  className={`d-flex justify-content-start align-items-start w-100`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push({
                      pathname: `/success-stories/${data.id}`,
                      query: { ...router.query },
                    });
                  }}
                >
                  <div
                    className={`${styles.stories_img_card} position-relative w-100`}
                  >
                    <div
                      className={`${styles.stories_img_des_container} position-absolute d-flex justify-content-end w-100 h-100 flex-column`}
                    >
                      <p
                        className={`${
                          router.locale === "en"
                            ? styles.stories_img_des1
                            : styles.stories_img_des1_ar
                        } d-flex justify-content-center text-center text-white px-5 `}
                      >
                        {data.Title}
                      </p>
                      <hr className={`${styles.stories_under_line} mb-1`} />
                      <p
                        className={`${
                          router.locale === "en"
                            ? styles.stories_img_des2
                            : styles.stories_img_des2_ar
                        } d-flex justify-content-center text-white px-3 py-1 text-capitalize`}
                      >
                        {router.locale === "en"
                          ? `total approved : $${data.TotalApproved}`
                          : `$${data.TotalApproved} : ${t("total approved")}`}
                      </p>
                    </div>

                    <Image
                      className={`${styles.card_image} position-absolute`}
                      alt={`Stories-image`}
                      src={base_url + data.Image.url}
                      layout="fill"
                    />
                  </div>
                </div>
              </Col>
            </>
          ))}
      </Row>
    </div>
  );
}
