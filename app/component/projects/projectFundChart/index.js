import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
//component
import LegendSection from "./LegendSection";
//styles
import style from "./index.module.sass";

export default function ProjectFundChart({ finalChartData }) {
  const base_url = process.env.BASE_URL;
  // console.log("finalChartData", finalChartData);
  const [xAxisWidth, setXAxisWidth] = useState(0);
  const [chartSeriesData, setChartSeriesData] = useState([]);
  const [option, setOption] = useState([]);
  const [chartData, setChartData] = useState([]);
  let router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    let series = [
      {
        name: "Approved",
        data: [],
      },

      {
        name: "Disburesed",
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

    let chartData = [];

    console.log("options", options.xaxis.categories);
    if (finalChartData.length > 0) {
      for (let index = 0; index < Object.keys(finalChartData).length; index++) {
        series[0].data.push(
          Math.round(parseFloat(finalChartData[index].totalApprovedAmount)),
        );
        series[1].data.push(
          Math.round(parseFloat(finalChartData[index].totalDisbursementAmount)),
        );
        options.xaxis.categories.push(finalChartData[index].title);
        chartData.push({
          title: finalChartData[index].title,
          url: finalChartData[index].logo,
        });
      }
    }
    console.log("chartData", chartData);
    setChartSeriesData(series);
    setOption(options);
    setChartData(chartData);
  }, [finalChartData]);

  const legendData = [
    {
      color: `linear-gradient(to bottom, #ffb28e, #ed6961)`,
      text: t("approved"),
    },
    {
      color: `linear-gradient(to bottom, #a7e05f, #12ab97)`,
      text: t("disburesed"),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      let fundChartElement1 = document.getElementsByTagName("rect")[0];
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

  return (
    <>
      <h3 className={`text-center mb-4 pt-5 m-0 text-capitalize`}>
        {t("al aqsa arab funds – approved vs disbursements")}
      </h3>
      <div
        className={`${style.chart_container} shadow bg-white overflow-hidden`}
      >
        <LegendSection legendData={legendData} />
        {/* <div id="fund_chart"></div> */}
        <div className={`${style.bar_chart} overflow-hidden px-4`}>
          <ApexCharts
            options={option}
            series={chartSeriesData}
            type="bar"
            width={"100%"}
            height={"435px"}
          />
        </div>
        <div className="d-flex justify-content-end align-items-center px-5">
          {xAxisWidth ? (
            <div
              className={`${style.chart_xAxis} d-flex justify-content-around align-items-center`}
              style={{ width: xAxisWidth }}
            >
              {chartData.map((data, index) => (
                <div
                  key={index}
                  className={`${style.xAxis_container} d-flex justify-content-start align-items-center flex-column h-100 pt-2`}
                >
                  <div className={``}>
                    <div
                      className={`d-flex justify-content-center rounded-circle overflow-hidden`}
                      // style={{ width: "50px", height: "50px" }}
                    >
                      <Image
                        src={base_url + data.url}
                        alt={`Logo`}
                        height="45px"
                        width="45px"
                      />
                    </div>
                  </div>
                  <div className={`text-center fw-bold`}>{data.title}</div>
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
    </>
  );
}
