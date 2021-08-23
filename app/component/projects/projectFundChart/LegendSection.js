import { useRouter } from "next/router";
//styles
import style from "./index.module.sass";

export default function LegendSection({legendData}) {
  let router = useRouter();
  return (
    <div
      className={`d-flex ${
        router.locale === "en" ? "justify-content-end" : "justify-content-start"
      } align-items-center`}
    >
      <div className={`d-flex justify-content-center align-items-center p-3`}>
        {legendData.map((data) => (
          <div
            className={`d-flex justify-content-center align-items-center mx-3 ${
              router.locale === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`${style.fund_chart_indicator} mx-3`}
              style={{ backgroundImage: data.color }}
            ></div>
            <div className={`${style.indicator_text} text-capitalize`}>
              {data.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
