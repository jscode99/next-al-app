import Image from "next/image";
//Antd
import { Row, Col } from "antd";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
//component
import LegendSection from "./LegendSection";
//Service
import convertToInternationalCurrencySystem from "../../../services/internationalCurrency";
//styles
import style from "./index.module.sass";

export default function ProjectFundChart({ finalChartData, reserve }) {
  const base_url = process.env.BASE_URL;
  // console.log("finalChartData", finalChartData);
  const [xAxisWidth, setXAxisWidth] = useState(0);
  const [chartSeriesData, setChartSeriesData] = useState([]);
  const [option, setOption] = useState([]);
  const [chartData, setChartData] = useState([]);
  let router = useRouter();
  const { t } = useTranslation("common");
  const [showChart, setShowChart] = useState(true);

  // useEffect(() => {
  //   if (!showChart)
  //     setTimeout(() => {
  //       setShowChart(true);
  //     }, 10000);
  // }, [showChart]);

  useEffect(() => {
    let series = [
      {
        name: "Approved",
        data: [],
      },

      {
        name: "Disbursed",
        data: [],
      },
    ];

    let options = {
      chart: {
        //   height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "90%",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      stroke: {
        show: true,
        width: 30,
        colors: ["transparent"],
      },

      grid: {
        strokeDashArray: 7,
        //   row: {
        //     colors: ["#fff", "#f2f2f2"],
        //   },
      },
      xaxis: {
        labels: {
          show: false,
          rotate: -45,
          formatter: function (value, timestamp, opts) {
            return value;
          },
        },
        categories: [],
        // tickPlacement: "on",
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#a8a8a8"],
            fontSize: "8px",
            fontWeight: 400,
          },
          formatter: (value) => {
            return value / 1000 + "K";
          },
        },
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w }
          ) {
            return "$" + value;
          },
          title: {
            formatter: (seriesName) => seriesName + " :",
          },
        },
      },
      legend: {
        show: false,
        //   position: "top",
        //   horizontalAlign: "right",
        // //   width: 100,
        //   height: 50,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return "$" + convertToInternationalCurrencySystem(Number(val));
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      fill: {
        type: "gradient",
        colors:
          router.locale === "en"
            ? ["#12ab97", "#ed6961"]
            : ["#ed6961", "#12ab97"],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.75,
          gradientToColors:
            router.locale === "en"
              ? ["#a7e05f", "#ffb28e"]
              : ["#ffb28e", "#a7e05f"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [10],
        },
      },
    };

    let chartData = [];

    // console.log("options", options.xaxis.categories);
    if (
      Object.keys(finalChartData).length > 0 /* &&
      (chartSeriesData.length === 0 ||
        Object.keys(option).length === 0 ||
        chartData.length === 0) */
    ) {
      for (let index = 0; index < Object.keys(finalChartData).length; index++) {
        for (let item = 0; item < reserve.length; item++) {
          if (router.locale === "en") {
            if (
              reserve[item].ProjectTitle.toLowerCase() ===
              finalChartData[index].title.toLowerCase()
            ) {
              series[0].data.push(
                Math.round(
                  parseFloat(finalChartData[index].totalApprovedAmount) +
                    parseFloat(reserve[item].Amount)
                )
              );
              series[1].data.push(
                Math.round(
                  parseFloat(finalChartData[index].totalDisbursementAmount)
                )
              );
            }
          } else {
            if (
              reserve[item].ProjectTitle.toLowerCase() ===
              finalChartData[index].title.toLowerCase()
            ) {
              series[1].data.push(
                Math.round(
                  parseFloat(finalChartData[index].totalApprovedAmount) +
                    parseFloat(reserve[item].Amount)
                )
              );
              series[0].data.push(
                Math.round(
                  parseFloat(finalChartData[index].totalDisbursementAmount)
                )
              );
            }
          }
        }
        options.xaxis.categories.push(finalChartData[index].title);
        chartData.push({
          title: finalChartData[index].title,
          url: finalChartData[index].logo,
        });
      }
      // console.log("chartData", chartData);
      setChartSeriesData(series);
      setOption(options);
      setChartData(chartData);
    }
  }, [finalChartData /* chartSeriesData, option, chartData */]);

  const legendData = [
    {
      color: `linear-gradient(to bottom, #ffb28e, #ed6961)`,
      text: t("disbursed"),
    },
    {
      color: `linear-gradient(to bottom, #a7e05f, #12ab97)`,
      text: t("approved"),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (router.locale === "ar") {
        document.getElementById("table").scrollLeft = 150000;
        document.getElementById("tableS").scrollLeft = 150000;
      }

      let apexChart =
        document.getElementsByClassName(
          "apexcharts-xaxis"
        )[0]; /* .getElementsByTagName("line")[0] */
      // console.log(
      //   "chartElement==========>",
      //   // fundChartElement1,
      //   // fundChartElement1.width.animVal.value
      //   apexChart,
      //   apexChart.getBoundingClientRect().width,
      //   apexChart.getBBox().width
      // );
      if (apexChart)
        setXAxisWidth(
          apexChart.getBoundingClientRect().width || apexChart.getBBox().width
        );
    }, 5000);
  }, [showChart]);

  return (
    <div className={`${style.bg2} pb-5`}>
      <div className={`${style.container} px-5`}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <h3
              className={`${
                router.locale === "en"
                  ? style.chart_container_title
                  : style.chart_container_title_ar
              } text-center mb-4 pt-4 m-0 text-capitalize`}
            >
              {t("al aqsa arab funds – approved vs disbursements")}
            </h3>
            <div
              className={`${style.chart_container} shadow bg-white overflow-hidden`}
            >
              <LegendSection legendData={legendData} />
              {/* <div id="fund_chart"></div> */}
              {showChart &&
                Object.keys(option).length > 0 &&
                chartSeriesData.length > 0 && (
                  <div className={`${style.bar_chart} overflow-hidden px-4`}>
                    <ApexCharts
                      options={option}
                      series={chartSeriesData}
                      type="bar"
                      width={"100%"}
                      height={"435px"}
                    />
                  </div>
                )}
              <div className="d-flex justify-content-end align-items-center px-5">
                {xAxisWidth ? (
                  <div
                    className={`${style.chart_xAxis} d-flex justify-content-around align-items-center`}
                    style={{ width: xAxisWidth }}
                  >
                    {chartData.map((data, index) => (
                      <div
                        key={index}
                        className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100 pt-2 px-2`}
                      >
                        <div className={``}>
                          <div
                            className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                          >
                            <Image
                              src={base_url + data.url}
                              alt={`Logo`}
                              height="45px"
                              width="45px"
                            />
                          </div>
                        </div>
                        <div
                          className={`${
                            router.locale === "en"
                              ? style.xAxis_title
                              : style.xAxis_title_ar
                          } text-center fw-bold`}
                        >
                          {data.title}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{ height: "150px", width: "100%" }}
                    className={`d-flex justify-content-center align-items-center`}
                  >
                    Loading...
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={24} lg={0} xl={0}>
            <h3
              className={`${
                router.locale === "en"
                  ? style.chart_container_title
                  : style.chart_container_title_ar
              } text-center mb-4 pt-4 m-0 text-capitalize`}
            >
              {t("al aqsa arab funds – approved vs disbursements")}
            </h3>
            <div
              className={`${style.chart_container} shadow bg-white overflow-hidden`}
            >
              <LegendSection legendData={legendData} />
              <div id="table" className={`${style.horz_scroll}`}>
                {showChart &&
                  Object.keys(option).length > 0 &&
                  chartSeriesData.length > 0 && (
                    <div className={`${style.bar_chart} px-4`}>
                      <ApexCharts
                        options={option}
                        series={chartSeriesData}
                        type="bar"
                        width={"200%"}
                        height={"435px"}
                      />
                    </div>
                  )}
                <div className="d-flex justify-content-start align-items-center px-5 ms-4">
                  {xAxisWidth ? (
                    <div
                      className={`${style.chart_xAxis} d-flex justify-content-around align-items-center`}
                      style={{ width: xAxisWidth }}
                    >
                      {chartData.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100 pt-2 px-2`}
                          style={{ width: xAxisWidth / chartData.length }}
                        >
                          <div className={``}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={base_url + data.url}
                                alt={`Logo`}
                                height="45px"
                                width="45px"
                              />
                            </div>
                          </div>
                          <div
                            className={`${
                              router.locale === "en"
                                ? style.xAxis_title
                                : style.xAxis_title_ar
                            } text-center fw-bold text-wrap`}
                          >
                            {data.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{ height: "150px", width: "100%" }}
                      className={`d-flex justify-content-center align-items-center`}
                    >
                      Loading...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <h3
              className={`${
                router.locale === "en"
                  ? style.chart_container_title
                  : style.chart_container_title_ar
              } text-center mb-4 pt-4 m-0 text-capitalize`}
            >
              {t("al aqsa arab funds – approved vs disbursements")}
            </h3>
            <div
              className={`${style.chart_container} shadow bg-white overflow-hidden`}
            >
              <div id="tableS" className={`${style.horz_scroll}`}>
                <LegendSection legendData={legendData} />
                {showChart &&
                  Object.keys(option).length > 0 &&
                  chartSeriesData.length > 0 && (
                    <div className={`${style.bar_chart} px-4`}>
                      <ApexCharts
                        options={option}
                        series={chartSeriesData}
                        type="bar"
                        width={"600%"}
                        height={"435px"}
                      />
                    </div>
                  )}
                <div className="d-flex justify-content-start align-items-center px-5 ms-4">
                  {xAxisWidth ? (
                    <div
                      className={`${style.chart_xAxis} d-flex justify-content-around align-items-center`}
                      style={{ width: xAxisWidth }}
                    >
                      {chartData.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100 pt-2 px-2`}
                          style={{ width: xAxisWidth / chartData.length }}
                        >
                          <div className={``}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={base_url + data.url}
                                alt={`Logo`}
                                height="45px"
                                width="45px"
                              />
                            </div>
                          </div>
                          <div
                            className={`${
                              router.locale === "en"
                                ? style.xAxis_title
                                : style.xAxis_title_ar
                            } text-center fw-bold text-wrap`}
                          >
                            {data.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{ height: "150px", width: "100%" }}
                      className={`d-flex justify-content-center align-items-center`}
                    >
                      Loading...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
