import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import BreadCrumb from "./BreadCrumb";
import SocialMedia from "./SocialMedia";
import { getBreadcrumData } from "../../services/commonService";
import style from "./index.module.sass";

export default function PageCommonSection({ title }) {
  let router = useRouter();
  const [breadcrumList, setBreadcrumList] = useState([]);
  const [socialMediaList, setSocialMediaList] = useState([]);
  useEffect(() => {
    console.log("path", router);
    if (router.locale === "en") setBreadcrumList(getBreadcrumData(router));
    else setBreadcrumList(getBreadcrumData(router).reverse());
    let socialMediaList = [
      { className: "fas fa-print", link: "https://www.google.co.in/" },
      { className: "fas fa-envelope", link: "mailto:" },
      { className: "fab fa-whatsapp", link: "https://api.whatsapp.com/send" },
      { className: "fab fa-twitter", link: "https://twitter.com/intent/tweet" },
      {
        className: "fab fa-facebook-f",
        link: "https://www.facebook.com/login.php",
      },
    ];
    setSocialMediaList(socialMediaList);
  }, [router.locale]);
  return (
    <div className={`${style.container} w-100`}>
      <Row>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <div
            className={`${style.card} d-flex align-items-center bg-white px-5 pt-3`}
          >
            <Row className={`w-100`}>
              <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                <div>
                  {router.locale === "en" ? (
                    <Row>
                      <Col xs={20} sm={20} md={14} lg={16} xl={16}>
                        <h1 className={`${style.page_common_section_title}`}>
                          {title}
                        </h1>
                        <div
                          className={`${
                            style.page_common_section_breadcrum
                          } d-flex ${
                            router.locale === "en"
                              ? "justify-content-start"
                              : "justify-content-end"
                          } align-items-center mb-2`}
                        >
                          {breadcrumList && breadcrumList.length > 0 && (
                            <BreadCrumb breadcrumList={breadcrumList} />
                          )}
                        </div>
                      </Col>
                      <Col xs={4} sm={4} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          {/* <Button
                            type="text"
                            className={`${style.social_dd_button} d-flex justify-content-between align-items-center`}
                          >
                            <i clasName="fas fa-paper-plane"></i>
                          </Button> */}
                          {socialMediaList &&
                            socialMediaList.length &&
                            socialMediaList.map((data) => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                              />
                            ))}
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col xs={0} sm={0} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          {/* <Button
                            type="text"
                            className={`${style.social_dd_button} d-flex justify-content-between align-items-center`}
                          >
                            <i clasName="fas fa-paper-plane"></i>
                          </Button> */}
                          {socialMediaList &&
                            socialMediaList.length &&
                            socialMediaList.map((data) => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                              />
                            ))}
                        </div>
                      </Col>
                      <Col xs={20} sm={20} md={14} lg={16} xl={16}>
                        <h1
                          className={`${style.page_common_section_title} text-end`}
                        >
                          {title}
                        </h1>
                        <div
                          className={`${
                            style.page_common_section_breadcrum
                          } d-flex ${
                            router.locale === "en"
                              ? "justify-content-start"
                              : "justify-content-end"
                          } align-items-center mb-2`}
                        >
                          {breadcrumList && breadcrumList.length > 0 && (
                            <BreadCrumb breadcrumList={breadcrumList} />
                          )}
                        </div>
                      </Col>
                    </Row>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <div
            className={`${style.card} d-flex align-items-center bg-white px-4 pt-3`}
          >
            <Row className={`w-100`}>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <div>
                  {router.locale === "en" ? (
                    <Row>
                      <Col xs={20} sm={20} md={14} lg={16} xl={16}>
                        <h1 className={`${style.page_common_section_title}`}>
                          {title}
                        </h1>
                        <div
                          className={`${
                            style.page_common_section_breadcrum
                          } d-flex ${
                            router.locale === "en"
                              ? "justify-content-start"
                              : "justify-content-end"
                          } align-items-center mb-2`}
                        >
                          {breadcrumList && breadcrumList.length > 0 && (
                            <BreadCrumb breadcrumList={breadcrumList} />
                          )}
                        </div>
                      </Col>
                      <Col xs={0} sm={0} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          {socialMediaList &&
                            socialMediaList.length &&
                            socialMediaList.map((data) => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                              />
                            ))}
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col xs={0} sm={0} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          {socialMediaList &&
                            socialMediaList.length &&
                            socialMediaList.map((data) => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                              />
                            ))}
                        </div>
                      </Col>
                      <Col xs={4} sm={4} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          {/* {socialMediaList &&
                            socialMediaList.length &&
                            socialMediaList.map((data) => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                              />
                            ))} */}
                        </div>
                      </Col>
                      <Col xs={20} sm={20} md={14} lg={16} xl={16}>
                        <h1
                          className={`${style.page_common_section_title} text-end`}
                        >
                          {title}
                        </h1>
                        <div
                          className={`${
                            style.page_common_section_breadcrum
                          } d-flex ${
                            router.locale === "en"
                              ? "justify-content-start"
                              : "justify-content-end"
                          } align-items-center mb-2`}
                        >
                          {breadcrumList && breadcrumList.length > 0 && (
                            <BreadCrumb breadcrumList={breadcrumList} />
                          )}
                        </div>
                      </Col>
                    </Row>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
