import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
//services
import { mapTitleToRoutePath } from "../../../services/projectTitle";
import convertToInternationalCurrencySystem from "../../../services/internationalCurrency";
//Styles
import style from "./index.module.sass";

export default function ProjectRouteCard({ finalChartData }) {
  console.log("finalChartData", finalChartData);
  const router = useRouter();
  const base_url = process.env.BASE_URL;

  const { t } = useTranslation("common");

  return (
    <>
      <h3 className={`text-center mb-1 m-0`}>
        {t("Al Aqsa & Arab funds approved projects per fund")}
      </h3>
      <Row
        gutter={[20, 20]}
        className={`w-100 justify-content-center mt-5 pb-5`}
      >
        {finalChartData.map(data => (
          <>
            <Col xs={0} sm={0} md={0} lg={5} xl={5}>
              <div
                className={`${style.route_card_container} shadow pt-4`}
                onClick={() => {
                  router.push(`/projects/${mapTitleToRoutePath(data.title)}`);
                }}
              >
                <div
                  className={`d-flex justify-content-start align-items-start `}
                >
                  <div
                    className={`d-flex justify-content-start rounded-circle w-50 ps-3`}
                  >
                    <Image
                      src={base_url + data.logo}
                      alt={`Achievement-Logos`}
                      height="70"
                      width="70"
                    />
                  </div>
                  <div
                    className={`${style.route_card_count} d-flex justify-content-center flex-column ps-3 pt-2`}
                  >
                    <p className={`m-0`}>
                      {convertToInternationalCurrencySystem(
                        data.totalApprovedAmount,
                      )}
                    </p>
                    <p className={`${style.route_card_approvals} `}>
                      Approvals
                    </p>
                  </div>
                </div>
                <p
                  className={`${style.route_card_title} d-flex p-4 m-0 w-100 text-start `}
                >
                  {data.title}
                </p>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
}
