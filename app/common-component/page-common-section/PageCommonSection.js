import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import BreadCrumb from "./BreadCrumb";
import SocialMedia from "./SocialMedia";
import { getBreadcrumData } from "../../services/commonService";
import style from "./index.module.sass";

export default function PageCommonSection({ title, handlePrint }) {
  let router = useRouter();
  const [breadcrumList, setBreadcrumList] = useState([]);
  const [socialMediaList, setSocialMediaList] = useState([]);
  useEffect(() => {
    // console.log("path", router);
    setBreadcrumList(getBreadcrumData(router));
    let socialMediaList = [
      { className: "fas fa-print", link: null, btn: handlePrint },
      { className: "fas fa-envelope", link: "mailto:", btn: null },
      {
        className: "fab fa-whatsapp",
        link: `https://api.whatsapp.com/send?text=Al%20Aqsa%20https%3A%2F%2F${
          process.env.DOMAIN
        }/${router.asPath}` /* "https://api.whatsapp.com/send" */,
        btn: null,
      },
      {
        className: "fab fa-twitter",
        link: "https://twitter.com/intent/tweet",
        btn: null,
      },
      {
        className: "fab fa-facebook-f",
        link: `https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv4.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttps%253A%252F%252F${
          process.env.DOMAIN
        }%252F${router.asPath.replace(
          "/",
          "%252F"
        )}%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB` /* "https://www.facebook.com/login.php" */,
      },
    ];
    setSocialMediaList(socialMediaList);
  }, [router.locale, handlePrint]);
  return (
    <div className={`${style.container} w-100`}>
      <Row className="h-100">
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
                        <h1
                          className={`${style.page_common_section_title} text-capitalize`}
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
                            socialMediaList.map(data => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                                btn={data.btn}
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
                            socialMediaList.map(data => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                                btn={data.btn}
                              />
                            ))}
                        </div>
                      </Col>
                      <Col xs={20} sm={20} md={14} lg={16} xl={16}>
                        <h1
                          className={`${style.page_common_section_title} text-end text-capitalize`}
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
                            <>
                              {breadcrumList[breadcrumList.length - 1].length >
                                30 && (
                                <span
                                  className={`${style.breadcrumb_item} ${style.primary_color}`}
                                >
                                  {"..."}
                                </span>
                              )}
                              <BreadCrumb breadcrumList={breadcrumList} />
                            </>
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
                        <h1
                          className={`${style.page_common_section_title} text-capitalize`}
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
                      <Col xs={0} sm={0} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          {socialMediaList &&
                            socialMediaList.length &&
                            socialMediaList.map(data => (
                              //<MoreOutlined />
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                                btn={data.btn}
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
                            socialMediaList.map(data => (
                              <SocialMedia
                                className={data.className}
                                link={data.link}
                                btn={data.btn}
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
                                btn={data.btn}
                              />
                            ))} */}
                        </div>
                      </Col>
                      <Col xs={20} sm={20} md={14} lg={16} xl={16}>
                        <h1
                          className={`${style.page_common_section_title} text-end text-capitalize`}
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
                            <>
                              {breadcrumList[breadcrumList.length - 1].length >
                                30 && (
                                <span
                                  className={`${style.breadcrumb_item} ${style.primary_color}`}
                                >
                                  {"..."}
                                </span>
                              )}
                              <BreadCrumb breadcrumList={breadcrumList} />
                            </>
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
