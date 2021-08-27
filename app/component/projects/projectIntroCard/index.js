import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
//Common Components
import IntroCard from "../../../common-component/intro-card/IntroCard";
//Styles
import style from "./index.module.sass";

export default function ProjectIntroCard({ cardData }) {
  const { t } = useTranslation("common");

  return (
    <div className={`${style.container} mb-4`}>
      <h3 className={`${style.projectIntroCard_title} text-center m-0`}>
        {t("Al Aqsa & Arab Funds Total Approved Projects")}
      </h3>

      <div
        className={`w-100 d-flex justify-content-center align-items-center px-5 py-4`}
      >
        <Row gutter={[18, 18]} className={`w-100 justify-content-center`}>
          {cardData.map(data => (
            <IntroCard data={data} />
          ))}
        </Row>
      </div>
    </div>
  );
}
