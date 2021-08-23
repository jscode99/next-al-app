import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
// // import ApexCharts from "apexcharts";
// import dynamic from "next/dynamic";
// const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import Children from "rc-tween-one/lib/plugin/ChildrenPlugin";

import Texty from "rc-texty";
import "rc-texty/assets/index.css";

TweenOne.plugins.push(Children);

export default function Demo() {
  //////chart
  /* const series = [
    {
      name: "Approved",
      data: [132288, 231847, 246638, 52000, 13850, 3187, 9500, 898989],
    },

    {
      name: "Disburesed",
      data: [122565, 160400, 180618, 37661, 11189, 2775, 9116, 816937],
    },
  ];
  const options = {
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
        rotate: -45,
        formatter: function (value, timestamp, opts) {
          return value;
        },
      },
      categories: [
        "Arab Fund for Economic and Social Development",
        "Arab Monetary Fund",
        "Arab Bank for Economic Development in Africa",
        "Saudi Fund for Development",
        "Arab Authority for Agricultural Investment and Development",
        "The Arab Investment Guarantee Corporation",
        "The OPEC Fund for International Development",
        "Al Aqsa Fund",
      ],
      //   tickPlacement: "on",
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#a8a8a8"],
          fontSize: "8px",
          fontWeight: 400,
        },
        formatter: (value) => {
          return value / 100 + "K";
        },
      },
    },
    tooltip: {
      enabled: true,
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
  }; */
  //////chart

  const getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: "-100%",
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: "-30%", duration: 150 };
    }
    return t;
  };

  const geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  };

  const getSplit = (e) => {
    const t = e.split(" ");
    const c = [];
    t.forEach((str, i) => {
      c.push(<span key={`${str}-${i}`}>{str}</span>);
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  };

  return (
    // <ApexCharts
    //   options={options}
    //   series={series}
    //   type="bar"
    //   width={"100%"}
    //   height={"500px"}
    // />
    <div style={{ paddingTop: "100vh", paddingBottom: "100vh" }}>
      <div
        style={{
          overflow: "hidden",
          height: 300,
          position: 'relative',
          backgroundColor: "red",
          fontSize: 56,
          display: "flex",
          color: "black",
        }}
      >
        <OverPack>
          <TweenOne
            animation={{
              Children: {
                value: 1.734,
                floatLength: 3,
                formatMoney: 1000,
              },
              duration: 1000,
            }}
            // style={{ fontSize: 56, }}
          >
            0
          </TweenOne>
          {/* <Texty
            type="mask-top"
            delay={400}
            enter={getEnter}
            interval={geInterval}
            componentProps={{
              animation: [
                { x: 130, type: "set" },
                { x: 100, delay: 500, duration: 450 },
                {
                  ease: "easeOutQuart",
                  duration: 300,
                  x: 0,
                },
                {
                  letterSpacing: 0,
                  delay: -300,
                  scale: 0.9,
                  ease: "easeInOutQuint",
                  duration: 1000,
                },
                {
                  scale: 1,
                  width: "100%",
                  delay: -300,
                  duration: 1000,
                  ease: "easeInOutQuint",
                },
              ],
            }}
          >
            text
          </Texty>
          <Texty
            className="content"
            type="bottom"
            split={getSplit}
            delay={2200}
            interval={30}
          >
            Animation specification and components of Ant Design.
          </Texty> */}
          <div className="combined">
            <div className="combined-shape">
              <div className="shape-left">
                <TweenOne
                  animation={[
                    {
                      x: 158,
                      type: "from",
                      ease: "easeInOutQuint",
                      duration: 600,
                    },
                    {
                      x: -158,
                      ease: "easeInOutQuart",
                      duration: 450,
                      delay: -150,
                    },
                  ]}
                />
              </div>
              <div className="shape-right">
                <TweenOne
                  animation={[
                    {
                      x: -158,
                      type: "from",
                      ease: "easeInOutQuint",
                      duration: 600,
                    },
                    {
                      x: 158,
                      ease: "easeInOutQuart",
                      duration: 450,
                      delay: -150,
                    },
                  ]}
                />
              </div>
            </div>
            <Texty
              className="title"
              type="mask-top"
              delay={400}
              enter={getEnter}
              interval={geInterval}
              component={TweenOne}
              componentProps={{
                animation: [
                  { x: 130, type: "set" },
                  { x: 100, delay: 500, duration: 450 },
                  {
                    ease: "easeOutQuart",
                    duration: 300,
                    x: 0,
                  },
                  {
                    letterSpacing: 0,
                    delay: -300,
                    scale: 0.9,
                    ease: "easeInOutQuint",
                    duration: 1000,
                  },
                  {
                    scale: 1,
                    width: "100%",
                    delay: -300,
                    duration: 1000,
                    ease: "easeInOutQuint",
                  },
                ],
              }}
            >
              Ant Motion
            </Texty>
            {/* <TweenOne
              className="combined-bar"
              animation={{
                delay: 2000,
                width: 0,
                x: 158,
                type: "from",
                ease: "easeInOutExpo",
              }}
            /> */}
            <Texty
              className="content"
              type="bottom"
              split={getSplit}
              delay={2200}
              interval={30}
            >
              Animation specification and components of Ant Design.
            </Texty>
          </div>
        </OverPack>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});
