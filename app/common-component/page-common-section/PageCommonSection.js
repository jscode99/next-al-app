import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Row, Col, Button, Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";
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
      {
        className: "fas fa-envelope",
        link:
          router.locale === "en"
            ? `mailto:?body=https%3A%2F%2F${
                process.env.DOMAIN
              }&subject=${"Al-Aqsa"}`
            : `mailto:?body=https%3A%2F%2F${
                process.env.DOMAIN
              }%2Far&subject=${"الأقصى"}`,
        btn: null,
      },
      {
        className: "fab fa-whatsapp",
        link:
          router.locale === "en"
            ? `https://api.whatsapp.com/send?text=${"Al-Aqsa"}%20https%3A%2F%2F${
                process.env.DOMAIN
              }`
            : `https://api.whatsapp.com/send?text=${"الأقصى"}%20https%3A%2F%2F${
                process.env.DOMAIN
              }%2Far`,
        btn: null,
      },
      {
        className: "fab fa-twitter",
        link:
          router.locale === "en"
            ? `https://twitter.com/intent/tweet?text=${"Al-Aqsa"}&url=https%3A%2F%2F${
                process.env.DOMAIN
              }.YUBfkjipWaQ.twitter&related=`
            : `https://twitter.com/intent/tweet?text=${"الأقصى"}&url=https%3A%2F%2F${
                process.env.DOMAIN
              }%2Far.YUBfkjipWaQ.twitter&related=`,
        btn: null,
      },
      {
        className: "fab fa-facebook-f",
        link:
          router.locale === "en"
            ? `https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv4.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttps%253A%252F%252F${process.env.DOMAIN}%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB`
            : `https://www.facebook.com/login.php?skip_api_login=1&api_key=140586622674265&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv4.0%2Fdialog%2Fshare%3Fredirect_uri%3Dhttp%253A%252F%252Fs7.addthis.com%252Fstatic%252Fthankyou.html%26display%3Dpopup%26href%3Dhttps%253A%252F%252F${process.env.DOMAIN}%2Far%26client_id%3D140586622674265%26ret%3Dlogin&cancel_url=https%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB`,
      },
    ];
    setSocialMediaList(socialMediaList);
  }, [router.locale, handlePrint]);

  let overLay = (
    <Menu>
      {socialMediaList &&
        socialMediaList.length &&
        socialMediaList.map((data, index) => (
          <Menu.Item key={index}>
            <SocialMedia
              className={data.className}
              link={data.link}
              btn={data.btn}
            />
          </Menu.Item>
        ))}
    </Menu>
  );

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
                            socialMediaList.map((data, index) => (
                              <SocialMedia
                                key={index}
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
                            socialMediaList.map((data, index) => (
                              <SocialMedia
                                key={index}
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
                      <Col xs={2} sm={2} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          <Dropdown
                            overlay={overLay}
                            style={{ width: "20px", height: "20px" }}
                            placement="bottomCenter"
                          >
                            <Button
                              className={`d-flex justify-content-center align-items-center px-0`}
                            >
                              <MoreOutlined
                                // className={``}
                                style={{ fontSize: "25px", color: "#0E3890" }}
                              />
                            </Button>
                          </Dropdown>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col xs={2} sm={2} md={10} lg={8} xl={8}>
                        <div
                          className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center h-100`}
                        >
                          <Dropdown
                            overlay={overLay}
                            style={{ width: "20px", height: "20px" }}
                            placement="bottomCenter"
                          >
                            <Button
                              className={`d-flex justify-content-center align-items-center px-0`}
                              icon={
                                <MoreOutlined
                                  style={{ fontSize: "25px", color: "#0E3890" }}
                                />
                              }
                            ></Button>
                          </Dropdown>
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
