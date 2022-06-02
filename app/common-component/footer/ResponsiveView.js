import Link from "next/link";
import { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import { useTranslation } from "next-i18next";
//Context API
import AppContext from "../../AppContext";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { CONST } from "../../constant/index";
//css
import style from "./footer.module.sass";

export default function ResponsiveView({ view, logo }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  let { appContext, setAppContext } = useContext(AppContext);
  console.log("footer");
  const [fLinks, setFooterLink] = useState([
    "about",
    "projects",
    "success stories",
    "publications",
    "contact",
  ]);
  // const [sMedia, setSocialMedia] = useState(null);
  // const [otResource, setOtResource] = useState(null);
  // useEffect(() => {
  //   // API Call Other resources
  //   axios
  //     .get(
  //       CONST.BASE_URL +
  //         CONST.API.LIST("FooterLink") +
  //         CONST.API.QUERY("Link, Title"),
  //     )
  //     .then(res => {
  //       setFooterLink(res.data.value);
  //     })
  //     .catch(err => console.log(err));

  //   // API Call Other resources

  //   axios
  //     .get(
  //       `${CONST.BASE_URL}${CONST.API.LIST("SocialMedia")}${CONST.API.QUERY(
  //         "Title,Link,AttachmentFiles",
  //       )} ${CONST.API.ATTACHMENT}`,
  //     )
  //     .then(res => {
  //       setSocialMedia(res.data.value);
  //     })
  //     .catch(err => console.log(err));

  //   // API Call Other resources

  //   axios
  //     .get(
  //       CONST.BASE_URL +
  //         CONST.API.LIST("OtherResources") +
  //         CONST.API.QUERY("Link, Title"),
  //     )
  //     .then(res => {
  //       setOtResource(res.data.value);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // socialMediaIcon = socialMediaIcon.slice(0, 4);
  return (
    // <div className={`${style.footer_bg}`}>
    <div className={`${style.navigation_container_bg} pt-5`}>
      <div
        className={`${style.navigation_container} justify-content-center ${
          view === "tablet" ? "px-2" : "px-5"
        } `}
      >
        {router.locale === "en" ? (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          >
            <Row>
              <Col
                xs={24}
                sm={24}
                md={7}
                lg={5}
                xl={5}
                className={`d-flex justify-content-center align-items-center flex-column ${
                  view === "mobile" ? "p-footer-logo" : ""
                } ${style.logo}`}
              >
                <Image
                  src={"/images/common/alAqsaHead.png"}
                  alt={`Organization Logo`}
                  height="100px"
                  width="100px"
                />
                <p className={`${style.logo_title} text-capitalize text-white`}>
                  {t("al aqsa fund")}
                </p>
              </Col>
              <Col xs={24} sm={24} md={6} lg={7} xl={7}>
                <ul className={`${style.footer_list}`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    IsDB Group
                  </li>
                  <li
                    className={`${style.footer_list_address} ${style.footer_list_cursor_auto}`}
                  >
                    {`8111 King Khalid St.Al Nuzlah Al yamania Dist.`}
                    <br />
                    {`Unit No.1, Jeddah 22332 - 2444 `}
                    <br />
                    {`Kingdom of Saudi Arabia`}
                    <br />
                  </li>
                  <li className={`${style.footer_list_cursor_auto}`}>
                    Tel: +966 (12) 636 1264
                  </li>
                  <li className={`${style.footer_list_cursor_auto}`}>
                    Fax: +966 (12) 6366871
                  </li>
                </ul>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <ul className={`${style.footer_list} text-capitalize`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    Quick Links
                  </li>
                  {fLinks.map((link) => (
                    <li>
                      <p
                        className={`mb-0`}
                        onClick={() => {
                          setAppContext({
                            ...appContext,
                            fLinkClick: true,
                          });
                          router.push(`/${link.split(" ").join("-")}`);
                        }}
                        // href={"/about"}
                      >
                        {t(link)}
                      </p>
                    </li>
                  ))}
                  {/* <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/projects");
                      }}
                      // href={"/projects"}
                    >
                      {t("projects")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/success-stories");
                      }}
                      // href={"/success-stories"}
                    >
                      {t("success stories")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/publications");
                      }}
                      // href={"/publications"}
                    >
                      {t("publications")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/contact");
                      }}
                      // href={"/contact"}
                    >
                      {t("contact")}
                    </p>
                  </li> */}
                </ul>
              </Col>
              <Col xs={24} sm={24} md={5} lg={6} xl={6}>
                <ul className={`${style.footer_list}`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto}
                   `}
                  >
                    Other Resources
                  </li>
                  <li>
                    <p onClick={() => router.push("/terms")}>
                      Terms and Conditions
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        router.push("/policy");
                      }}
                    >
                      Privacy Policy
                    </p>
                  </li>
                  <li>
                    <p
                      target="_blank"
                      href="https://www.google.com/maps?ll=21.475867,39.201798&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=13485734704728704443"
                    >
                      Sitemap
                    </p>
                  </li>
                  {/* {otResource && otResource.length > 0
                  ? otResource.map((data) => (
                      <li>
                        <a href={data.p} target="_blank" rel="noreferrer">
                          {data.Title}
                        </a>
                      </li>
                    ))
                  : ""} */}
                </ul>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row>
              <Col xs={0} sm={0} md={5} lg={6} xl={6}>
                <ul className={`${style.footer_list} text-end text-capitalize`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto}
                   `}
                  >
                    {t("other resources")}
                  </li>
                  <li>
                    <p className={`mb-0`} onClick={() => router.push("/terms")}>
                      {t("terms and conditions")}
                    </p>
                  </li>
                  <li>
                    <a
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/policy");
                      }}
                    >
                      {t("privacy policy")}
                    </a>
                  </li>
                  <li>
                    <p
                      target="_blank"
                      href="https://www.google.com/maps?ll=21.475867,39.201798&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=13485734704728704443"
                    >
                      {t("sitemap")}
                    </p>
                  </li>
                </ul>
              </Col>

              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <ul className={`${style.footer_list} text-end text-capitalize`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    {t("quick links")}
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/about");
                      }}
                      // href={"/about"}
                    >
                      {t("about")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/projects");
                      }}
                      // href={"/projects"}
                    >
                      {t("projects")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/success-stories");
                      }}
                      // href={"/success-stories"}
                    >
                      {t("success stories")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/publications");
                      }}
                      // href={"/publications"}
                    >
                      {t("publications")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/contact");
                      }}
                      // href={"/contact"}
                    >
                      {t("contact")}
                    </p>
                  </li>
                </ul>
              </Col>
              <Col xs={0} sm={0} md={6} lg={7} xl={7}>
                <ul className={`${style.footer_list} text-end`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    مجموعة البنك الإسلامي للتنمية
                  </li>
                  <li
                    className={`${style.footer_list_address} ${style.footer_list_cursor_auto} `}
                  >
                    {`8111 شارع الملك خالد، حي النزلة اليمانية`}
                    <br />
                    {`الوحدة رقم 1
جدة 22332-2444`}
                    <br />
                    {`المملكة العربية السعودية`}
                    <br />
                  </li>
                  <li className={`${style.footer_list_cursor_auto} `}>
                    +التليفون: 636 1400 (12) 966
                  </li>
                  <li className={`${style.footer_list_cursor_auto}`}>
                    +الفاكس: 636 6871 (12) 966
                  </li>
                </ul>
              </Col>
              <Col
                xs={0}
                sm={0}
                md={7}
                lg={5}
                xl={5}
                className={`d-flex justify-content-center align-items-center flex-column ${
                  view === "mobile" ? "p-footer-logo" : ""
                } w-100`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image
                  src={"/images/common/alAqsaHead.png"}
                  alt={`Organization Logo`}
                  height="100px"
                  width="100px"
                />
                <p className={`${style.logo_title} text-capitalize text-white`}>
                  {t("al aqsa fund")}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <ul className={`${style.footer_list} text-center`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    مجموعة البنك الإسلامي للتنمية
                  </li>
                  <li
                    className={`${style.footer_list_address} ${style.footer_list_cursor_auto} `}
                  >
                    {`8111 شارع الملك خالد، حي النزلة اليمانية`}
                    <br />
                    {`الوحدة رقم 1
جدة 22332-2444`}
                    <br />
                    {`المملكة العربية السعودية`}
                    <br />
                  </li>
                  <li className={`${style.footer_list_cursor_auto} `}>
                    +التليفون: 636 1400 (12) 966
                  </li>
                  <li className={`${style.footer_list_cursor_auto}`}>
                    +الفاكس: 636 6871 (12) 966
                  </li>
                </ul>
              </Col>

              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <ul
                  className={`${style.footer_list} text-center text-capitalize`}
                >
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    {t("quick links")}
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/about");
                      }}
                      // href={"/about"}
                    >
                      {t("about")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/projects");
                      }}
                      // href={"/projects"}
                    >
                      {t("projects")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/success-stories");
                      }}
                      // href={"/success-stories"}
                    >
                      {t("success stories")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/publications");
                      }}
                      // href={"/publications"}
                    >
                      {t("publications")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/contact");
                      }}
                      // href={"/contact"}
                    >
                      {t("contact")}
                    </p>
                  </li>
                  {/* {fLinks && fLinks.length > 0
                  ? fLinks.map((data) => (
                      <li>
                        <a href={data.p}>{data.Title}</a>
                      </li>
                    ))
                  : ""} */}
                </ul>
              </Col>

              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <ul
                  className={`${style.footer_list} text-center text-capitalize`}
                >
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto}
                   `}
                  >
                    {t("other resources")}
                  </li>
                  <li>
                    <p className={`mb-0`} onClick={() => router.push("/terms")}>
                      {t("terms and conditions")}
                    </p>
                  </li>
                  <li>
                    <p
                      className={`mb-0`}
                      onClick={() => {
                        router.push("/policy");
                      }}
                    >
                      {t("privacy policy")}
                    </p>
                  </li>
                  <li>
                    <p
                      target="_blank"
                      href="https://www.google.com/maps?ll=21.475867,39.201798&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=13485734704728704443"
                    >
                      {t("sitemap")}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}
