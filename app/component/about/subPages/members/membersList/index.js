import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Image from "next/image";
//Antd
import { Row, Col, Button } from "antd";
//Styles
import style from "./index.module.sass";

export default function MembersList({ data }) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Row className={`px-3`}>
      {router.locale === "en" ? (
        <Col span={24} className={`mt-2`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {data.url ? (
                <>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 rounded-circle`}
                    >
                      <Image
                        src={process.env.BASE_URL + data.url}
                        alt={`Flags`}
                        height="50px"
                        width="50px"
                      />
                    </div>
                  </Col>
                  <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                    <div
                      className={`d-flex justify-content-center align-items-start h-100 flex-column`}
                    >
                      <p
                        className={`${style.members_list_title} d-flex justify-content-center align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${style.members_list_label} d-flex justify-content-center align-items-center mb-2`}
                      >
                        {data.label}
                      </p>
                    </div>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
                        // style={{ width: "240px" }}
                      >
                        {data.reputation}
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                    <div
                      className={`d-flex justify-content-center align-items-start h-100 flex-column px-4`}
                    >
                      <p
                        className={`${style.members_list_title} d-flex justify-content-center align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${style.members_list_label} d-flex justify-content-center align-items-center mb-2`}
                      >
                        {data.label}
                      </p>
                    </div>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
                      >
                        {data.reputation}
                      </div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Col>
      ) : (
        <Col span={24} className={`mb-3 mt-4`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {data.url ? (
                <>
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
                        // style={{ width: "240px" }}
                      >
                        {data.reputation}
                      </div>
                    </div>
                  </Col>

                  <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                    <div
                      className={`d-flex justify-content-center align-items-end h-100 flex-column`}
                    >
                      <p
                        className={`${style.members_list_title} d-flex justify-content-center align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${style.members_list_label} d-flex justify-content-center align-items-center mb-2`}
                      >
                        {data.label}
                      </p>
                    </div>
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 rounded-circle`}
                    >
                      <Image
                        src={process.env.BASE_URL + data.url}
                        alt={`Flags`}
                        height="50px"
                        width="50px"
                      />
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
                        // style={{ width: "240px" }}
                      >
                        {data.reputation}
                      </div>
                    </div>
                  </Col>
                  <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                    <div
                      className={`d-flex justify-content-center align-items-end h-100 flex-column px-4`}
                    >
                      <p
                        className={`${style.members_list_title} d-flex justify-content-center align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${style.members_list_label} d-flex justify-content-center align-items-center mb-2`}
                      >
                        {data.label}
                      </p>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Col>
      )}
    </Row>
  );
}
