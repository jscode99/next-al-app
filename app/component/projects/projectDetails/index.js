import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

//Components
import ProjectDetailsIntroCard from "./projectDetailsIntroCard";
import ProjectDetailsApproval from "./projectDetailsApproval";
import ProjectDetailsTable from "./projectDetailsTable";
//styles
import style from "./index.module.sass";

export default function ProjectDetails({
  projectTitle,
  projectData,
  sector,
  reserve,
}) {
  // console.log("reserve", reserve);
  // console.log("projectData  INNER COMPONENT", projectData);
  // console.log("projectTitle  INNER COMPONENT", projectTitle);

  const [finalChartData, setFinalChartData] = useState([]);
  const [totalApprovedAmount, setTotalApprovedAmount] = useState(0);
  const [sectorData, setSectorData] = useState([]);
  let router = useRouter();
  const { t } = useTranslation("common");

  const cardData = [
    {
      amount: totalApprovedAmount && totalApprovedAmount,
      subTitle: t("total approvals"),
      bg: style.bg_theme_sky_blue_color,
      url: "/images/card/pen.webp",
    },
    {
      amount: finalChartData.reduce(function (accumulator, item) {
        return accumulator + item.totalDisbursementAmount;
      }, 0),
      subTitle: t("total disbursed"),
      bg: style.bg_theme_golden_color,
      url: "/images/card/hand.webp",
    },
    {
      amount: finalChartData.reduce(function (accumulator, item) {
        return accumulator + item.totalProjects;
      }, 0),
      subTitle: t("total projects"),
      bg: style.bg_primary_color,
      url: "/images/card/projects.webp",
    },
  ];

  useEffect(() => {
    let totalAmount = 0;
    if (
      finalChartData &&
      finalChartData.length > 0 &&
      reserve &&
      reserve.length > 0
    ) {
      // console.log("Data--->outside", finalChartData);
      reserve.map((data) => {
        if (data.ProjectTitle.toLowerCase() === finalChartData[0].title) {
          // console.log("Data--->Inside", data);
          totalAmount =
            parseInt(data.Amount) +
            finalChartData.reduce(function (accumulator, item) {
              return accumulator + item.totalApprovedAmount;
            }, 0);
        }
      });
    }
    setTotalApprovedAmount(totalAmount);
    // console.log("TotalAmount---->", totalAmount);
  }, [finalChartData, reserve]);

  useEffect(() => {
    let chartData = {};
    // debugger;
    for (let index = 0; index < sector.length; index++) {
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
        `total${sector[index].enTitle.split(" ")[0].split(",")[0]}`
      ] = 0;
      chartData[projectData[0].projectTitle.toLowerCase()][
        `totalAmount${sector[index].enTitle.split(" ")[0].split(",")[0]}`
      ] = 0;

      // console.log("SectorCheck", chartData);

      for (let innerIndex = 0; innerIndex < projectData.length; innerIndex++) {
        // debugger;
        chartData[projectData[0].projectTitle.toLowerCase()] = {
          ...chartData[projectData[0].projectTitle.toLowerCase()],
          totalApprovedAmount: Number.isNaN(
            parseFloat(projectData[innerIndex].approvedAmount)
          )
            ? chartData[projectData[0].projectTitle.toLowerCase()]
                .totalApprovedAmount + 0
            : chartData[projectData[0].projectTitle.toLowerCase()]
                .totalApprovedAmount +
              parseFloat(projectData[innerIndex].approvedAmount),
          totalDisbursementAmount: Number.isNaN(
            parseFloat(projectData[innerIndex].disbursementAmount)
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

        // console.log(
        //   "TESTINGGG",
        //   sector[index].title
        //     .toLowerCase()
        //     .match(projectData[innerIndex].Sector.toLowerCase()),
        //   ===
        //     projectData[innerIndex].Sector.toLowerCase().match(
        //       sector[index].title.toLowerCase(),
        //     ),
        // );

        // console.log(
        //   "TESTINGGGG =======>",
        //   sector[index].title.toLowerCase().split(" ")[0].split(",")[0] ===
        //     projectData[innerIndex].Sector.toLowerCase()
        //       .split(" ")[0]
        //       .split(",")[0],
        // );

        if (
          sector[index].title
            .toLowerCase()
            .match(
              projectData[innerIndex].Sector &&
                projectData[innerIndex].Sector.toLowerCase()
            ) !== null
        ) {
          //No: of projects
          chartData[projectData[0].projectTitle.toLowerCase()][
            `total${sector[index].enTitle.split(" ")[0].split(",")[0]}`
          ] =
            chartData[projectData[0].projectTitle.toLowerCase()][
              `total${sector[index].enTitle.split(" ")[0].split(",")[0]}`
            ] + 1;

          // Allocation amount
          chartData[projectData[0].projectTitle.toLowerCase()][
            `totalAmount${sector[index].enTitle.split(" ")[0].split(",")[0]}`
          ] = Number.isNaN(parseFloat(projectData[innerIndex].approvedAmount))
            ? chartData[projectData[0].projectTitle.toLowerCase()][
                `totalAmount${
                  sector[index].enTitle.split(" ")[0].split(",")[0]
                }`
              ] + 0
            : chartData[projectData[0].projectTitle.toLowerCase()][
                `totalAmount${
                  sector[index].enTitle.split(" ")[0].split(",")[0]
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
    // console.log("chartData1==================>", chartData);

    let chartDataPriority = [];
    for (let index in chartData) {
      chartDataPriority.push({
        title: index,
        totalApprovedAmount: chartData[index].totalApprovedAmount,
        totalDisbursementAmount: chartData[index].totalDisbursementAmount,
        totalProjects: chartData[index].totalProjects,
        totalGaza: chartData[index].totalGaza,
        totalAlQuads: chartData[index].totalAlQuads,
        totalWestBanks: chartData[index].totalAlQuads,
        logo: chartData[index].logo,
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
    // console.log("Final Chart Dat->", chartDataPriority);
    setFinalChartData(chartDataPriority);
    // console.log("finalChartData", finalChartData);
  }, [projectData, projectTitle, sector]);
  // console.log("Sector Data", sectorData);

  return (
    <>
      {router.locale === "en" ? (
        <ProjectDetailsIntroCard cardData={cardData} />
      ) : (
        <ProjectDetailsIntroCard cardData={cardData.reverse()} />
      )}

      <ProjectDetailsApproval projectData={sectorData} sector={sector} />

      <ProjectDetailsTable projectData={projectData} />
    </>
  );
}
