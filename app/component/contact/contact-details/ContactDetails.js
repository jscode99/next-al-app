import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
// Style
import style from "./index.module.sass";

export default function ContactDetails({}) {
  let router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <div className={`${style.details_container}`}>
        <Row className={`py-5`}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className={`mb-4`}>
            <h2
              className={`${style.details_title_primary} ${
                router.locale === "en" ? "" : "text-end"
              } text-white`}
            >
              {t("Call Us On + 966-12-6361400")}
            </h2>
            <h4
              className={`${style.details_para} ${
                router.locale === "en" ? "" : "text-end"
              } text-white pt-2`}
            >
              {t("Our office hours are Sunday – Thursday, 9am-6pm")}
            </h4>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className={`mb-4`}>
            <h2
              className={`${style.details_title_primary} ${
                router.locale === "en" ? "" : "text-end"
              } text-white`}
            >
              {t("Fax")}
            </h2>
            <h4
              className={`${style.details_para} ${
                router.locale === "en" ? "" : "text-end"
              } text-white`}
            >
              + 966-12-6366871
            </h4>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2
              className={`${style.details_title_primary} ${
                router.locale === "en" ? "" : "text-end"
              } text-white`}
            >
              {t("Email Us Directly")}
            </h2>
            <h4
              className={`${style.details_para} ${
                router.locale === "en" ? "" : "text-end"
              } text-white`}
            >
              tfd@isdb.org
            </h4>
          </Col>
        </Row>
      </div>
    </>
  );
}
