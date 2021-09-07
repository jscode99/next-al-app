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
  console.log("finalChartData", finalChartData.reverse());
  const router = useRouter();
  const base_url = process.env.BASE_URL;

  const { t } = useTranslation("common");

  return (
    <div className={`${style.bg1}`}>
      <div className={`${style.container}`}>
        <h3
          className={`${style.route_card_main_title} text-capitalize text-center mb-4`}
        >
          {t("al aqsa & arab funds approved projects per fund")}
        </h3>
        <Row gutter={[20, 20]} className={`w-100 justify-content-center pb-5`}>
          {finalChartData.map(data => (
            <>
              <Col xs={0} sm={0} md={0} lg={5} xl={5}>
                <div
                  className={`${style.route_card_container} pt-4`}
                  onClick={() => {
                    router.push({
                      pathname: `/projects/${mapTitleToRoutePath(data.title)}`,
                      query: { ...router.query },
                    });
                  }}
                >
                  <div
                    className={`d-flex justify-content-start align-items-start ${
                      router.locale === "ar" ? `flex-row-reverse` : ``
                    }`}
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
                      <p className={`m-0 ${style.route_card_approvals_amount}`}>
                        {convertToInternationalCurrencySystem(
                          data.totalApprovedAmount,
                        )}
                      </p>
                      <p
                        className={`${style.route_card_approvals} text-capitalize`}
                      >
                        {t("approvals")}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${
                      style.route_card_title
                    } d-flex p-4 m-0 w-100 ${
                      router.locale === "en"
                        ? `text-start`
                        : `text-end justify-content-end`
                    } `}
                  >
                    {data.title}
                  </p>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </div>
  );
}
