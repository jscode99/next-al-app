import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
//Common Comp
import AppStep from "../../../../../common-component/app-step";
//Styles
import style from "./index.module.sass";

export default function Selection({ data }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={`${style.selection_bg}`}>
      <div className={`${style.selection_container} px-5`}>
        <Row className={`h-100 pt-5 pb-5`}>
          {router.locale === "en" ? (
            <>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <h4
                  className={`mb-5 ${style.selection_imp} d-flex justify-content-end me-5 pe-3 text-capitalize`}
                >
                  {t("implementation")}
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
                <div className={`d-flex justify-content-end`}>
                  <Image
                    src={"/images/about/approval/selection_imp.webp"}
                    alt={`Process`}
                    height="591"
                    width="668"
                  />
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col xs={0} sm={0} md={0} lg={12} xl={12}>
                <div className={`d-flex justify-content-end`}>
                  <Image
                    src={"/images/about/approval/selection_imp.webp"}
                    alt={`Process`}
                    height="591"
                    width="668"
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <h4
                  className={`mb-5 ${style.selection_imp_ar} d-flex justify-content-start ms-5 ps-3 text-capitalize`}
                >
                  {t("implementation")}
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
          )}
        </Row>
      </div>
    </div>
  );
}
