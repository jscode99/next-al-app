import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import { useTranslation } from "next-i18next";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { CONST } from "../../constant/index";
//css
import style from "./footer.module.sass";

export default function ResponsiveView({ view, logo }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  // const [fLinks, setFooterLink] = useState(null);
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
                  <li>
                    <Link href={"/about"}>{t("about")}</Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>{t("projects")}</Link>
                  </li>
                  <li>
                    <Link href={"/success-stories"}>
                      {t("success stories")}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/publications"}>{t("publications")}</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>{t("contact")}</Link>
                  </li>
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
                    <a /* href={data.Link} */>Terms and Conditions</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>Privacy Policy</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>Sitemap</a>
                  </li>
                  {/* {otResource && otResource.length > 0
                  ? otResource.map((data) => (
                      <li>
                        <a href={data.Link} target="_blank" rel="noreferrer">
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
                    <a /* href={data.Link} */>{t("terms and conditions")}</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>{t("privacy policy")}</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>{t("sitemap")}</a>
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
                    <Link href={"/about"}>{t("about")}</Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>{t("projects")}</Link>
                  </li>
                  <li>
                    <Link href={"/success-stories"}>
                      {t("success stories")}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/publications"}>{t("publications")}</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>{t("contact")}</Link>
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
                    <Link href={"/about"}>{t("about")}</Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>{t("projects")}</Link>
                  </li>
                  <li>
                    <Link href={"/success-stories"}>
                      {t("success stories")}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/publications"}>{t("publications")}</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>{t("contact")}</Link>
                  </li>
                  {/* {fLinks && fLinks.length > 0
                  ? fLinks.map((data) => (
                      <li>
                        <a href={data.Link}>{data.Title}</a>
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
                    <a /* href={data.Link} */>{t("terms and conditions")}</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>{t("privacy policy")}</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>{t("sitemap")}</a>
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
