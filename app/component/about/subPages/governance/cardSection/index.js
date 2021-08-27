import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//Antd
import { Row, Col } from "antd";
//Style
import style from "./index.module.sass";

export default function CardSection({ data }) {
  const [cardData, setCardData] = useState([]);
  //router
  let router = useRouter();
  useEffect(() => {
    setCardData(data);
  }, []);

  return (
    <div className={`${style.container}`}>
      <Row
        gutter={[24, 24]}
        className={`justify-content-center flew-row w-100`}
      >
        {data.map((data, index) => (
          <Col xs={0} sm={0} md={0} lg={7} xl={7} key={index}>
            <div className={`${style.card_container} shadow bg-white p-3`}>
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
      </Row>
    </div>
  );
}
