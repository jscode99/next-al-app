import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import style from "./index.module.sass";

export default function AchievementCards({ data }) {
  const router = useRouter();
  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <div className={`${style.achievement_card_container} px-4 py-5`}>
        {router.locale === "en" ? (
          <div
            className={`d-flex justify-content-center align-items-center mb-4`}
          >
            <div
              className={`${style.achievement_card_polygon} ${data.bgColor} d-flex justify-content-center align-items-center`}
            >
              <Image
                src={data.image}
                alt={`Achievement-Logos`}
                height="35"
                width="35"
              />
            </div>
            <div
              className={`${style.achievement_card_count} ${data.ftColor} ps-4`}
            >
              {data.count}
            </div>
          </div>
        ) : (
          <>
            <div
              className={`d-flex justify-content-center align-items-center mb-5`}
            >
              <div
                className={`${style.achievement_card_count} ${data.ftColor}  pe-4`}
              >
                {data.count}
              </div>
              <div
                className={`${style.achievement_card_polygon} ${data.bgColor} d-flex justify-content-center align-items-center`}
              >
                <Image
                  src={data.image}
                  alt={`Achievement-Logos`}
                  height="50"
                  width="50"
                />
              </div>
            </div>
          </>
        )}
        <p
          className={`${style.achievement_card_title} text-center m-0 text-capitalize`}
        >
          {data.title}
        </p>
      </div>
    </Col>
  );
}
