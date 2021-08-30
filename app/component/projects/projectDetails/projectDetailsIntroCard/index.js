import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
//Antd
import { Row, Col } from "antd";
//Common Components
import IntroCard from "../../../../common-component/intro-card/IntroCard";
//Styles
import style from "./index.module.sass";

export default function ProjectDetailsIntroCard({ cardData }) {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className={`${style.container}`}>
      <div
        className={`w-100 d-flex justify-content-center align-items-center px-5 py-4`}
      >
        <Row gutter={[18, 18]} className={`w-100 justify-content-center`}>
          {router.locale === "en"?cardData.map(data => (
            <IntroCard data={data} />
          )):new Array(...cardData).map(data => (
            <IntroCard data={data} />
          ))}
        </Row>
      </div>
    </div>
  );
}
