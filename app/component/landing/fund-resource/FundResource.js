import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row } from "antd";
import FundIndicator from "./FundIndicator";
import style from "./index.module.sass";

export default function FundResource({}) {
  const router = useRouter();
  //Translation lib
  const { t } = useTranslation("common");
  let fundData = [
    {
      count: "$1.028B",
      text: t("aqsa fund"),
      bg: style.primary_bg,
      font: style.primary_font,
    },
    {
      count: "$705M",
      text: t("arab funds"),
      bg: style.secondary_bg,
      font: style.secondary_font,
    },
  ];
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
                ? fundData.map(data => <FundIndicator data={data} />)
                : fundData.reverse().map(data => <FundIndicator data={data} />)}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
