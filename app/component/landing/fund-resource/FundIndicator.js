import { useRouter } from "next/router";
import { Col } from "antd";
import { useInView } from "react-hook-inview";
import CountUp from "../../../common-component/app-animation/count-up";
import { splitLetterNumberService } from "../../../services/commonService";
import style from "./index.module.sass";

export default function FundIndicator({ data }) {
  const router = useRouter();

  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
      <div className="mx-5 d-flex justify-content-center align-items-center flex-column">
        <div
          ref={ref}
          className={`${style.fund_indecator} ${data.bg} rounded-circle mb-3 d-flex justify-content-center align-items-center text-white`}
        >
          {splitLetterNumberService(data.count).map((value) => {
            if (Number.isNaN(parseFloat(value))) {
              return value;
            } else {
              let floatLength =
                value.split(".").length === 2 ? value.split(".")[1].length : 0;
              if (isVisible)
                return (
                  <CountUp
                    value={parseFloat(value)}
                    floatLength={floatLength}
                    scroll={false}
                  />
                );
              else return parseFloat(value);
            }
          })}
        </div>
        <p
          className={`${
            router.locale === "en" ? style.fund_title : style.fund_title_ar
          } text-center text-capitalize`}
        >
          {data.text}
        </p>
      </div>
    </Col>
  );
}
