import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Row, Col } from "antd";
import style from "./index.module.sass";

export default function MissionSection({ data }) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={`${style.mission_container} px-5`}>
      <Row className={`mb-4`}>
        {router.locale === "en" ? (
          <>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className={`d-flex justify-content-start py-3`}>
                <h3 className={`${style.mission_title} text-capitalize`}>
                  {t("mission")}
                </h3>
              </div>
              <p
                className={`${
                  router.locale === "en"
                    ? style.mission_description
                    : style.mission_description_ar
                } text-justify`}
              >
                {data && Object.keys(data).length > 0 && data.description}
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div
                className={`d-flex justify-content-center align-items-center  h-100`}
              >
                <Image
                  src={"/images/about/mission.webp"}
                  alt={`Organization-Img`}
                  height="300px"
                  width="500px"
                />
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div
                className={`d-flex justify-content-center  align-items-center pt-4 h-100`}
              >
                <Image
                  src={"/images/about/mission.webp"}
                  alt={`Organization-Img`}
                  height="300px"
                  width="500px"
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className={`d-flex justify-content-end py-3`}>
                <h3
                  className={`${
                    router.locale === "en"
                      ? style.mission_title
                      : style.mission_title_ar
                  }  fw-bold text-capitalize`}
                >
                  {t("mission")}
                </h3>
              </div>
              <p
                className={`${
                  router.locale === "en"
                    ? style.mission_description
                    : style.mission_description_ar
                } text-justify`}
                dir={router.locale === "ar" ? "rtl" : ""}
              >
                {data && Object.keys(data).length > 0 && data.description}
              </p>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}
