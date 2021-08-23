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
    <Row>
      {router.locale === "en" ? (
        <Col span={24} className={`mb-3 mt-4`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {data.url ? (
                <>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 rounded-circle`}
                    >
                      <Image
                        src={data.url}
                        alt={`Flags`}
                        height="50px"
                        width="50px"
                      />
                    </div>
                  </Col>
                  <Col xs={16} sm={16} md={16} lg={16} xl={16}>
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
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center`}
                        style={{ width: "240px" }}
                      >
                        {data.reputation}
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={18} sm={18} md={18} lg={18} xl={18}>
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
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center`}
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
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${style.members_list_button} rounded-pill d-flex justify-content-center align-items-center`}
                        style={{ width: "240px" }}
                      >
                        {data.reputation}
                      </div>
                    </div>
                  </Col>

                  <Col xs={16} sm={16} md={16} lg={16} xl={16}>
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
                        src={data.url}
                        alt={`Flags`}
                        height="50px"
                        width="50px"
                      />
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <Button
                        type="text"
                        shape="round"
                        className={`${style.members_list_button}`}
                      >
                        {data.reputation}
                      </Button>
                    </div>
                  </Col>
                  <Col xs={18} sm={18} md={18} lg={18} xl={18}>
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
