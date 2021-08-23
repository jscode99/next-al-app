import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
//Antd
import { Col, Row, Empty, Skeleton, Button } from "antd";

//Services
import { paginationService } from "../../../services/commonService";

//Styles
import style from "./index.module.sass";

export default function PublicationList({ listData, listSize, pageNumber }) {
  console.log("listData", listData);
  let router = useRouter();
  const { t } = useTranslation("common");
  const [paginatedListData, setPaginatedListData] = useState([]);
  //
  useEffect(() => {
    if (listData && listData.length > 0)
      setPaginatedListData(paginationService(listData, listSize, pageNumber));
  }, [listSize, pageNumber, listData]);

  return router.locale === "en" ? (
    <Row>
      {paginatedListData && paginatedListData.length > 0 ? (
        paginatedListData.map((listData, i) => (
          <>
            <Col span={24} className={`mb-3 mt-4`}>
              <div className={`${style.publication_list_card} bg-white`}>
                <Row className={`h-100`}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div
                      className={`d-flex justify-content-center h-100 flex-column`}
                    >
                      {listData && listData.Title ? (
                        <>
                          <p
                            className={`${style.publication_list_title} d-flex justify-content-start px-4 m-0`}
                          >
                            {listData.Title}
                          </p>
                        </>
                      ) : (
                        <Skeleton.Input style={{ width: 150 }} active />
                      )}
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-start h-100 flex-column`}
                    >
                      {listData && listData.Date ? (
                        <>
                          <p
                            className={`${style.publication_list_label} d-flex justify-content-center align-items-center mb-2`}
                          >
                            Date
                          </p>
                          <p
                            className={`${style.publication_list_title} d-flex justify-content-center align-items-center m-0`}
                          >
                            {listData.Date}
                          </p>
                        </>
                      ) : (
                        <Skeleton.Input style={{ width: 50 }} active />
                      )}
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      {listData && listData.Title ? (
                        <a
                          href={listData.Document[0].url}
                          download
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            type="text"
                            shape="round"
                            className={`${style.publication_list_button}`}
                          >
                            Download
                          </Button>
                        </a>
                      ) : (
                        <Skeleton.Button active />
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </>
        ))
      ) : (
        <Row>
          <Col span={24}>
            <Empty />
          </Col>
        </Row>
      )}
    </Row>
  ) : (
    <Row>
      {paginatedListData && paginatedListData.length > 0 ? (
        paginatedListData.map((listData, i) => (
          <>
            <Col span={24} className={`mb-3 mt-4`}>
              <div className={`${style.publication_list_card} bg-white`}>
                <Row className={`h-100`}>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      {listData && listData.Title ? (
                        <a
                          href={listData.Document[0].url}
                          download
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            type="text"
                            shape="round"
                            className={`${style.publication_list_button}`}
                          >
                            {t("Download")}
                          </Button>
                        </a>
                      ) : (
                        <Skeleton.Button active />
                      )}
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-start h-100 flex-column`}
                    >
                      {listData && listData.Date ? (
                        <>
                          <p
                            className={`${style.publication_list_label} d-flex justify-content-end align-items-center mb-2 w-100`}
                          >
                            {t("Date")}
                          </p>
                          <p
                            className={`${style.publication_list_title} d-flex justify-content-center align-items-center text-end m-0 w-100`}
                          >
                            {listData.Date}
                          </p>
                        </>
                      ) : (
                        <Skeleton.Input style={{ width: 50 }} active />
                      )}
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div
                      className={`d-flex justify-content-center h-100 flex-column`}
                    >
                      {listData && listData.Title ? (
                        <>
                          <p
                            className={`${style.publication_list_title} text-end d-flex justify-content-start px-4 m-0`}
                          >
                            {listData.Title}
                          </p>
                        </>
                      ) : (
                        <Skeleton.Input style={{ width: 150 }} active />
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </>
        ))
      ) : (
        <Row>
          <Col span={24}>
            <Empty />
          </Col>
        </Row>
      )}
    </Row>
  );
}
