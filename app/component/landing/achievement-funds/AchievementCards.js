import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import { useInView } from "react-hook-inview";
import CountUp from "../../../common-component/app-animation/count-up";
import style from "./index.module.sass";

export default function AchievementCards({ data }) {
  const router = useRouter();
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <div
        ref={ref}
        className={`${style.achievement_card_container} shadow px-4 py-5`}
      >
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
              {isVisible ? (
                <CountUp
                  value={data.count.toString()}
                  floatLength={0}
                  formatMoney={false}
                />
              ) : (
                data.count
              )}
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
                {isVisible ? (
                  <CountUp
                    value={data.count.toString()}
                    floatLength={0}
                    formatMoney={false}
                  />
                ) : (
                  data.count
                )}
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
          className={`${
            router.locale === "en"
              ? style.achievement_card_title
              : style.achievement_card_title_ar
          } text-center m-0 text-capitalize`}
        >
          {data.title}
        </p>
      </div>
    </Col>
  );
}
