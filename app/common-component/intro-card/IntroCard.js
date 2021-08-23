import Image from "next/image";
//Antd
import { Row, Col } from "antd";
//Styles
import style from "./index.module.sass";
//Service
import convertToInternationalCurrencySystem from "../../services/internationalCurrency";

export default function IntroCard({ data }) {
  return (
    <Col xs={0} sm={0} md={0} lg={8} xl={8}>
      <div
        className={`${style.contribution_card_container} ${data.bg} shadow overflow-hidden`}
      >
        <div
          className={`${style.contribution_card_amount} d-flex justify-content-end h-100 flex-column position-relative px-4`}
        >
          {data.url && (
            <div className={`d-flex w-100`}>
              <div
                className={`${style.contribution_card_logo} d-flex justify-content-center align-items-center rounded-circle bg-white `}
              >
                <Image alt={`Logo`} src={data.url} height="30px" width="30px" />
              </div>
            </div>
          )}
          <p
            className={`${style.contribution_amount_title} d-flex justify-content-end text-white m-0`}
          >
            {convertToInternationalCurrencySystem(Number(data.amount))}
          </p>
          <p
            className={`${style.contribution_amount_suubtitle} d-flex justify-content-end mb-4`}
          >
            {data.subTitle}
          </p>
        </div>
      </div>
    </Col>
  );
}
