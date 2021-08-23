import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Image from "next/image";
//Antd
import { Row, Col } from "antd";

export default function IntroStructure() {
  let router = useRouter();
  const { t } = useTranslation("common");

  const [height, setHeight] = useState(0);
  useEffect(() => {
    let element = document.getElementById("image-height");
    setHeight(element.offsetHeight);
  }, []);
  return (
    <Row className={`d-flex justify-content-center align-items-center mb-5`}>
      {router.locale === "en" ? (
        <>
          <Col>
            <div
              className={`d-flex justify-content-center align-items-center`}
              style={{ height: `${height}px` }}
            >
              <h5 className={`fw-bold`}>Management Committee</h5>
            </div>
          </Col>
          <Col>
            <div id="image-height">
              <Image
                src={"/images/about/Governance/Group.webp"}
                alt={`Governance Structure`}
                height="320px"
                width="400px"
              />
            </div>
          </Col>
          <Col>
            <div
              className={`d-flex flex-column justify-content-around align-items-start`}
              style={{ height: `${height}px` }}
            >
              <div className={`d-flex `}>
                <h5 className={`fw-bold`}>Supreme Council</h5>
              </div>
              <div className={`d-flex `}>
                <h5 className={`fw-bold`}>Islamic Development Bank</h5>
              </div>
            </div>
          </Col>
        </>
      ) : (
        <>
          <Col>
            <div
              className={`d-flex flex-column justify-content-around align-items-start`}
              style={{ height: `${height}px` }}
            >
              <div className={`d-flex justify-content-end w-100`}>
                <h5 className={`fw-bold`}>{t("Supreme Council")}</h5>
              </div>
              <div className={`d-flex justify-content-end w-100`}>
                <h5 className={`fw-bold`}>{t("Islamic Development Bank")}</h5>
              </div>
            </div>
          </Col>
          <Col>
            <div id="image-height">
              <Image
                src={"/images/about/Governance/Group.webp"}
                alt={`Governance Structure`}
                height="320px"
                width="400px"
              />
            </div>
          </Col>
          <Col>
            <div
              className={`d-flex justify-content-center align-items-center`}
              style={{ height: `${height}px` }}
            >
              <h5 className={`fw-bold`}>{t("Management Committee")}</h5>
            </div>
          </Col>
        </>
      )}
    </Row>
  );
}
