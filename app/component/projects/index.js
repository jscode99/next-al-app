import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
//Common components
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";

//Components
import ProjectIntroCard from "./projectIntroCard";
import ProjectRouteCard from "./projectRouteCard";
import ProjectFundChart from "./projectFundChart";
//styles
import style from "./index.module.sass";

export default function Projects({ projectTitle, projectData }) {
  console.log("projectTitle", projectTitle);
  const [finalChartData, setFinalChartData] = useState([]);
  const { t } = useTranslation("common");

  let cardData = [
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
        return accumulator + item.totalProjects;
      }, 0),
      subTitle: t("Total Projects"),
      bg: style.bg_theme_golden_color,
      url: "/images/card/book.webp",
    },
  ];

  useEffect(() => {
    let chartData = {};
    for (let index = 0; index < projectTitle.length; index++) {
      chartData[projectTitle[index].title.toLowerCase()] = {
        totalApprovedAmount: 0,
        totalDisbursementAmount: 0,
        totalProjects: 0,
        totalGaza: 0,
        totalAlQuads: 0,
        totalWestBanks: 0,
        logo: projectTitle[index].logo[0].url,
      };
      for (let innerIndex = 0; innerIndex < projectData.length; innerIndex++) {
        // debugger;
        if (
          projectTitle[index].title.toLowerCase() ===
          projectData[innerIndex].projectTitle.toLowerCase()
        ) {
          chartData[projectTitle[index].title.toLowerCase()] = {
            ...chartData[projectTitle[index].title.toLowerCase()],
            totalApprovedAmount: Number.isNaN(
              parseFloat(projectData[innerIndex].approvedAmount),
            )
              ? chartData[projectTitle[index].title.toLowerCase()]
                  .totalApprovedAmount + 0
              : chartData[projectTitle[index].title.toLowerCase()]
                  .totalApprovedAmount +
                parseFloat(projectData[innerIndex].approvedAmount),
            totalDisbursementAmount: Number.isNaN(
              parseFloat(projectData[innerIndex].disbursementAmount),
            )
              ? chartData[projectTitle[index].title.toLowerCase()]
                  .totalDisbursementAmount + 0
              : chartData[projectTitle[index].title.toLowerCase()]
                  .totalDisbursementAmount +
                parseFloat(projectData[innerIndex].disbursementAmount),
            totalGaza:
              projectData[innerIndex].gazaStrip &&
              parseInt(projectData[innerIndex].gazaStrip)
                ? Number.isNaN(parseFloat(projectData[innerIndex].gazaStrip))
                  ? chartData[projectTitle[index].title.toLowerCase()]
                      .totalGaza + 0
                  : chartData[projectTitle[index].title.toLowerCase()]
                      .totalGaza + 1
                : chartData[projectTitle[index].title.toLowerCase()].totalGaza +
                  0,
            totalAlQuads:
              projectData[innerIndex].Alquds &&
              parseInt(projectData[innerIndex].Alquds)
                ? Number.isNaN(parseFloat(projectData[innerIndex].Alquds))
                  ? chartData[projectTitle[index].title.toLowerCase()]
                      .totalAlQuads + 0
                  : chartData[projectTitle[index].title.toLowerCase()]
                      .totalAlQuads + 1
                : chartData[projectTitle[index].title.toLowerCase()]
                    .totalAlQuads + 0,
            totalWestBanks:
              projectData[innerIndex].westBank &&
              parseInt(projectData[innerIndex].westBank)
                ? Number.isNaN(parseFloat(projectData[innerIndex].westBank))
                  ? chartData[projectTitle[index].title.toLowerCase()]
                      .totalWestBanks + 0
                  : chartData[projectTitle[index].title.toLowerCase()]
                      .totalWestBanks + 1
                : chartData[projectTitle[index].title.toLowerCase()]
                    .totalWestBanks + 0,
          };
          // console.log(chartData);
        }
      }

      chartData[projectTitle[index].title.toLowerCase()] = {
        ...chartData[projectTitle[index].title.toLowerCase()],
        totalProjects:
          chartData[projectTitle[index].title.toLowerCase()].totalWestBanks +
          chartData[projectTitle[index].title.toLowerCase()].totalAlQuads +
          chartData[projectTitle[index].title.toLowerCase()].totalGaza,
      };
    }
    // console.log("chartData==================>", chartData);

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
    // console.log("finalChartData", finalChartData);
  }, [projectData]);

  return (
    <>
      <InnerLayout>
        <PageCommonSection title={t("Projects")} />
        <div className={`${style.project_layout_container}`}>
          <ProjectIntroCard cardData={cardData} />
        </div>
      </InnerLayout>
      <div className={`${style.bg1}`}>
        <div className={`${style.project_container}`}>
          <ProjectRouteCard finalChartData={finalChartData} />
        </div>
      </div>
      <div className={`${style.bg2} pb-5`}>
        <div className={`${style.project_container}`}>
          <ProjectFundChart finalChartData={finalChartData} />
        </div>
      </div>
    </>
  );
}
