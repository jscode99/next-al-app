import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
import AppStep from "../../../../../common-component/app-step";
//Styles
import style from "./index.module.sass";

export default function Approval() {
  const router = useRouter();

  let stepperData = [
    {
      title: "Project Identification",
      description:
        "The project for funding is identified by the PNA or parties cleared by the PNA.",
    },
    {
      title: "Proposals Evaluation",
      description:
        "An evaluation and rationale for the project is conducted by IDB consultants and staff in coordination with the PNA",
    },
    {
      title: "Submittal to Management Committee for Approval",
      description:
        "A project report is submitted to the Management Committee for review and approval of the funding proposal ",
    },
  ];
  return (
    <Row className={`h-100`}>
      <div className={`d-flex w-100 justify-content-center my-5`}>
        <h3>Projects Approval Process</h3>
      </div>
      {router.locale === "en" ? (
        <>
          <Col className={`w-50`}>
            <div className={`d-flex h-100 justify-content-end`}>
              <Image
                src={"/images/about/approval/approval_ini.webp"}
                alt={`Process`}
                height="500px"
                width="560px"
              />
            </div>
          </Col>
          <Col className={`w-50`}>
            <h4 className={`${style.approval_initiation} mb-5 ms-5 ps-3`}>
              Initiation
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
      ) : (
        <>
          <Col className={`w-50`}>
            <h4
              className={`${style.approval_initiation} d-flex justify-content-end me-5 pe-3 mb-5`}
            >
              Initiation
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
                src={"/images/about/approval/approval_ini.webp"}
                alt={`Process`}
                height="500px"
                width="560px"
              />
            </div>
          </Col>
        </>
      )}
    </Row>
  );
}
