import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { CONST } from "../../constant/index";
//css
import style from "./footer.module.sass";

export default function ResponsiveView({ view, logo }) {
  const router = useRouter();
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
          <div>
            <Row>
              <Col
                xs={24}
                sm={24}
                md={7}
                lg={5}
                xl={5}
                className={`d-flex justify-content-center align-items-center flex-column ${
                  view === "mobile" ? "p-footer-logo" : ""
                } `}
              >
                {/* <Image src={logo} alt="logo" width="200" height="116" /> */}
                <Image
                  src={"/images/common/FooterLogo.webp"}
                  alt={`Organization Logo`}
                  height="154px"
                  width="125px"
                />
                {/* <div
                className={`mt-4 d-flex justify-content-center w-100 flex-wrap px-2`}
              >
                {sMedia && sMedia.length > 0
                  ? sMedia.map(data => (
                      <span
                        className={`mx-2 ${styles.footer-list-cursor-pointer} `}
                        key={data.id}
                        onClick={() => {
                          window.open(data.Link);
                        }}
                      >
                        <img
                          src={
                            data.AttachmentFiles[0].ServerRelativeUrl
                              ? data.AttachmentFiles[0].ServerRelativeUrl
                              : ""
                          }
                          alt="Media Icons"
                          width="22px"
                          height="18px"
                        ></img>
                      </span>
                    ))
                  : ""}
              </div> */}
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
                    {`IsDB Group Staff Social Club`}
                    <br />
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
                  {/* <li className={`${style.footer_list_cursor_auto}`}>
                  Fax: +966 (12) 636 1264
                </li> */}
                </ul>
              </Col>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <ul className={`${style.footer_list}`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto}`}
                  >
                    Quick Links
                  </li>
                  <li>
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li>
                    <a /* href={data.Link} */>Projects</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>Success Stories</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>Publications</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>Contact</a>
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
              <Col xs={24} sm={24} md={5} lg={6} xl={6}>
                <ul className={`${style.footer_list} text-end`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto}
                   `}
                  >
                    مصادر أخرى
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
                </ul>
              </Col>

              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <ul className={`${style.footer_list} text-end`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    روابط سريعة
                  </li>
                  <li class>
                    <Link href={"/about"}>من نحن </Link>
                  </li>
                  <li>
                    <a /* href={data.Link} */>المشاريع</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>قصص النجاح</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>المنشورات</a>
                  </li>
                  <li>
                    <a /* href={data.Link} */>اتصل بنا</a>
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
              <Col xs={24} sm={24} md={6} lg={7} xl={7}>
                <ul className={`${style.footer_list} text-end`}>
                  <li
                    className={`${style.footer_list_header} ${style.footer_list_cursor_auto} `}
                  >
                    مجموعة البنك الإسلامي للتنمية
                  </li>
                  <li
                    className={`${style.footer_list_address} ${style.footer_list_cursor_auto} `}
                  >
                    {`IsDB Group Staff Social Club`}
                    <br />
                    {`8111 King Khalid St.Al Nuzlah Al yamania Dist.`}
                    <br />
                    {`Unit No.1, Jeddah 22332 - 2444 `}
                    <br />
                    {`Kingdom of Saudi Arabia`}
                    <br />
                  </li>
                  <li className={`${style.footer_list_cursor_auto} `}>
                    Tel: +966 (12) 636 1264
                  </li>
                  {/* <li className={`${style.footer_list_cursor_auto}`}>
                  Fax: +966 (12) 636 1264
                </li> */}
                </ul>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={7}
                lg={5}
                xl={5}
                className={`d-flex justify-content-center align-items-center flex-column ${
                  view === "mobile" ? "p-footer-logo" : ""
                } `}
              >
                <Image
                  src={"/images/common/FooterLogo.webp"}
                  alt={`Organization Logo`}
                  height="154px"
                  width="125px"
                />
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
}
