import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
//Common Comp
import AppStep from "../../../../../common-component/app-step";
//Styles
import style from "./index.module.sass";

export default function Selection() {
  const router = useRouter();

  let stepperData = [
    {
      title: "Signing of Financing Agreements",
      description:
        "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements procedures.",
    },
    {
      title: "Project Disbursements",
      description:
        "Disbursements are made based on the progress of implementation, invoices, receiving vouchers…etc, approved by project consultant and the beneficiary.",
    },
    {
      title: "Implementation Follow Up",
      description:
        "Follow up on the implementation of projects and its  conformity with the approved procurement and disbursement procedures is conducted on a constant basis by IDB consultants in Palestine.",
    },
  ];
  return (
    <div className={`${style.selection_bg}`}>
      <div className={`${style.selection_container}`}>
        <Row className={`h-100 pt-5 pb-5`}>
          {router.locale === "en" ? (
            <>
              <Col className={`w-50`}>
                <h4
                  className={`mb-5 ${style.selection_imp} d-flex justify-content-end me-5 pe-3`}
                >
                  Implementation
                </h4>
                <div className={`d-flex h-100`}>
                  <AppStep
                    textAlign={"left"}
                    step={stepperData}
                    defaultActiveStep={3}
                  />
                </div>
              </Col>
              <Col className={`w-50`}>
                <div className={`d-flex h-100 justify-content-end`}>
                  <Image
                    src={"/images/about/approval/selection_imp.webp"}
                    alt={`Process`}
                    height="520px"
                    width="560px"
                  />
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col className={`w-50`}>
                <div className={`d-flex h-100 justify-content-end`}>
                  <Image
                    src={"/images/about/approval/selection_imp.webp"}
                    alt={`Process`}
                    height="520px"
                    width="560px"
                  />
                </div>
              </Col>
              <Col className={`w-50`}>
                <h4
                  className={`mb-5 ${style.approval_imp} d-flex justify-content-start ms-5 ps-3`}
                >
                  Implementation
                </h4>
                <div className={`d-flex h-100`}>
                  <AppStep
                    textAlign={"right"}
                    step={stepperData}
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
