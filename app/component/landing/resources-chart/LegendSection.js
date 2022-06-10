import { useRouter } from "next/router";
//styles
import style from "./index.module.sass";

export default function LegendSection({ legendData }) {
  let router = useRouter();
  return (
    <div
      className={`d-flex ${
        router.locale === "en" ? "justify-content-end" : "justify-content-start"
      } align-items-center`}
    >
      <div
        className={`d-flex flex-wrap justify-content-center align-items-center py-2`}
      >
        {legendData.map((data, index) => (
          <div
            key={index}
            className={`${style.legend_container} d-flex justify-content-start
            }
               
            align-items-center mx-3 ${
              router.locale === "ar" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`${style.fund_chart_indicator} mx-3`}
              style={{ backgroundImage: data.color }}
            ></div>
            <div
              className={`${
                router.locale === "en"
                  ? style.indicator_text
                  : style.indicator_text_ar
              } text-capitalize`}
            >
              {data.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
