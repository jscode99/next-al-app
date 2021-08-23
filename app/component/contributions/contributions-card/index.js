import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
//Antd
import { Row, Col } from "antd";
//Styles
import style from "./index.module.sass";
//Common Components
import IntroCard from "../../../common-component/intro-card/IntroCard";

export default function ContributionsCard({ cardData, grandTotal }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <div className={`d-flex justify-content-center `}>
        <span className={`${style.contribution_total_title}`}>
          {t("Overall Contribution")} :
        </span>

        <span className={`${style.contribution_total_amount} ps-1`}>
          {"$" + `${new Intl.NumberFormat().format(grandTotal)}`}
        </span>
      </div>
      <div
        className={`w-100 d-flex justify-content-center align-items-center px-5 py-5`}
      >
        <Row gutter={[16, 16]} className={`w-100`}>
          {cardData.map(data => (
            <IntroCard data={data} />
          ))}
        </Row>
      </div>
    </>
  );
}
