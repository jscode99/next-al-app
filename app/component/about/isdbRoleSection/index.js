import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Row, Col } from "antd";
//Style
import style from "./index.module.sass";

export default function IsdbRoleSection({ data }) {
  // console.log("data", data);
  let router = useRouter();
  const { t } = useTranslation("common");
  const [roleIntro, setRoleIntro] = useState("");
  const [bulletTitle, setBulletTitle] = useState("");
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let listData = data.bulletGroup.bullet;
    setListData(listData);
  }, [data]);
  return (
    <div className={`${style.role_bg} py-5`}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <div className={`${style.role_container} px-5`}>
            <div className={`${style.role_details_conatiner} shadow`}>
              <div className={`p-5`}>
                <p
                  className={`${
                    router.locale === "en"
                      ? style.role_title
                      : style.role_title_ar
                  } text-capitalize mb-4 text-justify `}
                  dir={router.locale === "ar" ? "rtl" : ""}
                >
                  {t("role of isdb")}
                </p>
                <p
                  className={`${
                    router.locale === "en"
                      ? style.role_description
                      : style.role_description_ar
                  } mb-4 text-justify`}
                  dir={router.locale === "ar" ? "rtl" : ""}
                >
                  {data && Object.keys(data).length > 0 && data.description}
                </p>
                <p
                  className={`${
                    router.locale === "en"
                      ? style.role_description
                      : style.role_description_ar
                  } text-justify`}
                  dir={router.locale === "ar" ? "rtl" : ""}
                >
                  {data &&
                    Object.keys(data).length > 0 &&
                    data.bulletGroup &&
                    Object.keys(data.bulletGroup).length > 0 &&
                    data.bulletGroup.bulletTitle &&
                    Object.keys(data.bulletGroup.bulletTitle).length > 0 &&
                    data.bulletGroup.bulletTitle}
                </p>
                {listData &&
                  listData.length > 0 &&
                  listData.map((data) => (
                    <>
                      {router.locale === "en" ? (
                        <div className={`d-flex align-item-start`}>
                          <span className={`${style.role_bullet_point} mx-2`}>
                            &#8226;
                          </span>
                          <p
                            className={`${style.role_description} text-justify mt-2 m-0`}
                          >
                            {data.title}
                          </p>
                        </div>
                      ) : (
                        <div className={`d-flex justify-content-end`}>
                          <p
                            className={`${
                              router.locale === "en"
                                ? style.role_description
                                : style.role_description_ar
                            } mt-2 mb-0 text-end`}
                          >
                            {data.title}
                          </p>
                          <span className={`${style.role_bullet_point} mx-2`}>
                            &#8226;
                          </span>
                        </div>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <div className={`${style.role_container} px-4`}>
            <div className={`${style.role_details_conatiner}`}>
              <div className={`p-5`}>
                <p
                  className={`${
                    router.locale === "en"
                      ? style.role_title
                      : style.role_title_ar
                  } text-capitalize mb-4 ${
                    router.locale === "en" ? `` : `text-end`
                  } `}
                >
                  {t("role of isdb")}
                </p>
                <p
                  className={`${style.role_description} mb-4 ${
                    router.locale === "en" ? `text-justify` : `text-end`
                  }`}
                >
                  {data && Object.keys(data).length > 0 && data.description}
                </p>
                <p
                  className={`${style.role_description} ${
                    router.locale === "en" ? `text-justify` : `text-end`
                  }`}
                >
                  {data &&
                    Object.keys(data).length > 0 &&
                    data.bulletGroup &&
                    Object.keys(data.bulletGroup).length > 0 &&
                    data.bulletGroup.bulletTitle &&
                    Object.keys(data.bulletGroup.bulletTitle).length > 0 &&
                    data.bulletGroup.bulletTitle}
                </p>
                {listData &&
                  listData.length > 0 &&
                  listData.map((data) => (
                    <>
                      {router.locale === "en" ? (
                        <div className={`d-flex align-item-start`}>
                          <span className={`${style.role_bullet_point} mx-2`}>
                            &#8226;
                          </span>
                          <p
                            className={`${style.role_description} text-justify mt-2 m-0`}
                          >
                            {data.title}
                          </p>
                        </div>
                      ) : (
                        <div className={`d-flex justify-content-end`}>
                          <p
                            className={`${style.role_description} mt-2 mb-0 text-end`}
                          >
                            {data.title}
                          </p>
                          <span className={`${style.role_bullet_point} mx-2`}>
                            &#8226;
                          </span>
                        </div>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <div className={`${style.role_container} px-4`}>
            <div className={`${style.role_details_conatiner}`}>
              <div className={`p-3`}>
                <p
                  className={`${
                    router.locale === "en"
                      ? style.role_title
                      : style.role_title_ar
                  } text-capitalize mb-4 ${
                    router.locale === "en" ? `` : `text-end`
                  } `}
                >
                  {t("role of isdb")}
                </p>
                <p
                  className={`${style.role_description} mb-4 ${
                    router.locale === "en" ? `text-justify` : `text-end`
                  }`}
                >
                  {data && Object.keys(data).length > 0 && data.description}
                </p>
                <p
                  className={`${style.role_description} ${
                    router.locale === "en" ? `text-justify` : `text-end`
                  }`}
                >
                  {data &&
                    Object.keys(data).length > 0 &&
                    data.bulletGroup &&
                    Object.keys(data.bulletGroup).length > 0 &&
                    data.bulletGroup.bulletTitle &&
                    Object.keys(data.bulletGroup.bulletTitle).length > 0 &&
                    data.bulletGroup.bulletTitle}
                </p>
                {listData &&
                  listData.length > 0 &&
                  listData.map((data) => (
                    <>
                      {router.locale === "en" ? (
                        <div className={`d-flex align-item-start`}>
                          <span className={`${style.role_bullet_point} mx-2`}>
                            &#8226;
                          </span>
                          <p
                            className={`${style.role_description} text-justify mt-2 m-0`}
                          >
                            {data.title}
                          </p>
                        </div>
                      ) : (
                        <div className={`d-flex justify-content-end`}>
                          <p
                            className={`${style.role_description} mt-2 mb-0 text-end`}
                          >
                            {data.title}
                          </p>
                          <span className={`${style.role_bullet_point} mx-2`}>
                            &#8226;
                          </span>
                        </div>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
