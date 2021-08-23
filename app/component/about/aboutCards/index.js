import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

//Antd
import { Row, Col } from "antd";
//styles
import style from "./index.module.sass";

export default function AboutUsCard() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const cardData = [
    {
      title: t("Governance Structure"),
      route: "/about/governance-structure",
    },
    {
      title: t("Members"),
      route: "/about/members",
    },
    {
      title: t("Approval Process and Selection Criteria"),
      route: "/about/approval-process-and-selection-criteria",
    },
  ];

  return (
    <div className={`${style.container_bg} py-5`}>
      <div className={`${style.container}`}>
        <div className={`d-flex justify-content-center align-items-center`}>
          <Row gutter={[24, 24]} className={`w-100`}>
            {cardData.map(data => (
              <>
                <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                  <div
                    className={`${style.aboutUsCard_container} shadow overflow-hidden`}
                  >
                    {router.locale === "en" ? (
                      <div
                        className={`d-flex justify-content-start align-items-center w-100 h-100`}
                      >
                        <p className={`h4 my-5 mx-4`}>{data.title}</p>
                        <div className={`d-flex justify-content-end w-50 me-5`}>
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
                          className={`d-flex justify-content-start ms-5 w-75`}
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
                        <p className={`h4 my-5 mx-4 text-end`}>{data.title}</p>
                      </div>
                    )}
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
