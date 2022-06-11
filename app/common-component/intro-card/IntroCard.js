import Image from "next/image";
import { useRouter } from "next/router";
import { useInView } from "react-hook-inview";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
import CountUp from "../app-animation/count-up";
//Styles
import style from "./index.module.sass";

export default function IntroCard({ data }) {
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <Col xs={0} sm={0} md={8} lg={8} xl={8}>
        <div className={`d-flex justify-content-center`}>
          <div
            className={`${style.contribution_card_container} ${data.bg} overflow-hidden`}
          >
            <div
              className={`${style.contribution_card_amount} d-flex justify-content-end h-100 flex-column position-relative px-4`}
            >
              {data.url && (
                <div className={`d-flex w-100`}>
                  <div
                    className={`${style.contribution_card_logo} d-flex justify-content-center align-items-center rounded-circle bg-white `}
                  >
                    <Image
                      alt={`Logo`}
                      src={data.url}
                      height="30px"
                      width="30px"
                    />
                  </div>
                </div>
              )}
              <p
                ref={ref}
                className={`${style.contribution_amount_title} d-flex justify-content-end text-white m-0`}
              >
                {!data.subTitle.match("project") &&
                  !data.subTitle.match("المشاريع") &&
                  "$"}
                {isVisible ? (
                  <CountUp
                    value={data.amount}
                    floatLength={0}
                    formatMoney={data.subTitle.match("project") ? false : true}
                  />
                ) : !data.subTitle.match("project") ? (
                  new Intl.NumberFormat().format(Math.round(data.amount))
                ) : (
                  data.amount
                )}
              </p>
              <p
                className={`${
                  router.locale === "en"
                    ? style.contribution_amount_subtitle
                    : style.contribution_amount_subtitle_ar
                } d-flex justify-content-end mb-4 text-capitalize`}
              >
                {data.subTitle}
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={0} lg={0} xl={0}>
        <div className={`d-flex justify-content-center`}>
          <div
            className={`${style.contribution_card_container} ${data.bg} overflow-hidden`}
          >
            <div
              className={`${style.contribution_card_amount} d-flex justify-content-end h-100 flex-column position-relative px-4`}
            >
              {data.url && (
                <div className={`d-flex w-100`}>
                  <div
                    className={`${style.contribution_card_logo} d-flex justify-content-center align-items-center rounded-circle bg-white `}
                  >
                    <Image
                      alt={`Logo`}
                      src={data.url}
                      height="20px"
                      width="20px"
                    />
                  </div>
                </div>
              )}
              <p
                ref={ref}
                className={`${style.contribution_amount_title} d-flex justify-content-end text-white m-0`}
              >
                {!data.subTitle.match("project") &&
                  !data.subTitle.match("المشاريع") &&
                  "$"}
                {isVisible ? (
                  <CountUp
                    value={data.amount}
                    floatLength={0}
                    formatMoney={data.subTitle.match("project") ? false : true}
                  />
                ) : !data.subTitle.match("project") ? (
                  new Intl.NumberFormat().format(Math.round(data.amount))
                ) : (
                  data.amount
                )}
              </p>
              <p
                className={`${
                  router.locale === "en"
                    ? style.contribution_amount_subtitle
                    : style.contribution_amount_subtitle_ar
                } d-flex justify-content-end mb-4 text-capitalize`}
              >
                {data.subTitle}
              </p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
