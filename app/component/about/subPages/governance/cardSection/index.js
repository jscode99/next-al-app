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
    <>
      <Col xs={0} sm={0} md={0} lg={7} xl={7}>
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
              <Image src={data.url} alt={`Icons`} height="20px" width="20px" />
            </div>
          </div>
          <div>
            <h4
              className={`mb-4 fw-bold ${
                router.locale === "en" ? `text-start` : `text-end`
              }`}
            >
              {data.title}
            </h4>
            <p
              className={`text-muted m-0 ${
                router.locale === "en" ? `text-start` : `text-end`
              }`}
            >
              {data.des}
            </p>
          </div>
        </div>
      </Col>
    </>
  );
}
