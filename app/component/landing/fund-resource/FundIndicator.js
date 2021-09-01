import { Col } from "antd";
import style from "./index.module.sass";

export default function FundIndicator({ data }) {
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
      <div className="mx-5 d-flex justify-content-center align-items-center flex-column">
        <div
          className={`${style.fund_indecator} ${data.bg} rounded-circle mb-3 d-flex justify-content-center align-items-center text-white`}
        >
          {data.count}
        </div>
        <p
          className={`${style.fund_title} ${data.font} text-center text-capitalize`}
        >
          {data.text}
        </p>
      </div>
    </Col>
  );
}
