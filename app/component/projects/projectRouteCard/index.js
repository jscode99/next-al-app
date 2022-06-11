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

export default function ProjectRouteCard({ finalChartData, reserve }) {
  console.log("finalChartData---->", finalChartData);
  console.log("Reserve---->", reserve);

  const router = useRouter();
  const base_url = process.env.BASE_URL;
  const [projectData, setProjectData] = useState([]);

  const { t } = useTranslation("common");
  useEffect(() => {
    let totalAmount = 0;
    let projectDataNew = [];
    console.log("Project Data Arrray", projectDataNew);

    if (
      finalChartData &&
      finalChartData.length > 0 &&
      reserve &&
      reserve.length > 0
    ) {
      for (let index = 0; index < finalChartData.length; index++) {
        for (let item = 0; item < reserve.length; item++) {
          if (
            reserve[item].ProjectTitle.toLowerCase() ===
            finalChartData[index].title.toLowerCase()
          ) {
            projectDataNew.push({
              title: finalChartData[index].title,
              logo: finalChartData[index].logo,
              totalApprovedAmount:
                finalChartData[index].totalApprovedAmount +
                parseInt(reserve[item].Amount),
            });
            console.log(
              "Testing--->",
              finalChartData[index].totalApprovedAmount
            );
          }
        }
      }
      setProjectData(projectDataNew);
    }
    // setTotalApprovedAmount(totalAmount);
    console.log("TotalAmount---->", totalAmount);
  }, [finalChartData, reserve]);

  return (
    <div className={`${style.bg1}`}>
      <div className={`${style.container}`}>
        <h3
          className={`${
            router.locale === "en"
              ? style.route_card_main_title
              : style.route_card_main_title_ar
          } text-capitalize text-center mb-4`}
        >
          {t("al aqsa & arab funds approved projects per fund")}
        </h3>
        <Row
          className={`w-100 justify-content-center align-items-center pb-5 ${
            router.locale === "ar" && "flex-row-reverse"
          }`}
        >
          {projectData &&
            projectData.map((data) => (
              <>
                <Col xs={0} sm={0} md={8} lg={6} xl={6}>
                  <div
                    className={`${style.route_card_container} shadow pt-4 m-2`}
                    onClick={() => {
                      router.push({
                        pathname: `/projects/${mapTitleToRoutePath(
                          data.title
                        )}`,
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
                        <p
                          className={`m-0 ${style.route_card_approvals_amount}`}
                        >
                          $
                          {convertToInternationalCurrencySystem(
                            data.totalApprovedAmount
                          )}
                        </p>
                        <p
                          className={`${
                            router.locale === "en"
                              ? style.route_card_approvals
                              : style.route_card_approvals_ar
                          } text-capitalize`}
                        >
                          {t("approvals")}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`${
                        router.locale === "en"
                          ? style.route_card_title
                          : style.route_card_title_ar
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
          {projectData &&
            projectData.map((data) => (
              <>
                <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                  <div
                    className={`${style.route_card_container} shadow pt-4 my-2 mx-5`}
                    onClick={() => {
                      router.push({
                        pathname: `/projects/${mapTitleToRoutePath(
                          data.title
                        )}`,
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
                        <p
                          className={`m-0 ${style.route_card_approvals_amount}`}
                        >
                          $
                          {convertToInternationalCurrencySystem(
                            data.totalApprovedAmount
                          )}
                        </p>
                        <p
                          className={`${
                            router.locale === "en"
                              ? style.route_card_approvals
                              : style.route_card_approvals_ar
                          } text-capitalize`}
                        >
                          {t("approvals")}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`${
                        router.locale === "en"
                          ? style.route_card_title
                          : style.route_card_title_ar
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
