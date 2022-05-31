import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useInView } from "react-hook-inview";
//Antd
import { Row, Col } from "antd";
import CountUp from "../../../common-component/app-animation/count-up";
//Styles
import style from "./index.module.sass";
//Common Components
import IntroCard from "../../../common-component/intro-card/IntroCard";

export default function ContributionsCard({ cardData, grandTotal }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  return (
    <div className={`${style.container}`}>
      <div
        className={`d-flex text-capitalize justify-content-center ${
          router.locale === "ar" && `flex-row-reverse`
        }`}
      >
        <span className={`${style.contribution_total_title}`}>
          {t("overall contribution")}
        </span>
        <span className={`${style.contribution_total_title} px-1`}>:</span>
        <span
          ref={ref}
          className={`${style.contribution_total_amount} d-flex ps-1`}
        >
          $
          {isVisible ? (
            <CountUp value={grandTotal} floatLength={0} formatMoney={true} />
          ) : (
            new Intl.NumberFormat().format(grandTotal)
          )}
        </span>
      </div>
      <div
        className={`w-100 d-flex justify-content-center align-items-center px-5 py-5`}
      >
        <Row gutter={[16, 16]} className={`w-100`}>
          {router.locale === "en"
            ? cardData.map((data, index) => (
                <IntroCard key={index} data={data} />
              ))
            : new Array(...cardData)
                .reverse()
                .map((data, index) => <IntroCard key={index} data={data} />)}
        </Row>
      </div>
    </div>
  );
}
