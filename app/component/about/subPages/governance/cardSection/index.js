import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

//Antd
import { Row, Col } from "antd";
//Style
import style from "./index.module.sass";

export default function CardSection({ data }) {
  const { t } = useTranslation("common");
  const [cardData, setCardData] = useState([]);
  //router
  let router = useRouter();

  const getProperty = (priority) => {
    switch (priority) {
      case "1":
        return [style.secondary_color, "/images/about/Governance/Star.webp"];
      case "2":
        return [
          style.theme_golden_color,
          "/images/about/Governance/People.webp",
        ];
      case "3":
        return [style.primary_color, "/images/about/Governance/Bank.webp"];
    }
  };

  useEffect(() => {
    const list = data.map((data) => {
      return {
        title: t(data.title.toLowerCase()),
        des: data.description,
        bg: getProperty(data.priority)[0],
        url: getProperty(data.priority)[1],
      };
    });

    setCardData(list);
  }, [data]);

  return (
    <div className={`${style.container}`}>
      <Row className={`justify-content-center flew-row w-100`}>
        {router.locale === "en"
          ? cardData &&
            cardData.length > 0 &&
            cardData.map((data, index) => (
              <>
                <Col xs={0} sm={0} md={0} lg={8} xl={8} key={index}>
                  <div
                    className={`${style.card_container} shadow bg-white p-3 mx-2`}
                  >
                    <div
                      className={`d-flex ${
                        router.locale === "en"
                          ? `justify-content-start`
                          : `justify-content-end`
                      } overflow-hidden w-100 mb-4`}
                    >
                      <div
                        className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                      >
                        <Image
                          src={data.url}
                          alt={`Icons`}
                          height="20px"
                          width="20px"
                        />
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`mb-4 ${style.card_title} fw-bold ${
                          router.locale === "en" ? `text-start` : `text-end`
                        } text-capitalize`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`text-muted ${style.card_des} m-0 ${
                          router.locale === "en" ? `text-justify` : `text-end`
                        }`}
                      >
                        {data.des}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={0} sm={0} md={8} lg={0} xl={0} key={index}>
                  <div
                    className={`${style.card_container} shadow bg-white p-3 mx-2`}
                  >
                    <div
                      className={`d-flex ${
                        router.locale === "en"
                          ? `justify-content-start`
                          : `justify-content-end`
                      } overflow-hidden w-100 mb-4`}
                    >
                      <div
                        className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                      >
                        <Image
                          src={data.url}
                          alt={`Icons`}
                          height="20px"
                          width="20px"
                        />
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`mb-4 ${style.card_title} fw-bold ${
                          router.locale === "en" ? `text-start` : `text-end`
                        } text-capitalize`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`text-muted ${style.card_des} m-0 ${
                          router.locale === "en" ? `text-justify` : `text-end`
                        }`}
                      >
                        {data.des}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={0} lg={0} xl={0} key={index}>
                  <div
                    className={`${style.card_container} shadow bg-white p-3 my-2 mx-5`}
                  >
                    <div
                      className={`d-flex ${
                        router.locale === "en"
                          ? `justify-content-start`
                          : `justify-content-end`
                      } overflow-hidden w-100 mb-4`}
                    >
                      <div
                        className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                      >
                        <Image
                          src={data.url}
                          alt={`Icons`}
                          height="20px"
                          width="20px"
                        />
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`mb-4 ${
                          style.card_title
                        } text-capitalize fw-bold ${
                          router.locale === "en" ? `text-start` : `text-end`
                        } text-capitalize`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`text-muted ${style.card_des} m-0 ${
                          router.locale === "en" ? `text-justify` : `text-end`
                        }`}
                      >
                        {data.des}
                      </p>
                    </div>
                  </div>
                </Col>
              </>
            ))
          : cardData &&
            cardData.length > 0 &&
            new Array(...cardData).reverse().map((data, index) => (
              <>
                <Col xs={0} sm={0} md={0} lg={8} xl={8} key={index}>
                  <div
                    className={`${style.card_container} shadow bg-white p-3 mx-2`}
                  >
                    <div
                      className={`d-flex ${
                        router.locale === "en"
                          ? `justify-content-start`
                          : `justify-content-end`
                      } overflow-hidden w-100 mb-4`}
                    >
                      <div
                        className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                      >
                        <Image
                          src={data.url}
                          alt={`Icons`}
                          height="20px"
                          width="20px"
                        />
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`mb-4 ${style.card_title_ar} fw-bold ${
                          router.locale === "en" ? `text-start` : `text-end`
                        } text-capitalize`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`text-muted ${style.card_des_ar} m-0 text-justify
                        }`}
                        dir={`rtl`}
                      >
                        {data.des}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={0} sm={0} md={8} lg={0} xl={0} key={index}>
                  <div
                    className={`${style.card_container} shadow bg-white p-3 mx-2`}
                  >
                    <div
                      className={`d-flex ${
                        router.locale === "en"
                          ? `justify-content-start`
                          : `justify-content-end`
                      } overflow-hidden w-100 mb-4`}
                    >
                      <div
                        className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                      >
                        <Image
                          src={data.url}
                          alt={`Icons`}
                          height="20px"
                          width="20px"
                        />
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`mb-4 ${style.card_title_ar} fw-bold ${
                          router.locale === "en" ? `text-start` : `text-end`
                        } text-capitalize`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`text-muted ${style.card_des_ar} m-0 text-justify
                      }`}
                        dir={`rtl`}
                      >
                        {data.des}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={0} lg={0} xl={0} key={index}>
                  <div
                    className={`${style.card_container} shadow bg-white p-3 my-2 mx-5`}
                  >
                    <div
                      className={`d-flex ${
                        router.locale === "en"
                          ? `justify-content-start`
                          : `justify-content-end`
                      } overflow-hidden w-100 mb-4`}
                    >
                      <div
                        className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                      >
                        <Image
                          src={data.url}
                          alt={`Icons`}
                          height="20px"
                          width="20px"
                        />
                      </div>
                    </div>
                    <div>
                      <h4
                        className={`mb-4 ${
                          style.card_title_ar
                        } text-capitalize fw-bold ${
                          router.locale === "en" ? `text-start` : `text-end`
                        } text-capitalize`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`text-muted ${style.card_des_ar} m-0 text-justify
                      }`}
                        dir={`rtl`}
                      >
                        {data.des}
                      </p>
                    </div>
                  </div>
                </Col>
              </>
            ))}

        {/* {data.map((data, index) => (
      <Row
        className={`justify-content-center flew-row w-100`}
      >
        {data.map((data, index) => (
          <Col xs={0} sm={0} md={0} lg={8} xl={8} key={index}>
            <div className={`${style.card_container} shadow bg-white p-3 mx-2`}>
              <div
                className={`d-flex ${
                  router.locale === "en"
                    ? `justify-content-start`
                    : `justify-content-end`
                } overflow-hidden w-100 mb-4`}
              >
                <div
                  className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                >
                  <Image
                    src={data.url}
                    alt={`Icons`}
                    height="20px"
                    width="20px"
                  />
                </div>
              </div>
              <div>
                <h4
                  className={`mb-4 ${style.card_title} fw-bold ${
                    router.locale === "en" ? `text-start` : `text-end`
                  }`}
                >
                  {data.title}
                </h4>
                <p
                  className={`text-muted ${style.card_des} m-0 ${
                    router.locale === "en" ? `text-start` : `text-end`
                  }`}
                >
                  {data.des}
                </p>
              </div>
            </div>
          </Col>
        ))}
        {data.map((data, index) => (
          <Col xs={0} sm={0} md={8} lg={0} xl={0} key={index}>
            <div className={`${style.card_container} shadow bg-white p-3 mx-2`}>
              <div
                className={`d-flex ${
                  router.locale === "en"
                    ? `justify-content-start`
                    : `justify-content-end`
                } overflow-hidden w-100 mb-4`}
              >
                <div
                  className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                >
                  <Image
                    src={data.url}
                    alt={`Icons`}
                    height="20px"
                    width="20px"
                  />
                </div>
              </div>
              <div>
                <h4
                  className={`mb-4 ${style.card_title} fw-bold ${
                    router.locale === "en" ? `text-start` : `text-end`
                  } text-capitalize`}
                >
                  {data.title}
                </h4>
                <p
                  className={`text-muted ${style.card_des} m-0 ${
                    router.locale === "en" ? `text-start` : `text-end`
                  }`}
                >
                  {data.des}
                </p>
              </div>
            </div>
          </Col>
        ))}
        {data.map((data, index) => (
          <Col xs={24} sm={24} md={0} lg={0} xl={0} key={index}>
            <div
              className={`${style.card_container} shadow bg-white p-3 my-2 mx-5`}
            >
              <div
                className={`d-flex ${
                  router.locale === "en"
                    ? `justify-content-start`
                    : `justify-content-end`
                } overflow-hidden w-100 mb-4`}
              >
                <div
                  className={`${style.card_icon_container}  ${data.bg}  d-flex justify-content-center align-items-center`}
                >
                  <Image
                    src={data.url}
                    alt={`Icons`}
                    height="20px"
                    width="20px"
                  />
                </div>
              </div>
              <div>
                <h4
                  className={`mb-4 ${
                    style.card_title
                  } text-capitalize fw-bold ${
                    router.locale === "en" ? `text-start` : `text-end`
                  } text-capitalize`}
                >
                  {data.title}
                </h4>
                <p
                  className={`text-muted ${style.card_des} m-0 ${
                    router.locale === "en" ? `text-start` : `text-end`
                  }`}
                >
                  {data.des}
                </p>
              </div>
            </div>
          </Col>
        ))} */}
      </Row>
    </div>
  );
}
