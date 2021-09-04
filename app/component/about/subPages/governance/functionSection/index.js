import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";

//Common-Components
import AppCollapsible from "../../../../../common-component/app-collapsible";

//Styles
import style from "./index.module.sass";

export default function FunctionSection({ data }) {
  console.log("data", data);
  let router = useRouter();
  const { t } = useTranslation("common");
  const [listData, setListData] = useState(null);

  const getProperty = priority => {
    switch (priority) {
      case "1":
        return [
          style.secondary_color,
          "#5ca849",
          "/images/about/Governance/Star.webp",
        ];
      case "2":
        return [
          style.theme_golden_color,
          "#dabd2c",
          "/images/about/Governance/People.webp",
        ];
      case "3":
        return [
          style.primary_color,
          "#0E3890",
          "/images/about/Governance/Bank.webp",
        ];
    }
  };

  useEffect(() => {
    let bulletGroupNameList = Object.keys(data).filter(data =>
      data.match("bulletGroup"),
    );
    let bulletGroupList = bulletGroupNameList.map((item, index) => {
      return {
        ...data[item],
      };
      item;
    });
    const list = bulletGroupList.map(data => {
      return {
        title: data.bulletTitle,
        iconBg: getProperty(data.priority)[0],
        color: getProperty(data.priority)[1],
        url: getProperty(data.priority)[2],
        des: data.bullet,
      };
    });
    setListData(list);
  }, [data]);

  // const listData = [
  //   {
  //     title: t("supreme council"),
  //     url: "/images/about/Governance/Star.webp",
  //     iconBg: style.secondary_color,
  //     color: "#5ca849",
  //     des: [
  //       { des: "Approves the policies of the Fund." },
  //       { des: "Approves Investment polices and growth" },
  //       { des: "Approves Annual reports on the Fund activities" },
  //       { des: "Selection and approval of annual auditors" },
  //       { des: "Approves financial statements and closing balances " },
  //     ],
  //   },
  //   {
  //     title: t("management committee"),
  //     url: "/images/about/Governance/People.webp",
  //     iconBg: style.theme_golden_color,
  //     color: "#dabd2c",
  //     des: [
  //       { des: "Approves the policies of the Fund." },
  //       { des: "Approves Investment polices and growth" },
  //       { des: "Approves Annual reports on the Fund activities" },
  //       { des: "Selection and approval of annual auditors" },
  //       { des: "Approves financial statements and closing balances " },
  //     ],
  //   },
  //   {
  //     title: t("islamic development bank"),
  //     url: "/images/about/Governance/Bank.webp",
  //     iconBg: style.primary_color,
  //     color: "#0E3890",
  //     des: [
  //       { des: "Approves the policies of the Fund." },
  //       { des: "Approves Investment polices and growth" },
  //       { des: "Approves Annual reports on the Fund activities" },
  //       { des: "Selection and approval of annual auditors" },
  //       { des: "Approves financial statements and closing balances " },
  //     ],
  //   },
  // ];
  return (
    <div className={`${style.function_bg}`}>
      <Row>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <div className={`${style.function_container}`}>
            <div className={`px-5 py-3`}>
              <h4
                className={`${style.function_title} text-capitalize mx-4 my-4 ${
                  router.locale === "en" ? `text-start` : `text-end`
                } fw-bold`}
              >
                {t("functions")}
              </h4>
              {listData &&
                listData.length > 0 &&
                listData.map(data => (
                  <div className={`ms-5`} key={Math.random()}>
                    <AppCollapsible data={data} color={`#64ac52`} />
                  </div>
                ))}
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <div className={`${style.function_container}`}>
            <div className={`p-3`}>
              <h4
                className={`${style.function_title} text-capitalize mx-4 my-4 ${
                  router.locale === "en" ? `text-start` : `text-end`
                } fw-bold`}
              >
                {t("functions")}
              </h4>
              {listData &&
                listData.length > 0 &&
                listData.map(data => (
                  <div className={`ms-3`} key={Math.random()}>
                    <AppCollapsible data={data} />
                  </div>
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
