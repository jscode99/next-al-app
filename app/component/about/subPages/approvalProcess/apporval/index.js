import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
import AppStep from "../../../../../common-component/app-step";
//Styles
import style from "./index.module.sass";

export default function Approval({ data }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={`${style.approval_bg}`}>
      <div className={`${style.container} px-5`}>
        <Row className={`h-100 px-3`}>
          <div className={`d-flex w-100 justify-content-center my-5`}>
            <h3 className={`${style.approval_title} text-capitalize`}>
              {t("project approval and implementation process")}
            </h3>
          </div>
          {router.locale === "en" ? (
            <>
              <Col xs={0} sm={0} md={0} lg={12} xl={12}>
                <div className={`d-flex h-100 justify-content-end`}>
                  <Image
                    src={"/images/about/approval/approval_ini.webp"}
                    alt={`Process`}
                    width={"556"}
                    height={"400"}
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <h4
                  className={`${style.approval_initiation} text-capitalize mb-5 ms-5 ps-3`}
                >
                  {t("initiation")}
                </h4>
                <div className={`d-flex h-100`}>
                  <AppStep
                    textAlign={"right"}
                    step={data}
                    defaultActiveStep={3}
                  />
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <h4
                  className={`${style.approval_initiation} d-flex justify-content-end me-5 pe-3 mb-5 text-capitalize`}
                >
                  {t("initiation")}
                </h4>
                <div className={`d-flex h-100`}>
                  <AppStep
                    textAlign={"left"}
                    step={data}
                    defaultActiveStep={3}
                  />
                </div>
              </Col>
              <Col xs={0} sm={0} md={0} lg={12} xl={12}>
                <div className={`d-flex h-100 justify-content-end`}>
                  <Image
                    src={"/images/about/approval/approval_ini.webp"}
                    alt={`Process`}
                    width="556px"
                    height="498px"
                  />
                </div>
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
}
