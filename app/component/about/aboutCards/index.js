import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

//Antd
import { Row, Col } from "antd";
//styles
import style from "./index.module.sass";

export default function AboutUsCard({ cardData }) {
  const router = useRouter();
  const { t } = useTranslation("common");

  // const cardData = [
  //   {
  //     title: t("Governance Structure"),
  //     route: "/about/governance-structure",
  //   },
  //   {
  //     title: t("Members"),
  //     route: "/about/members",
  //   },
  //   {
  //     title: t("Approval Process and Selection Criteria"),
  //     route: "/about/approval-process-and-selection-criteria",
  //   },
  // ];

  return (
    <div className={`${style.container_bg} py-5`}>
      <div className={`${style.container} px-5`}>
        <div className={`d-flex justify-content-center align-items-center`}>
          <Row className={"w-100"}>
            <Col xs={0} sm={0} md={0} lg={24} xl={24}>
              <Row gutter={[24, 24]}>
                {cardData.map(data => (
                  <>
                    <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                      <div
                        className={`${style.aboutUsCard_container} overflow-hidden`}
                      >
                        {router.locale === "en" ? (
                          <div
                            className={`d-flex justify-content-start align-items-center w-100 h-100`}
                          >
                            <p
                              className={`${style.aboutCard_title} w-75 mb-0 ms-4 text-capitalize`}
                            >
                              {data.title}
                            </p>
                            <div
                              className={`d-flex justify-content-end w-25 me-4`}
                            >
                              <div
                                className={`${style.card_route} d-flex justify-content-center align-items-center rounded-circle`}
                                onClick={() => {
                                  router.push(data.route);
                                }}
                              >
                                <RightOutlined
                                  className={`${style.aboutCard_nav_arrow}`}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`d-flex justify-content-center align-items-center w-100 h-100`}
                          >
                            <div
                              className={`d-flex justify-content-start ms-4 w-25`}
                            >
                              <div
                                className={`${style.card_route} d-flex justify-content-center align-items-center rounded-circle`}
                                onClick={() => {
                                  router.push(data.route);
                                }}
                              >
                                <LeftOutlined
                                  className={`${style.aboutCard_nav_arrow}`}
                                />
                              </div>
                            </div>
                            <p
                              className={`${style.aboutCard_title_ar} text-end w-75 mb-0 me-4 text-capitalize`}
                            >
                              {data.title}
                            </p>
                          </div>
                        )}
                      </div>
                    </Col>
                  </>
                ))}
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={0} xl={0}>
              <Row gutter={[12, 12]}>
                {cardData.map(data => (
                  <>
                    <Col xs={24} sm={24} md={8} lg={0} xl={0}>
                      <div
                        className={`${style.aboutUsCard_container} overflow-hidden`}
                      >
                        {router.locale === "en" ? (
                          <div
                            className={`d-flex justify-content-start align-items-center w-100 h-100`}
                          >
                            <p
                              className={`${style.aboutCard_title} mb-0 w-75 ms-3`}
                            >
                              {data.title}
                            </p>
                            <div
                              className={`d-flex justify-content-end w-25 me-4`}
                            >
                              <div
                                className={`${style.card_route} d-flex justify-content-center align-items-center rounded-circle`}
                                onClick={() => {
                                  router.push(data.route);
                                }}
                              >
                                <RightOutlined
                                  className={`${style.aboutCard_nav_arrow}`}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`d-flex justify-content-center align-items-center w-100 h-100`}
                          >
                            <div
                              className={`d-flex justify-content-start align-items-center ms-4 w-25`}
                            >
                              <div
                                className={`${style.card_route} d-flex justify-content-center align-items-center rounded-circle`}
                                onClick={() => {
                                  router.push(data.route);
                                }}
                              >
                                <LeftOutlined
                                  className={`${style.aboutCard_nav_arrow}`}
                                />
                              </div>
                            </div>
                            <p
                              className={`${style.aboutCard_title} text-end w-75 mb-0 me-3`}
                            >
                              {data.title}
                            </p>
                          </div>
                        )}
                      </div>
                    </Col>
                  </>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
