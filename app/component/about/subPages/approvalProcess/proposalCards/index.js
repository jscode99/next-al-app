import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
//Style
import style from "./index.module.sass";
export default function ProposalCard({ cardData }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={`${style.ProposalCard_bg} pb-5`}>
      <div className={`${style.ProposalCard_container} `}>
        <h3
          className={`${style.ProposalCard_title} text-capitalize text-center py-4 m-0`}
        >
          {t("criteria")}
        </h3>

        <Row>
          {cardData.map(data => (
            <>
              <Col xs={0} sm={0} md={12} lg={8} xl={8}>
                <div
                  className={`${style.ProposalCard_card_section} shadow p-5 m-2`}
                >
                  <div
                    className={`d-flex justify-content-start align-items-center mb-3`}
                  >
                    {router.locale === "en" ? (
                      <>
                        <div
                          className={`${style.ProposalCard_card_polygon} ${style.number} ${data.color} d-flex justify-content-center align-items-center`}
                        >
                          <h4 className={`m-0 text-white`}>{data.no}</h4>
                        </div>
                        <div
                          className={`d-flex justify-content-start w-75 ps-4`}
                        >
                          <h4 className={`${style.ProposalCard_card_title}`}>
                            {data.title}
                          </h4>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`text-end w-75 pe-4`}>
                          <h4 className={`${style.ProposalCard_card_title}`}>
                            {data.title}
                          </h4>
                        </div>
                        <div
                          className={`${style.ProposalCard_card_polygon} ${data.color} d-flex justify-content-center align-items-center`}
                        >
                          <h4 className={`m-0 text-white ${style.number}`}>
                            {data.no}
                          </h4>
                        </div>
                      </>
                    )}
                  </div>
                  <p
                    className={`${style.ProposalCard_des} ${
                      router.locale === "en" ? `` : `text-end`
                    } m-0`}
                  >
                    {data.des}
                  </p>
                </div>
              </Col>
            </>
          ))}
          {cardData.map(data => (
            <>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <div
                  className={`${style.ProposalCard_card_section} shadow p-5 m-2`}
                >
                  <div
                    className={`d-flex justify-content-start align-items-center mb-3`}
                  >
                    {router.locale === "en" ? (
                      <>
                        <div
                          className={`${style.ProposalCard_card_polygon} ${style.number} ${data.color} d-flex justify-content-center align-items-center`}
                        >
                          <h4 className={`m-0 text-white`}>{data.no}</h4>
                        </div>
                        <div
                          className={`d-flex justify-content-start w-75 ps-4`}
                        >
                          <h4 className={`${style.ProposalCard_card_title}`}>
                            {data.title}
                          </h4>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`text-end w-75 pe-4`}>
                          <h4 className={`${style.ProposalCard_card_title}`}>
                            {data.title}
                          </h4>
                        </div>
                        <div
                          className={`${style.ProposalCard_card_polygon} ${data.color} d-flex justify-content-center align-items-center`}
                        >
                          <h4 className={`m-0 text-white ${style.number}`}>
                            {data.no}
                          </h4>
                        </div>
                      </>
                    )}
                  </div>
                  <p
                    className={`${style.ProposalCard_des} ${
                      router.locale === "en" ? `` : `text-end`
                    } m-0`}
                  >
                    {data.des}
                  </p>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </div>
  );
}

// ${data.bgColor}
