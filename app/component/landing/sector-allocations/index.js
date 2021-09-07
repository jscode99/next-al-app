import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import Chart from "react-google-charts";
import { useTranslation } from "next-i18next";
import { useInView } from "react-hook-inview";
import CountUp from "../../../common-component/app-animation/count-up";

//styles
import style from "./index.module.sass";
import Map from "./Map";

export default function SectorAllocations({
  projectTitle,
  projectData,
  sectorData,
}) {
  const [sectorDataCal, setSectorData] = useState([]);
  const [finalChartData, setFinalChartData] = useState([]);

  const { t } = useTranslation("common");
  const router = useRouter();
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  // console.log("========>", finalChartData);

  useEffect(() => {
    let chartData = {};
    for (let index = 0; index < sectorData.length; index++) {
      chartData[projectData[0].projectTitle.toLowerCase()] = {
        ...chartData[projectData[0].projectTitle.toLowerCase()],
        totalApprovedAmount: 0,
        totalDisbursementAmount: 0,
        totalProjects: 0,
        totalGaza: 0,
        totalGazaAmount: 0,
        totalAlQuads: 0,
        totalAlQuadsAmount: 0,
        totalWestBanks: 0,
        totalWestBanksAmount: 0,
        logo: projectTitle[index].logo[0].url,
      };

      chartData[projectData[0].projectTitle.toLowerCase()][
        `total${sectorData[index].title.split(" ")[0].split(",")[0]}`
      ] = 0;
      chartData[projectData[0].projectTitle.toLowerCase()][
        `totalAmount${sectorData[index].title.split(" ")[0].split(",")[0]}`
      ] = 0;

      // console.log("SectorCheck", chartData);

      for (let innerIndex = 0; innerIndex < projectData.length; innerIndex++) {
        // debugger;
        chartData[projectData[0].projectTitle.toLowerCase()] = {
          ...chartData[projectData[0].projectTitle.toLowerCase()],
          totalApprovedAmount: Number.isNaN(
            parseFloat(projectData[innerIndex].approvedAmount),
          )
            ? chartData[projectData[0].projectTitle.toLowerCase()]
                .totalApprovedAmount + 0
            : chartData[projectData[0].projectTitle.toLowerCase()]
                .totalApprovedAmount +
              parseFloat(projectData[innerIndex].approvedAmount),
          totalDisbursementAmount: Number.isNaN(
            parseFloat(projectData[innerIndex].disbursementAmount),
          )
            ? chartData[projectData[0].projectTitle.toLowerCase()]
                .totalDisbursementAmount + 0
            : chartData[projectData[0].projectTitle.toLowerCase()]
                .totalDisbursementAmount +
              parseFloat(projectData[innerIndex].disbursementAmount),

          totalGaza:
            projectData[innerIndex].gazaStrip &&
            parseInt(projectData[innerIndex].gazaStrip)
              ? Number.isNaN(parseFloat(projectData[innerIndex].gazaStrip))
                ? chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalGaza + 0
                : chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalGaza + 1
              : chartData[projectData[0].projectTitle.toLowerCase()].totalGaza +
                0,

          totalGazaAmount:
            projectData[innerIndex].gazaStrip &&
            parseInt(projectData[innerIndex].gazaStrip)
              ? Number.isNaN(parseFloat(projectData[innerIndex].gazaStrip))
                ? chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalGazaAmount + 0
                : chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalGazaAmount +
                  parseFloat(projectData[innerIndex].gazaStrip)
              : chartData[projectData[0].projectTitle.toLowerCase()]
                  .totalGazaAmount + 0,

          totalAlQuads:
            projectData[innerIndex].Alquds &&
            parseInt(projectData[innerIndex].Alquds)
              ? Number.isNaN(parseFloat(projectData[innerIndex].Alquds))
                ? chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalAlQuads + 0
                : chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalAlQuads + 1
              : chartData[projectData[0].projectTitle.toLowerCase()]
                  .totalAlQuads + 0,

          totalAlQuadsAmount:
            projectData[innerIndex].Alquds &&
            parseInt(projectData[innerIndex].Alquds)
              ? Number.isNaN(parseFloat(projectData[innerIndex].Alquds))
                ? chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalAlQuadsAmount + 0
                : chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalAlQuadsAmount +
                  parseFloat(projectData[innerIndex].Alquds)
              : chartData[projectData[0].projectTitle.toLowerCase()]
                  .totalAlQuadsAmount + 0,

          totalWestBanks:
            projectData[innerIndex].westBank &&
            parseInt(projectData[innerIndex].westBank)
              ? Number.isNaN(parseFloat(projectData[innerIndex].westBank))
                ? chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalWestBanks + 0
                : chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalWestBanks + 1
              : chartData[projectData[0].projectTitle.toLowerCase()]
                  .totalWestBanks + 0,

          totalWestBanksAmount:
            projectData[innerIndex].westBank &&
            parseInt(projectData[innerIndex].westBank)
              ? Number.isNaN(parseFloat(projectData[innerIndex].westBank))
                ? chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalWestBanksAmount + 0
                : chartData[projectData[0].projectTitle.toLowerCase()]
                    .totalWestBanksAmount +
                  parseFloat(projectData[innerIndex].westBank)
              : chartData[projectData[0].projectTitle.toLowerCase()]
                  .totalWestBanksAmount + 0,
        };
        // console.log("calc", chartData);
        if (
          sectorData[index].title.toLowerCase() ===
          projectData[innerIndex].Sector.toLowerCase()
        ) {
          //No: of projects
          chartData[projectData[0].projectTitle.toLowerCase()][
            `total${sectorData[index].title.split(" ")[0].split(",")[0]}`
          ] =
            chartData[projectData[0].projectTitle.toLowerCase()][
              `total${sectorData[index].title.split(" ")[0].split(",")[0]}`
            ] + 1;

          // Allocation amount
          chartData[projectData[0].projectTitle.toLowerCase()][
            `totalAmount${sectorData[index].title.split(" ")[0].split(",")[0]}`
          ] = Number.isNaN(parseFloat(projectData[innerIndex].approvedAmount))
            ? chartData[projectData[0].projectTitle.toLowerCase()][
                `totalAmount${
                  sectorData[index].title.split(" ")[0].split(",")[0]
                }`
              ] + 0
            : chartData[projectData[0].projectTitle.toLowerCase()][
                `totalAmount${
                  sectorData[index].title.split(" ")[0].split(",")[0]
                }`
              ] + parseFloat(projectData[innerIndex].approvedAmount);
        }
      }

      chartData[projectData[0].projectTitle.toLowerCase()] = {
        ...chartData[projectData[0].projectTitle.toLowerCase()],
        totalProjects:
          chartData[projectData[0].projectTitle.toLowerCase()].totalWestBanks +
          chartData[projectData[0].projectTitle.toLowerCase()].totalAlQuads +
          chartData[projectData[0].projectTitle.toLowerCase()].totalGaza,
      };
    }
    setSectorData(chartData);
    let chartDataPriority = [];
    for (let index in chartData) {
      chartDataPriority.push({
        totalApprovedAmount: chartData[index].totalApprovedAmount,
        totalDisbursementAmount: chartData[index].totalDisbursementAmount,
        totalProjects: chartData[index].totalProjects,
        totalGaza: chartData[index].totalGaza,
        totalGazaAmount: chartData[index].totalGazaAmount,
        totalAlQuads: chartData[index].totalAlQuads,
        totalAlQuadsAmount: chartData[index].totalAlQuadsAmount,
        totalWestBanks: chartData[index].totalAlQuads,
        totalWestBanksAmount: chartData[index].totalWestBanksAmount,
      });
    }
    //Array sorting
    chartDataPriority.sort(function (x, y) {
      return y.totalApprovedAmount - x.totalApprovedAmount;
    });
    //Priority assigning
    for (let i in chartDataPriority) {
      chartDataPriority[i].priority = +i + 1;
    }
    //Setting chart data state
    setFinalChartData(chartDataPriority);
  }, [projectData]);

  return (
    <div ref={ref} className={`${style.sector_container}`}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={20} xl={16}>
          <div className="d-flex justify-content-end">
            <div className={`${style.sector_chart_container} h-100 py-4`}>
              <p
                className={`${style.sector_title} ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } text-white mb-2 text-capitalize`}
              >
                {t("sector allocations")}
              </p>
              <p
                className={`${style.sector_subtitle} ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } m-0 text-capitalize`}
              >
                {t("al-aqsa approval distribution")}
              </p>
              <Row gutter={[4, 4]}>
                {sectorData.map(data => (
                  <Col xs={24} sm={24} md={24} lg={8} xl={8} key={data.id}>
                    <div
                      className={`position-relative d-flex justify-content-center align-items-center`}
                      key={data.id}
                    >
                      <div
                        className={`${style.chart_percent} position-absolute d-flex justify-content-center align-items-center w-100 h-100`}
                        style={{ color: data.color }}
                      >
                        {isVisible ? (
                          <CountUp
                            value={Math.round(
                              parseFloat(data.percentage),
                            ).toString()}
                            floatLength={0}
                            formatMoney={false}
                          />
                        ) : (
                          Math.round(parseFloat(data.percentage))
                        )}
                        %
                      </div>
                      <Chart
                        width={"180px"}
                        height={"180px"}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["", "Approved"],
                          [data.title, Math.round(parseInt(data.percentage))],
                          [
                            "Others",
                            100 - Math.round(parseInt(data.percentage)),
                          ],
                        ]}
                        options={{
                          // title: "My Daily Activities",
                          legend: { position: "none" },
                          slices: [{ color: data.color }, { color: `#666d77` }],
                          tooltip: { trigger: "none" },
                          backgroundColor: { fill: "transparent" },
                          pieSliceText: "none",
                          pieSliceBorderColor: "none",
                          // Just add this option
                          pieHole: 0.7,
                        }}
                        rootProps={{ "data-testid": "3" }}
                      />
                    </div>
                    <div
                      className={`${style.sector_chart_title} d-flex justify-content-center text-capitalize text-center flex-row px-3`}
                    >
                      {t(data.title)}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          <div className="d-flex justify-content-center">
            <div className={`${style.sector_chart_container} h-100 py-4`}>
              <p
                className={`${style.sector_title} ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } text-white mb-2`}
              >
                {t("Sector Allocations")}
              </p>
              <p
                className={`${style.sector_subtitle} ${
                  router.locale === "ar" ? "text-end" : "text-start"
                } m-0`}
              >
                {t("Al-Aqsa Approval Distribution")}
              </p>
              <Row gutter={[4, 4]}>
                {sectorData.map(data => (
                  <Col xs={12} sm={12} md={8} lg={8} xl={8} key={data.id}>
                    <div
                      className={`position-relative d-flex justify-content-center align-items-center`}
                      key={data.id}
                    >
                      <div
                        className={`${style.chart_percent} position-absolute d-flex justify-content-center align-items-center w-100 h-100`}
                        style={{ color: data.color }}
                      >
                        {isVisible ? (
                          <CountUp
                            value={Math.round(
                              parseFloat(data.percentage),
                            ).toString()}
                            floatLength={0}
                            formatMoney={false}
                          />
                        ) : (
                          Math.round(parseFloat(data.percentage))
                        )}
                        %
                      </div>
                      <Chart
                        width={"180px"}
                        height={"180px"}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["", "Approved"],
                          [data.title, Math.round(parseInt(data.percentage))],
                          [
                            "Others",
                            100 - Math.round(parseInt(data.percentage)),
                          ],
                        ]}
                        options={{
                          // title: "My Daily Activities",
                          legend: { position: "none" },
                          slices: [{ color: data.color }, { color: `#666d77` }],
                          tooltip: { trigger: "none" },
                          backgroundColor: { fill: "transparent" },
                          pieSliceText: "none",
                          pieSliceBorderColor: "none",
                          // Just add this option
                          pieHole: 0.7,
                        }}
                        rootProps={{ "data-testid": "3" }}
                      />
                    </div>
                    <div
                      className={`${style.sector_chart_title} d-flex justify-content-center text-capitalize text-center flex-row px-3`}
                    >
                      {t(data.title)}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={4} xl={8}>
          <div className={`${style.map_container} d-flex justify-content-end`}>
            {finalChartData && finalChartData.length > 0 && (
              <Map finalChartData={finalChartData} />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
