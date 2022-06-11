import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Image from "next/image";
//Antd
import { Row, Col } from "antd";
//Styles
import style from "./index.module.sass";

export default function MembersList({ data }) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Row>
      {router.locale === "en" ? (
        <Col xs={0} sm={0} md={24} lg={24} xl={24} className={`mx-3 mt-2`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {false ? (
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
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
        <Col xs={0} sm={0} md={24} lg={24} xl={24} className={`mb-3 mt-4`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {false ? (
                <>
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_title
                            : style.members_list_title_ar
                        } d-flex justify-content-center text-end align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${
                          router.locale === "en"
                            ? style.members_list_label
                            : style.members_list_label_ar
                        } d-flex justify-content-center text-end align-items-center mb-2`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-5 text-center`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_title
                            : style.members_list_title_ar
                        } d-flex justify-content-center text-end align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${
                          router.locale === "en"
                            ? style.members_list_label
                            : style.members_list_label_ar
                        } d-flex justify-content-center text-end align-items-center mb-2`}
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
      {router.locale === "en" ? (
        <Col xs={24} sm={24} md={0} lg={0} xl={0} className={`mx-0 mt-2`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {false ? (
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
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-3 text-center`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-3 text-center`}
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
        <Col xs={24} sm={24} md={0} lg={0} xl={0} className={`mb-3 mt-4`}>
          <div className={`${style.members_list_card} shadow bg-white`}>
            <Row className={`h-100`}>
              {false ? (
                <>
                  <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100 flex-column`}
                    >
                      <div
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-3 text-center`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_title
                            : style.members_list_title_ar
                        } d-flex justify-content-center align-items-center m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${
                          router.locale === "en"
                            ? style.members_list_label
                            : style.members_list_label_ar
                        } d-flex justify-content-center align-items-center mb-2`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_button
                            : style.members_list_button_ar
                        } rounded-pill d-flex justify-content-center align-items-center px-3 text-center`}
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
                        className={`${
                          router.locale === "en"
                            ? style.members_list_title
                            : style.members_list_title_ar
                        } d-flex justify-content-center align-items-center text-end m-0`}
                      >
                        {data.title}
                      </p>
                      <p
                        className={`${
                          router.locale === "en"
                            ? style.members_list_label
                            : style.members_list_label_ar
                        } d-flex justify-content-center align-items-center text-end mb-2`}
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
