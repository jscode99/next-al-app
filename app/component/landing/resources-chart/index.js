//Chart
import Chart from "react-google-charts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import style from "./index.module.sass";

export default function ResourceChart() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [xAxisWidth, setXAxisWidth] = useState(0);
  const [activeData, setActiveData] = useState(true);
  const [arabResource, setArabResource] = useState();

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
  }, []);

  const series = [
    {
      name: "Aqsa Funds Resources",
      data: [
        318300000, 171800000, 138550000, 61900000, 61596000, 36900000, 29400000,
        17400000, 10400000, 9400000, 7400000, 6400000, 5400000, 4400000,
        3400000, 2400000, 1400000,
      ],
    },
  ];

  const seriesAr = [
    {
      name: "Arab Funds Resources",
      data: [
        138550000, 61900000, 61596000, 36900000, 7400000, 6400000, 5400000,
        4400000,
      ],
    },
  ];

  const optionsAr = {
    chart: {
      //   height: 350,
      type: "bar",
    },
    // annotations: {
    //     position: "front",
    //     points: [
    //       {
    //         x: "Arab Monetary Fund",
    //         // y: null,
    //         seriesIndex: 0,
    //         label: {
    //           borderColor: "#775DD0",
    //           offsetY: 0,
    //           style: {
    //             color: "#fff",
    //             background: "#775DD0",
    //           },
    //           text: "Bananas are good",
    //         },
    //       },
    //     ],
    // },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "15%",
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

      categories: [
        "Al Aqsa Funds",
        "Arab Bank For Economic Development In Africa",
        "Arab Monetary Fund",
        "Arab Fund For Economic And Social Development",
        "Saudi Fund For Development",
        "Arab Authority For Agricultural Investment And Development",
        "The Opec Fund For International Development",
        "The Arab Investment Guarantee Corporation",
      ],
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
        return "$" + val;
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
  const options = {
    chart: {
      //   height: 350,
      type: "bar",
    },
    // annotations: {
    //     position: "front",
    //     points: [
    //       {
    //         x: "Arab Monetary Fund",
    //         // y: null,
    //         seriesIndex: 0,
    //         label: {
    //           borderColor: "#775DD0",
    //           offsetY: 0,
    //           style: {
    //             color: "#fff",
    //             background: "#775DD0",
    //           },
    //           text: "Bananas are good",
    //         },
    //       },
    //     ],
    // },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "30%",
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
      categories: [
        "Jordan",
        "UAE",
        "Bahrain",
        "Algeria",
        "Saudi Arabia",
        "Sudan",
        "Syria",
        "Oman",
        "Qatar",
        "Kuwait",
        "Egypt",
        "Morocco",
        "Yemen",
        "Iraq",
        "Lebanon",
        "Mali",
        "Pakistan",
      ],
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
        return "$" + val;
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

  const titleAr = [
    {
      title: "Al Aqsa Funds",
      url: "/images/projects/logo8.webp",
    },
    {
      title: "Arab Bank For Economic Development In Africa",
      url: "/images/projects/logo3.webp",
    },
    {
      title: "Arab Monetary Fund",
      url: "/images/projects/logo2.webp",
    },
    {
      title: "Arab Fund For Economic And Social Development",
      url: "/images/projects/logo1.webp",
    },
    {
      title: "Saudi Fund For Development",
      url: "/images/projects/logo4.webp",
    },
    {
      title: "Arab Authority For Agricultural Investment And Development",
      url: "/images/projects/logo5.webp",
    },
    {
      title: "The Opec Fund For International Development",
      url: "/images/projects/logo8.webp",
    },
    {
      title: "The Arab Investment Guarantee Corporation",
      url: "/images/projects/logo6.webp",
    },
  ];

  const titleC = [
    {
      title: "Jordan",
      url: "/images/about/flags/Jordan.webp",
    },
    {
      title: "UAE",
      url: "/images/about/flags/Uae.webp",
    },
    {
      title: "Bahrain",
      url: "/images/about/flags/Baharain.webp",
    },
    {
      title: "Algeria",
      url: "/images/about/flags/Algeria.webp",
    },
    {
      title: "Saudi Arabia",
      url: "/images/about/flags/Saudi.webp",
    },
    {
      title: "Sudan",
      url: "/images/about/flags/Sudan.webp",
    },
    {
      title: "Syria",
      url: "/images/about/flags/Syria.webp",
    },
    {
      title: "Oman",
      url: "/images/about/flags/Oman.webp",
    },
    {
      title: "Qatar",
      url: "/images/about/flags/Qatar.webp",
    },
    {
      title: "Kuwait",
      url: "/images/about/flags/Kuwait.webp",
    },
    {
      title: "Egypt",
      url: "/images/about/flags/Egypt.webp",
    },
    {
      title: "Morocco",
      url: "/images/about/flags/Morocco.webp",
    },
    {
      title: "Yemen",
      url: "/images/about/flags/Yemen.webp",
    },
    {
      title: "Iraq",
      url: "/images/about/flags/Iraq.webp",
    },
    {
      title: "Lebanon",
      url: "/images/about/flags/Lebanon.webp",
    },
    {
      title: "Mali",
      url: "/images/about/flags/Mali.webp",
    },
    {
      title: "Pakistan",
      url: "/images/about/flags/Pak.webp",
    },
  ];
  return (
    <div className={`${style.resource_bg} py-3`}>
      <div className={`${style.resource_container}`}>
        <div
          className={`d-flex justify-content-center ${
            router.locale === "ar" ? "flex-row-reverse" : "flex-row"
          } w-100 py-3`}
        >
          <p
            onClick={() => {
              setActiveData(true);
            }}
            style={{ cursor: "pointer" }}
            className={`${style.resource_subtitle} ${
              activeData === true ? style.resource_selected_title : ``
            } px-5 mb-2`}
          >
            {t("Al Aqsa Funds Resources")}
          </p>
          <p
            onClick={() => {
              setActiveData(false);
            }}
            style={{ cursor: "pointer" }}
            className={`${style.resource_subtitle} ${
              activeData === false ? style.resource_selected_title : ``
            } px-5 mb-2`}
          >
            {t("Arab Funds Resources")}
          </p>
          <p
            onClick={() => {}}
            style={{ cursor: "pointer" }}
            className={`${style.resource_subtitle} px-5 mb-2`}
          >
            {t("Yearly Approvals")}
          </p>
        </div>
        <div
          className={`${style.chart_container} shadow bg-white overflow-hidden p-4`}
        >
          <div
            className={`d-flex ${
              router.locale === "ar"
                ? `justify-content-start flex-row-reverse`
                : `justify-content-end flex-row`
            } `}
          >
            <p className={`${style.resource_chart_indicator}`}>
              {t("Total Amount")} : <span>$ 876,041,230</span>
            </p>
          </div>
          {/* <div id="fund_chart"></div> */}
          <div className={`${style.horz_scroll}`}>
            <div className={`${style.bar_chart}`}>
              <ApexCharts
                options={activeData === true ? options : optionsAr}
                series={activeData === true ? series : seriesAr}
                type="bar"
                width={"200%"}
                height={"550px"}
              />
            </div>
            <div className="d-flex justify-content-start align-items-center px-5">
              {xAxisWidth ? (
                <div
                  className={`d-flex justify-content-around align-items-start ms-3`}
                  style={{ width: xAxisWidth }}
                >
                  {activeData === true
                    ? titleC.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{ width: xAxisWidth / titleC.length }}
                        >
                          <div className={`${style.xAxis_label}`}>
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={data.url}
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
                      ))
                    : titleAr.map((data, index) => (
                        <div
                          key={index}
                          className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100`}
                          style={{ width: xAxisWidth / titleAr.length }}
                        >
                          <div
                            className={`d-flex flex-column ${style.xAxis_label}`}
                          >
                            <div
                              className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                            >
                              <Image
                                src={data.url}
                                alt={`Logo`}
                                height="50px"
                                width="50px"
                              />
                            </div>

                            <div
                              className={`text-center fw-bold text-wrap ${style.resource_chart_labels}`}
                            >
                              {data.title}
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              ) : (
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
      </div>
    </div>
  );
}
