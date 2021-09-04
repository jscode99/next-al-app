import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Row, Col } from "antd";
import BannerCard from "./BannerCard";
import TweenOne from "rc-tween-one";
import style from "./index.module.sass";

export default function BannerCardSection({ data, projectData, projectTitle }) {
  const { t } = useTranslation("common");
  const [finalChartData, setFinalChartData] = useState(null);
  const [bannerData, setBannerData] = useState([]);
  const router = useRouter();
  const getProperty = priority => {
    switch (priority) {
      case "1":
        return [
          style.bg_secondary_color,
          style.ft_secondary_color,
          "/images/banner-logos/Icon-Resources.webp",
          true,
        ];

      case "2":
        return [
          style.bg_theme_sky_blue_color,
          style.ft_theme_sky_blue_color,
          "/images/banner-logos/Icon-Approvals.webp",
          false,
        ];
      case "3":
        return [
          style.bg_primary_color,
          style.ft_primary_color,
          "/images/banner-logos/Icon-Projects.webp",
          false,
        ];
    }
  };
  useEffect(() => {
    let resources = data.sort((x, y) => x.priority - y.priority);
    let cardDt = resources.map(data => {
      return {
        title: data.amount,
        floatLength: 3,
        subTitle: t(data.title.toLowerCase()),
        bgColor: getProperty(data.priority)[0],
        ftColor: getProperty(data.priority)[1],
        logo: getProperty(data.priority)[2],
        navigation: getProperty(data.priority)[3],
      };
    });
    if (finalChartData && finalChartData.length > 0)
      cardDt.push({
        title: finalChartData.reduce(
          (accumulator, item) => accumulator + item.totalProjects,
          0,
        ),
        floatLength: 0,
        subTitle: t("total projects"),
        bgColor: getProperty("3")[0],
        ftColor: getProperty("3")[1],
        logo: getProperty("3")[2],
        navigation: getProperty("3")[3],
      });
    setBannerData(cardDt);
  }, [data, finalChartData]);

  console.log("Banner Card", bannerData);

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
    <div className={`${style.container} w-100 h-50`}>
      <div className={`${style.banner_card_section}`}>
        <Row className={`h-100`}>
          <Col xs={0} sm={0} md={0} lg={9} xl={10}></Col>
          <Col xs={0} sm={0} md={24} lg={15} xl={14}>
            <div className={`d-flex justify-content-center align-items-center`}>
              <div className={`${style.inner_container} h-100 py-5 `}>
                <TweenOne
                  className={`${style.banner_card_section_title} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } text-white mb-2 text-capitalize`}
                  animation={{ y: -30, opacity: 0, type: "from", delay: 50 }}
                >
                  {t("al aqsa fund")}
                </TweenOne>
                <TweenOne
                  className={`${style.banner_card_section_subtitle} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } mb-5 text-capitalize`}
                  animation={{ y: 30, opacity: 0, type: "from", delay: 150 }}
                >
                  {t("managed by the islamic development bank")}
                </TweenOne>
                <div
                  className={`d-flex flex-wrap justify-content-between align-items-center`}
                >
                  {bannerData && bannerData.length > 0 && router.locale === "en"
                    ? bannerData.map(data => <BannerCard data={data} />)
                    : new Array(...bannerData)
                        .reverse()
                        .map(data => <BannerCard data={data} />)}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div className={`d-flex justify-content-center align-items-center`}>
              <div className={`${style.inner_container} h-100 py-5`}>
                <TweenOne
                  className={`${style.banner_card_section_title} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } text-white mb-2 text-capitalize`}
                  animation={{ y: 30, opacity: 0, type: "from", delay: 50 }}
                >
                  {t("al aqsa fund")}
                </TweenOne>
                <TweenOne
                  className={`${style.banner_card_section_subtitle} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } mb-5 text-capitalize`}
                  animation={{ y: 30, opacity: 0, type: "from", delay: 150 }}
                >
                  {t("managed by the islamic development bank")}
                </TweenOne>
                <div
                  className={`d-flex flex-wrap justify-content-center align-items-center`}
                >
                  {bannerData && bannerData.length > 0 && router.locale === "en"
                    ? bannerData.map(data => <BannerCard data={data} />)
                    : new Array(...bannerData)
                        .reverse()
                        .map(data => <BannerCard data={data} />)}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
