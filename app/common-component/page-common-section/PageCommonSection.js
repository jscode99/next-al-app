import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";
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
      { className: "fas fa-envelope", link: "https://www.google.co.in/" },
      { className: "fab fa-whatsapp", link: "https://www.google.co.in/" },
      { className: "fab fa-twitter", link: "https://www.google.co.in/" },
      { className: "fab fa-facebook-f", link: "https://www.google.co.in/" },
    ];
    setSocialMediaList(socialMediaList);
  }, [router.locale]);
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>
            {router.locale === "en" ? (
              <Row>
                <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                  <div
                    className={`${style.page_common_section_title} d-flex justify-content-start align-items-center`}
                  >
                    {title}
                  </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div
                    className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center`}
                  >
                    {socialMediaList &&
                      socialMediaList.length &&
                      socialMediaList.map(data => (
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
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div
                    className={`${style.page_common_section_social_media_icon} d-flex justify-content-center align-items-center`}
                  >
                    {socialMediaList &&
                      socialMediaList.length &&
                      socialMediaList.map(data => (
                        <SocialMedia
                          className={data.className}
                          link={data.link}
                        />
                      ))}
                  </div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                  <div
                    className={`${style.page_common_section_title} d-flex justify-content-end align-items-center`}
                  >
                    {title}
                  </div>
                </Col>
              </Row>
            )}
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div
            className={`${style.page_common_section_breadcrum} d-flex ${
              router.locale === "en"
                ? "justify-content-start"
                : "justify-content-end"
            } align-items-center`}
          >
            {breadcrumList && breadcrumList.length > 0 && (
              <BreadCrumb breadcrumList={breadcrumList} />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
