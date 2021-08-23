import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Row, Col } from "antd";

export default function MissionSection() {
  let router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Row className={`mb-4`}>
      {router.locale === "en" ? (
        <>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div
              className={`d-flex ${
                router.locale === "en"
                  ? `justify-content-start`
                  : `justify-content-end`
              } py-3`}
            >
              <h3 className={`fw-bold`}>{t("Mission")}</h3>
            </div>
            <p className={`h6`}>
              The Al Aqsa Fund finances projects aimed at strengthening the
              internal capacity of the Palestinian economy in the long term and
              addressing the humanitarian needs of the Palestinian people in the
              immediate term focusing on projects which include humanitarian and
              emergency assistance, reconstruction of infrastructure facilities
              and development projects in all vital sectors of the economy.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={`d-flex justify-content-center`}>
              <Image
                src={"/images/about/mission.webp"}
                height="300px"
                width="500px"
              />
            </div>
          </Col>
        </>
      ) : (
        <>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={`d-flex justify-content-center pt-4`}>
              <Image
                src={"/images/about/mission.webp"}
                height="300px"
                width="500px"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div
              className={`d-flex ${
                router.locale === "en"
                  ? `justify-content-start`
                  : `justify-content-end`
              } py-3`}
            >
              <h3 className={`fw-bold`}>{t("Mission")}</h3>
            </div>
            <p className={`h6 text-end`}>
              The Al Aqsa Fund finances projects aimed at strengthening the
              internal capacity of the Palestinian economy in the long term and
              addressing the humanitarian needs of the Palestinian people in the
              immediate term focusing on projects which include humanitarian and
              emergency assistance, reconstruction of infrastructure facilities
              and development projects in all vital sectors of the economy.
            </p>
          </Col>
        </>
      )}
    </Row>
  );
}
