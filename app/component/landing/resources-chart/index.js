//Chart
import Chart from "react-google-charts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import style from "./index.module.sass";
import convertToInternationalCurrencySystem from "../../../services/internationalCurrency";
import LegendSection from "./LegendSection";

export default function ResourceChart({
  projectTitle,
  projectAr,
  alAqsa,
  alAqsaAr,
  arab,
  arabAr,
  yearly,
  yearlyAr,
  flag,
  flagAr,
}) {
  // console.log("projectTitle", projectTitle);
  // console.log("projectAr", projectAr);
  // console.log("alAqsa", alAqsa);
  // console.log("alAqsaAr", alAqsaAr);
  console.log("arab", arab);
  // console.log("arabAr", arabAr);
  // console.log("yearly direct", yearly);
  // console.log("yearlyAr", yearlyAr);
  // console.log("flag", flag);
  // console.log("flagAr", flagAr);

  const router = useRouter();
  const { t } = useTranslation("common");

  const [xAxisWidth, setXAxisWidth] = useState(0);
  const [activeData, setActiveData] = useState("aqsa");
  const [arabResource, setArabResource] = useState([]);
  const [totalArab, settotalArab] = useState([]);
  const [totalArDisbursed, setTotalArDisbursed] = useState("");
  const [totalAqsa, settotalAqsa] = useState([]);
  const [totalYearly, settotalYearly] = useState([]);
  const [totalYrDisbursed, setTotalYrDisbursed] = useState("");
  const [arabOption, setArabOption] = useState([]);
  const [aqsaResource, setAqsaResource] = useState([]);
  const [aqsaOption, setAqsaOption] = useState([]);
  const [yearlyApproval, setYearlyApproval] = useState([]);
  const [yearlyOption, setYearlyOption] = useState([]);
  const [xDataYr, setXdataYr] = useState(null);
  const [xDataAr, setXdataAr] = useState(null);
  const [xDataAl, setXdataAl] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // let fundChartElement1 = document.getElementsByTagName("rect")[0];
      let apexChart =
        document.getElementsByClassName(
          "apexcharts-xaxis",
        )[0]; /* .getElementsByTagName("line")[0] */
      console.log(
        "chartElement==========>",
        // fundChartElement1,
        // fundChartElement1.width.animVal.value
        apexChart,
        apexChart.getBoundingClientRect().width,
        apexChart.getBBox().width,
      );
      setXAxisWidth(
        apexChart.getBoundingClientRect().width || apexChart.getBBox().width,
      );
    }, 5000);
    //YearlyData
    let seriesYr = [
      {
        name: "Approved Amount",
        data: [],
      },

      {
        name: "Disbursement Amount",
        data: [],
      },
    ];
    const optionsYr = {
      chart: {
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
          formatter: value => {
            return value / 1000 + "K";
          },
        },
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w },
          ) {
            return "$" + value;
          },
          title: {
            formatter: seriesName => seriesName + " :",
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
        colors: ["#ed6961", "#12ab97"],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.75,
          gradientToColors: ["#ffb28e", "#a7e05f"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [10],
        },
      },
    };
    //Arab Resource
    let seriesAr = [
      {
        name: "Disbursement Amount",
        data: [],
      },

      {
        name: "Grants",
        data: [],
      },
    ];

    const optionsAR = {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "70%",
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
          formatter: value => {
            return value / 1000 + "K";
          },
        },
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w },
          ) {
            return "$" + value;
          },
          title: {
            formatter: seriesName => seriesName + " :",
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
        colors: ["#ed6961", "#12ab97"],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.75,
          gradientToColors: ["#ffb28e", "#a7e05f"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [10],
        },
      },
    };

    //Aqsa
    let seriesAq = [
      {
        name: "Total Contribution",
        data: [],
      },
    ];

    const optionsAq = {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "25%",
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      // stroke: {
      //   show: true,
      //   width: 30,
      //   colors: ["transparent"],
      // },

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
          formatter: value => {
            return value / 1000 + "K";
          },
        },
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (
            value,
            { series, seriesIndex, dataPointIndex, w },
          ) {
            return "$" + value;
          },
          title: {
            formatter: seriesName => seriesName + " :",
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
        colors: ["#12ab97"],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.75,
          gradientToColors: ["#a7e05f"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [10],
        },
      },
    };

    let AqsaSorted =
      router.locale === "en"
        ? [
            ...alAqsa.sort(function (x, y) {
              return y.TotalContribution - x.TotalContribution;
            }),
          ]
        : [
            ...alAqsa
              .sort(function (x, y) {
                return y.TotalContribution - x.TotalContribution;
              })
              .reverse(),
          ];

    let XAxisDataAq = [];
    let totalAq = 0;

    if (AqsaSorted.length > 0 && flag.length > 0) {
      let XAxisDataAqLocal = [];
      for (let index = 0; index < AqsaSorted.length; index++) {
        seriesAq[0].data.push(
          Math.round(parseFloat(AqsaSorted[index].TotalContribution)),
        );
        totalAq += Math.round(parseFloat(AqsaSorted[index].TotalContribution));
        optionsAq.xaxis.categories.push(AqsaSorted[index].Country);
        XAxisDataAqLocal.push(AqsaSorted[index].Country);
      }
      for (let index = 0; index < XAxisDataAqLocal.length; index++) {
        let data = null;
        for (let innerIndex = 0; innerIndex < flag.length; innerIndex++) {
          if (
            flag[innerIndex].Country.toLowerCase() ===
            XAxisDataAqLocal[index].toLowerCase()
          ) {
            data = {
              url: flag[innerIndex].Flag[0].url,
              title: XAxisDataAqLocal[index],
            };
          }
        }
        XAxisDataAq.push(data);
      }
      // console.log("totalAq", totalAq);
      setAqsaResource(seriesAq);
      setAqsaOption(optionsAq);
      setXdataAl(XAxisDataAq);
      settotalAqsa(totalAq);
    }

    let ArabSorted =
      router.locale === "en"
        ? [
            ...arab.sort(function (x, y) {
              return y.Grants - x.Grants;
            }),
          ]
        : [
            ...arab
              .sort(function (x, y) {
                return y.Grants - x.Grants;
              })
              .reverse(),
          ];

    let XAxisDataAr = [];
    let totalAr = 0;
    let totalArDis = 0;
    if (ArabSorted.length > 0 && projectTitle.length > 0) {
      let XAxisDataAqLocal = [];
      for (let index = 0; index < ArabSorted.length; index++) {
        seriesAr[0].data.push(Math.round(parseFloat(ArabSorted[index].Grants)));
        seriesAr[1].data.push(
          Math.round(parseFloat(ArabSorted[index].DisbursementAmount)),
        );
        totalAr += Math.round(parseFloat(ArabSorted[index].Grants));
        totalArDis += Math.round(
          parseFloat(ArabSorted[index].DisbursementAmount),
        );
        optionsAR.xaxis.categories.push(ArabSorted[index].Fund);
        XAxisDataAqLocal.push(ArabSorted[index].Fund);
      }
      for (let index = 0; index < XAxisDataAqLocal.length; index++) {
        let data = null;
        for (
          let innerIndex = 0;
          innerIndex < projectTitle.length;
          innerIndex++
        ) {
          if (
            projectTitle[innerIndex].title.toLowerCase() ===
            XAxisDataAqLocal[index].toLowerCase()
          ) {
            data = {
              url: projectTitle[innerIndex].logo[0].url,
              title: XAxisDataAqLocal[index],
            };
          }
        }
        XAxisDataAr.push(data);
      }
      setArabResource(seriesAr);
      setArabOption(optionsAR);
      setXdataAr(XAxisDataAr);
      settotalArab(totalAr);
      setTotalArDisbursed(totalArDis);
    }

    let yearlySorted =
      router.locale === "en"
        ? [
            ...yearly.sort(function (x, y) {
              return x.id - y.id;
            }),
          ]
        : [
            ...yearly
              .sort(function (x, y) {
                return x.id - y.id;
              })
              .reverse(),
          ];
    let XAxisDataYr = [];
    let totalYr = 0;
    let totalYrDis = 0;
    if (yearlySorted.length > 0) {
      for (let index = 0; index < yearlySorted.length; index++) {
        seriesYr[0].data.push(
          Math.round(parseFloat(yearlySorted[index].ApprovedAmount)),
        );
        seriesYr[1].data.push(
          Math.round(parseFloat(yearlySorted[index].DisbursementAmount)),
        );
        totalYr += Math.round(parseFloat(yearlySorted[index].ApprovedAmount));
        totalYrDis += Math.round(
          parseFloat(yearlySorted[index].DisbursementAmount),
        );
        optionsYr.xaxis.categories.push(yearlySorted[index].Year);
        XAxisDataYr.push(yearlySorted[index].Year);
      }
      console.log("seriesYr", seriesYr);
      setXdataYr(XAxisDataYr);
      setYearlyApproval(seriesYr);
      setYearlyOption(optionsYr);
      settotalYearly(totalYr);
      setTotalYrDisbursed(totalYrDis);
    }
  }, [yearly, arab]);

  const legendDataAq = [
    {
      color: `linear-gradient(to bottom, #a7e05f, #12ab97)`,
      text: t("approved"),
    },
  ];
  const legendDataAr = [
    {
      color: `linear-gradient(to bottom, #ffb28e, #ed6961)`,
      text: t("approved"),
    },
    {
      color: `linear-gradient(to bottom, #a7e05f, #12ab97)`,
      text: t("disburesed"),
    },
  ];
  const legendDataYr = [
    {
      color: `linear-gradient(to bottom, #ffb28e, #ed6961)`,
      text: t("approved"),
    },
    {
      color: `linear-gradient(to bottom, #a7e05f, #12ab97)`,
      text: t("disburesed"),
    },
  ];

  return (
    <div className={`${style.resource_bg} py-3`}>
      <div className={`${style.resource_container}`}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <div
              className={`d-flex justify-content-center overflow-auto ${
                router.locale === "ar" ? "flex-row-reverse" : "flex-row"
              } py-3`}
            >
              <p
                onClick={() => {
                  setActiveData("aqsa");
                }}
                style={{ cursor: "pointer" }}
                className={`${
                  style.resource_subtitle
                } text-capitalize text-nowrap ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } ${
                  activeData === "aqsa" ? style.resource_selected_title : ``
                } px-4 mb-2`}
              >
                {t("al aqsa fund resources")}
              </p>
              <p
                onClick={() => {
                  setActiveData("arab");
                }}
                style={{ cursor: "pointer" }}
                className={`${
                  style.resource_subtitle
                } text-capitalize text-nowrap ${
                  router.locale === "ar" ? "text-end" : "text-start"
                }  ${
                  activeData === "arab" ? style.resource_selected_title : ``
                } px-4 mb-2`}
              >
                {t("arab funds resources")}
              </p>
              <p
                onClick={() => {
                  setActiveData("yearly");
                }}
                style={{ cursor: "pointer" }}
                className={`${
                  style.resource_subtitle
                } text-capitalize text-nowrap ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } ${
                  activeData === "yearly" ? style.resource_selected_title : ``
                } px-4 mb-2`}
              >
                {t("yearly approvals")}
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div
              className={`d-flex justify-content-start overflow-auto ${
                router.locale === "ar" ? "flex-row-reverse" : "flex-row"
              } py-3`}
            >
              <p
                onClick={() => {
                  setActiveData("aqsa");
                }}
                style={{ cursor: "pointer" }}
                className={`${
                  style.resource_subtitle
                } text-capitalize text-nowrap ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } ${
                  activeData === "aqsa" ? style.resource_selected_title : ``
                } px-4 mb-2`}
              >
                {t("al aqsa fund resources")}
              </p>
              <p
                onClick={() => {
                  setActiveData("arab");
                }}
                style={{ cursor: "pointer" }}
                className={`${
                  style.resource_subtitle
                } text-capitalize text-nowrap ${
                  router.locale === "ar" ? "text-end" : "text-start"
                }  ${
                  activeData === "arab" ? style.resource_selected_title : ``
                } px-4 mb-2`}
              >
                {t("arab funds resources")}
              </p>
              <p
                onClick={() => {
                  setActiveData("yearly");
                }}
                style={{ cursor: "pointer" }}
                className={`${
                  style.resource_subtitle
                } text-capitalize text-nowrap ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } ${
                  activeData === "yearly" ? style.resource_selected_title : ``
                } px-4 mb-2`}
              >
                {t("yearly approvals")}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <div
              className={`${style.chart_container} shadow bg-white overflow-hidden p-4`}
            >
              {router.locale === "en" ? (
                <>
                  {activeData === "aqsa" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize m-0`}
                        >
                          {t("total Amount")} :{" "}
                          <span>{`$${
                            activeData === "aqsa"
                              ? new Intl.NumberFormat().format(totalAqsa)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAq} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "arab" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total disbursement")} :{" "}
                          <span>{`$${
                            activeData === "arab"
                              ? new Intl.NumberFormat().format(totalArDisbursed)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total granted")} :{" "}
                          <span>{`$${
                            activeData === "arab"
                              ? new Intl.NumberFormat().format(totalArab)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAr} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "yearly" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total disbursed")} :{" "}
                          <span>{`$${
                            activeData === "yearly"
                              ? new Intl.NumberFormat().format(totalYrDisbursed)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total Approved")} :{" "}
                          <span>{`$${
                            activeData === "yearly"
                              ? new Intl.NumberFormat().format(totalYearly)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataYr} />
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  {activeData === "aqsa" ? (
                    <>
                      <div className={`d-flex justify-content-start w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        {router.locale === "en" ? (
                          <p
                            className={`${style.resource_chart_indicator} text-capitalize m-0`}
                          >
                            {t("total Amount")} :{" "}
                            <span>{`$${
                              activeData === "aqsa"
                                ? new Intl.NumberFormat().format(totalAqsa)
                                : ""
                            }`}</span>
                            {/* {router.locale === "ar" ? <span>$</span>:''} */}
                          </p>
                        ) : (
                          <p
                            className={`${style.resource_chart_indicator} text-capitalize m-0`}
                          >
                            <span>{`$${
                              activeData === "aqsa"
                                ? new Intl.NumberFormat().format(totalAqsa)
                                : ""
                            }`}</span>{" "}
                            : {t("total Amount")}
                            {/* {router.locale === "ar" ? <span>$</span>:''} */}
                          </p>
                        )}
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAq} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "arab" ? (
                    <>
                      <div className={`d-flex justify-content-start w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        {router.locale === "en" ? (
                          <>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              {t("total disbursed")} :{" "}
                              <span>{`$${
                                activeData === "arab"
                                  ? new Intl.NumberFormat().format(
                                      totalArDisbursed,
                                    )
                                  : ""
                              }`}</span>
                              {/* {router.locale === "ar" ? <span>$</span>:''} */}
                            </p>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              {t("total granted")} :{" "}
                              <span>{`$${
                                activeData === "arab"
                                  ? new Intl.NumberFormat().format(totalArab)
                                  : ""
                              }`}</span>
                              {/* {router.locale === "ar" ? <span>$</span>:''} */}
                            </p>
                          </>
                        ) : (
                          <>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              <span>{`$${
                                activeData === "arab"
                                  ? new Intl.NumberFormat().format(
                                      totalArDisbursed,
                                    )
                                  : ""
                              }`}</span>{" "}
                              : {t("total disbursed")}
                              {/* {router.locale === "ar" ? <span>$</span>:''} */}
                            </p>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              <span>{`$${
                                activeData === "arab"
                                  ? new Intl.NumberFormat().format(totalArab)
                                  : ""
                              }`}</span>{" "}
                              :{t("total granted")}
                              {/* {router.locale === "ar" ? <span>$</span>:''} */}
                            </p>
                          </>
                        )}
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAr} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "yearly" ? (
                    <>
                      <div className={`d-flex justify-content-start w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        {router.locale === "en" ? (
                          <>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              {t("total disbursed")} :{" "}
                              <span>{`$${
                                activeData === "yearly"
                                  ? new Intl.NumberFormat().format(
                                      totalYrDisbursed,
                                    )
                                  : ""
                              }`}</span>
                              {/* {router.locale === "ar" ? <span>$</span>:''} */}
                            </p>

                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              {t("total Approved")} :{" "}
                              <span>{`$${
                                activeData === "yearly"
                                  ? new Intl.NumberFormat().format(totalYearly)
                                  : ""
                              }`}</span>
                            </p>
                          </>
                        ) : (
                          <>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              <span>{`$${
                                activeData === "yearly"
                                  ? new Intl.NumberFormat().format(
                                      totalYrDisbursed,
                                    )
                                  : ""
                              }`}</span>{" "}
                              : {t("total disbursed")}
                            </p>
                            <p
                              className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                            >
                              <span>{`$${
                                activeData === "yearly"
                                  ? new Intl.NumberFormat().format(totalYearly)
                                  : ""
                              }`}</span>{" "}
                              : {t("total Approved")}
                              {/* {router.locale === "ar" ? <span>$</span>:''} */}
                            </p>
                          </>
                        )}
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataYr} />
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
              {/* <div id="fund_chart"></div> */}
              <div className={`${style.horz_scroll}`}>
                <div className={`${style.bar_chart}`}>
                  {activeData === "aqsa" && (
                    <ApexCharts
                      options={aqsaOption}
                      series={aqsaResource}
                      type="bar"
                      width={"200%"}
                      height={"400px"}
                    />
                  )}
                  {activeData === "arab" && (
                    <ApexCharts
                      options={arabOption}
                      series={arabResource}
                      type="bar"
                      width={"200%"}
                      height={"400px"}
                    />
                  )}
                  {activeData === "yearly" && (
                    <ApexCharts
                      options={yearlyOption}
                      series={yearlyApproval}
                      type="bar"
                      width={"200%"}
                      height={"400px"}
                    />
                  )}
                </div>
                <div className="d-flex justify-content-start align-items-center px-5">
                  {activeData === "yearly" && xAxisWidth && (
                    <div
                      className={`d-flex justify-content-around align-items-start`}
                      style={{ width: xAxisWidth }}
                    >
                      {xDataYr.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{ width: xAxisWidth / xDataYr.length }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            {/* <div
                          className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                        >
                          <Image
                            src={data.url}
                            alt={`Logo`}
                            height="50px"
                            width="50px"
                          />
                        </div> */}

                            <div
                              className={`${style.resource_chart_labels} text-center fw-bold text-wrap`}
                            >
                              {data}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeData === "arab" && xAxisWidth && (
                    <div
                      className={`d-flex justify-content-around align-items-start`}
                      style={{ width: xAxisWidth }}
                    >
                      {xDataAr.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{ width: xAxisWidth / xDataAr.length }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={process.env.BASE_URL + data.url}
                                alt={`Logo`}
                                height="50px"
                                width="50px"
                              />
                            </div>

                            <div
                              className={`${style.resource_chart_labels} text-center fw-bold text-wrap`}
                            >
                              {data.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData === "aqsa" && xAxisWidth && (
                    <div
                      className={`d-flex justify-content-around align-items-start`}
                      style={{ width: xAxisWidth, marginLeft: "12px" }}
                    >
                      {xDataAl.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{
                            width: xAxisWidth / xDataAl.length,
                          }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={process.env.BASE_URL + data.url}
                                alt={`Logo`}
                                height="50px"
                                width="50px"
                              />
                            </div>

                            <div
                              className={`${style.resource_chart_labels} text-center fw-bold text-wrap`}
                            >
                              {data.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!xAxisWidth && (
                    <div
                      style={{ width: "100%" }}
                      className={`${style.resource_chart_labels} d-flex justify-content-center align-items-center`}
                    >
                      Loading...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div
              className={`${style.chart_container} shadow bg-white overflow-hidden p-4`}
            >
              {router.locale === "en" ? (
                <>
                  {activeData === "aqsa" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize m-0`}
                        >
                          {t("total Amount")} :{" "}
                          <span>{`$${
                            activeData === "aqsa"
                              ? new Intl.NumberFormat().format(totalAqsa)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAq} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "arab" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total disbursement")} :{" "}
                          <span>{`$${
                            activeData === "arab"
                              ? new Intl.NumberFormat().format(totalArDisbursed)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total granted")} :{" "}
                          <span>{`$${
                            activeData === "arab"
                              ? new Intl.NumberFormat().format(totalArab)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAr} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "yearly" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total disbursed")} :{" "}
                          <span>{`$${
                            activeData === "yearly"
                              ? new Intl.NumberFormat().format(totalYrDisbursed)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          {t("total Approved")} :{" "}
                          <span>{`$${
                            activeData === "yearly"
                              ? new Intl.NumberFormat().format(totalYearly)
                              : ""
                          }`}</span>
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataYr} />
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  {activeData === "aqsa" ? (
                    <>
                      <div className={`d-flex justify-content-start w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize m-0`}
                        >
                          <span>{`$${
                            activeData === "aqsa"
                              ? new Intl.NumberFormat().format(totalAqsa)
                              : ""
                          }`}</span>{" "}
                          : {t("total Amount")}
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAq} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "arab" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          <span>{`$${
                            activeData === "arab"
                              ? new Intl.NumberFormat().format(totalArDisbursed)
                              : ""
                          }`}</span>{" "}
                          : {t("total disbursement")}
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          <span>{`$${
                            activeData === "arab"
                              ? new Intl.NumberFormat().format(totalArab)
                              : ""
                          }`}</span>{" "}
                          : {t("total granted")}
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataAr} />
                    </>
                  ) : (
                    ""
                  )}
                  {activeData === "yearly" ? (
                    <>
                      <div className={`d-flex justify-content-end w-100`}>
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          <span>{`$${
                            activeData === "yearly"
                              ? new Intl.NumberFormat().format(totalYrDisbursed)
                              : ""
                          }`}</span>{" "}
                          :{t("total disbursed")}
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                        {/* <Col xs={24} sm={24} md={24} lg={12} xl={12}> */}
                        <p
                          className={`${style.resource_chart_indicator} text-capitalize px-2 m-0`}
                        >
                          <span>{`$${
                            activeData === "yearly"
                              ? new Intl.NumberFormat().format(totalYearly)
                              : ""
                          }`}</span>{" "}
                          : {t("total Approved")}
                          {/* {router.locale === "ar" ? <span>$</span>:''} */}
                        </p>
                        {/* </Col> */}
                      </div>
                      <LegendSection legendData={legendDataYr} />
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
              {/* <div id="fund_chart"></div> */}
              <div className={`${style.horz_scroll}`}>
                <div className={`${style.bar_chart}`}>
                  {activeData === "aqsa" && (
                    <ApexCharts
                      options={aqsaOption}
                      series={aqsaResource}
                      type="bar"
                      width={"600%"}
                      height={"400px"}
                    />
                  )}
                  {activeData === "arab" && (
                    <ApexCharts
                      options={arabOption}
                      series={arabResource}
                      type="bar"
                      width={"600%"}
                      height={"400px"}
                    />
                  )}
                  {activeData === "yearly" && (
                    <ApexCharts
                      options={yearlyOption}
                      series={yearlyApproval}
                      type="bar"
                      width={"600%"}
                      height={"400px"}
                    />
                  )}
                </div>
                <div className="d-flex justify-content-start align-items-center px-5">
                  {activeData === "yearly" && xAxisWidth && (
                    <div
                      className={`d-flex justify-content-around align-items-start`}
                      style={{ width: xAxisWidth }}
                    >
                      {xDataYr.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{ width: xAxisWidth / xDataYr.length }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            {/* <div
                          className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                        >
                          <Image
                            src={data.url}
                            alt={`Logo`}
                            height="50px"
                            width="50px"
                          />
                        </div> */}

                            <div
                              className={`${style.resource_chart_labels} text-center fw-bold text-wrap`}
                            >
                              {data}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeData === "arab" && xAxisWidth && (
                    <div
                      className={`d-flex justify-content-around align-items-start`}
                      style={{ width: xAxisWidth }}
                    >
                      {xDataAr.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{ width: xAxisWidth / xDataAr.length }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={process.env.BASE_URL + data.url}
                                alt={`Logo`}
                                height="50px"
                                width="50px"
                              />
                            </div>

                            <div
                              className={`${style.resource_chart_labels} text-center fw-bold text-wrap`}
                            >
                              {data.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeData === "aqsa" && xAxisWidth && (
                    <div
                      className={`d-flex justify-content-around align-items-start`}
                      style={{ width: xAxisWidth, marginLeft: "12px" }}
                    >
                      {xDataAl.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{
                            width: xAxisWidth / xDataAl.length,
                          }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={process.env.BASE_URL + data.url}
                                alt={`Logo`}
                                height="50px"
                                width="50px"
                              />
                            </div>

                            <div
                              className={`${style.resource_chart_labels} text-center fw-bold text-wrap`}
                            >
                              {data.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!xAxisWidth && (
                    <div
                      style={{ width: "100%" }}
                      className={`${style.resource_chart_labels} d-flex justify-content-center align-items-center`}
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
