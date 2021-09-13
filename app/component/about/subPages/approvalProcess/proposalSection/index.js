import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
//Antd
import { Row, Col } from "antd";
//Style
import style from "./index.module.sass";

export default function ProposalSection({ data }) {
  console.log("=====+++++", data);
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <Row>
      <Col xs={0} sm={0} md={24} lg={24} xl={24}>
        <div className={`${style.container}`}>
          <div className={`${style.proposal_container} shadow mb-5`}>
            <div className={`p-4`}>
              <h3
                className={`${style.proposal_title} text-center w-100 text-capitalize`}
              >
                {t("proposal selection criteria")}
              </h3>
              <hr className={`${style.proposal_under_line} my-3`} />
              <p
                className={`${style.proposal_des} ${
                  router.locale === "en" ? "text-start" : "text-end"
                }`}
              >
                {data &&
                  Object.keys(data).length > 0 &&
                  data.description &&
                  data.description.length > 0 &&
                  data.description}
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={0} lg={0} xl={0}>
        <div className={`${style.container}`}>
          <div className={`${style.proposal_container} shadow mb-5 mx-2`}>
            <div className={`p-4`}>
              <h3
                className={`${style.proposal_title} text-center w-100 text-capitalize`}
              >
                {t("proposal selection criteria")}
              </h3>
              <hr className={`${style.proposal_under_line} my-3`} />
              <p
                className={`${style.proposal_des} ${
                  router.locale === "en" ? "text-start" : "text-end"
                }`}
              >
                {data && data.length > 0 && data.description}
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
