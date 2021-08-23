import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
//Common components
import InnerLayout from "../../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../../common-component/page-common-section/PageCommonSection";
//Components
import ProjectDetailsIntroCard from "./projectDetailsIntroCard";
import ProjectDetailsApproval from "./projectDetailsApproval";
import ProjectDetailsTable from "./projectDetailsTable";
//styles
import style from "./index.module.sass";

export default function ProjectDetails({ projectTitle, projectData, sector }) {
  console.log("sector", sector);
  console.log("projectData", projectData);
  const [finalChartData, setFinalChartData] = useState([]);
  const { t } = useTranslation("common");

  const cardData = [
    {
      amount: finalChartData.reduce(function (accumulator, item) {
        return accumulator + item.totalApprovedAmount;
      }, 0),
      subTitle: t("Total Approvals"),
      bg: style.bg_theme_sky_blue_color,
      url: "/images/card/pen.webp",
    },
    {
      amount: finalChartData.reduce(function (accumulator, item) {
        return accumulator + item.totalApprovedAmount;
      }, 0),
      subTitle: t("Total Disbursed"),
      bg: style.bg_theme_golden_color,
      url: "/images/card/hand.webp",
    },
    {
      amount: finalChartData.reduce(function (accumulator, item) {
        return accumulator + item.totalProjects;
      }, 0),
      subTitle: t("Total Projects"),
      bg: style.bg_primary_color,
      url: "/images/card/book.webp",
    },
  ];

  useEffect(() => {
    let chartData = {};
    for (let index = 0; index < sector.length; index++) {
      chartData[projectData[0].projectTitle.toLowerCase()] = {
        ...chartData[projectData[0].projectTitle.toLowerCase()],
        totalApprovedAmount: 0,
        totalDisbursementAmount: 0,
        totalProjects: 0,
        totalGaza: 0,
        totalAlQuads: 0,
        totalWestBanks: 0,
        logo: projectTitle[index].logo[0].url,
      };

      chartData[projectData[0].projectTitle.toLowerCase()][
        `total${sector[index].title.split(" ")[0]}`
      ] = 0;

      console.log("SectorCheck", chartData);

      // chartData[projectData[0].projectTitle.toLowerCase()] = {
      //   ...chartData[projectData[0].projectTitle.toLowerCase()],

      // }

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
        };
        if (
          sector[index].title.toLowerCase() ===
          projectData[innerIndex].Sector.toLowerCase()
        ) {
          chartData[projectData[0].projectTitle.toLowerCase()][
            `total${sector[index].title.split(" ")[0]}`
          ] =
            chartData[projectData[0].projectTitle.toLowerCase()][
              `total${sector[index].title.split(" ")[0]}`
            ] + 1;
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
    console.log("chartData==================>", chartData);

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
    setFinalChartData(chartDataPriority);
    console.log("finalChartData", finalChartData);
  }, [projectData]);

  return (
    <>
      <div className={`${style.project_details_bg}`}>
        <InnerLayout>
          <PageCommonSection title={projectData[0].projectTitle} />
          <ProjectDetailsIntroCard cardData={cardData} />
          <ProjectDetailsApproval projectData={projectData} />
        </InnerLayout>
      </div>
      <div className={`${style.project_details_container} `}>
        <ProjectDetailsTable projectData={projectData} />
      </div>
    </>
  );
}
