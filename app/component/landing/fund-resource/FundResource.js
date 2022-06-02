import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Row } from "antd";
import FundIndicator from "./FundIndicator";
import style from "./index.module.sass";

export default function FundResource({ data }) {
  const [fundData, setFundData] = useState([]);
  console.log("Fund Data----->", fundData);

  const router = useRouter();
  //Translation lib
  const { t } = useTranslation("common");

  const getProperty = (priority) => {
    switch (priority) {
      case "1":
        return [style.primary_bg, style.primary_font];
        break;
      case "2":
        return [style.secondary_bg, style.secondary_font];
        break;
    }
  };

  useEffect(() => {
    let fund = data.sort((x, y) => x.priority - y.priority);
    let fundData = fund.map((data) => {
      return {
        text: t(data.title.toLowerCase()),
        count: data.amount,
        bg: getProperty(data.priority)[0],
        font: getProperty(data.priority)[1],
      };
    });

    setFundData(fundData);
  }, [data]);

  return (
    <div className={`${style.fund_resource_bg}`}>
      <div className={`${style.fund_resource_container}`}>
        <div className="py-4">
          <h3
            className={`${style.fund_resource_title} text-capitalize text-center mb-4 `}
          >
            {t("al aqsa fund resources")}
          </h3>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Row>
              {router.locale === "en"
                ? fundData &&
                  fundData.length > 0 &&
                  fundData.map((data) => <FundIndicator data={data} />)
                : fundData &&
                  fundData.length > 0 &&
                  new Array(...fundData)
                    .reverse()
                    .map((data) => <FundIndicator data={data} />)}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
