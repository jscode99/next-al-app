/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { useTranslation } from "next-i18next";
import { Row, Col, Layout, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import style from "./index.module.sass";
//Context API
import AppContext from "../../AppContext";
import { mapTitleToRoutePath } from "../../services/projectTitle";

const { Header } = Layout;

export default function AppHeader({ pageName, projectTitle }) {
  console.log("projectTitle", projectTitle);
  const { t } = useTranslation("common");
  // let { appContext } = useContext(AppContext);
  const router = useRouter();
  const [routePath, setRoutePath] = useState([]);
  const language = [
    {
      flag: "/images/language-flags/united-kingdom.webp",
      language: t("english"),
      code: "en",
    },
    {
      flag: "/images/language-flags/saudi-arabia.webp",
      language: t("arabic"),
      code: "ar",
    },
  ];

  useEffect(() => {
    const ROUTE_PATHS = [
      { name: "home", path: "/", navigation: false },
      { name: "about", path: "/about", navigation: true },
      { name: "contributions", path: "/contributions", navigation: false },
      { name: "projects", path: "/projects", navigation: true },
      { name: "success stories", path: "/success-stories", navigation: false },
      { name: "publications", path: "/publications", navigation: false },
      { name: "contact", path: "/contact", navigation: false },
    ];
    if (router.locale === "en") setRoutePath(ROUTE_PATHS);
    else setRoutePath(ROUTE_PATHS.reverse());
  }, [router.locale]);

  const getLanguageDataFromCode = code => {
    return language.find(data => data.code === code);
  };

  const navProject = (
    <Menu className={`${style.dd_list}`}>
      {projectTitle.map(data => (
        <Menu.Item key={data.id}>
          {/* <Link href={`/projects/${mapTitleToRoutePath(data.title)}`}> */}
          <div
            onClick={() => {
              router.push(`/projects/${mapTitleToRoutePath(data.title)}`);
            }}
            className={`d-flex ${
              router.locale === "en"
                ? `justify-content-start`
                : `justify-content-end`
            } align-items-center py-2`}
          >
            <p className={`m-0`}>{data.title}</p>
          </div>
          {/* </Link> */}
        </Menu.Item>
      ))}
    </Menu>
  );

  const nav = (
    <Menu className={`${style.dd_list}`}>
      <Menu.Item>
        <Link href="/about/governance-structure">
          <div
            className={`d-flex ${
              router.locale === "en"
                ? `justify-content-start`
                : `justify-content-end`
            } align-items-center py-2`}
          >
            <p className={`m-0 text-capitalize`}>{t("governance structure")}</p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about/members">
          <div
            className={`d-flex ${
              router.locale === "en"
                ? `justify-content-start`
                : `justify-content-end`
            } align-items-center py-2`}
          >
            <p className={`m-0 text-capitalize`}>{t("members")}</p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about/approval-process-and-selection-criteria">
          <div
            className={`d-flex ${
              router.locale === "en"
                ? `justify-content-start`
                : `justify-content-end`
            } align-items-center py-2`}
          >
            <p className={`m-0 text-capitalize`}>
              {t("approval process and selection criteria")}
            </p>
          </div>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu className={`${style.dd_list}`}>
      {language.map((value, index) => (
        <Menu.Item key={index}>
          <Link
            href={{
              pathname: router.pathname,
              query: router.query.title ? { title: router.query.title } : null,
            }}
            locale={value.code === "en" ? "en" : "ar"}
          >
            <div className={`d-flex justify-content-around align-items-center`}>
              {/* <Image src={value.flag} height="20" width="20" alt="Flag Image" /> */}
              <span className={`${style.language_text} text-capitalize`}>
                {value.language}
              </span>
            </div>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Header className={`${style.app_header_container} w-100 p-0 top-0`}>
      <div className={`${style.container}`}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div
              className={`${style.app_header_language_section} d-flex ${
                router.locale === "en"
                  ? "justify-content-end"
                  : "justify-content-start"
              } align-items-center`}
            >
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button
                  type="text"
                  className={`${style.language_switch_button} text-white d-flex justify-content-between align-items-center`}
                >
                  {/* <Image
                  src={getLanguageDataFromCode(router.locale).flag}
                  height="20"
                  width="20"
                  alt="Flag Image"
                /> */}
                  <span className={`${style.language_text} text-capitalize`}>
                    {t(getLanguageDataFromCode(router.locale).language)}
                  </span>
                  <DownOutlined className={`${style.language_dd_icon}`} />
                </Button>
              </Dropdown>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <div className={`bg-white ${style.full_head}`}>
              <div className={`${style.app_header_nav_container} px-2`}>
                {router.locale === "en" ? (
                  <Row>
                    <Col xs={16} sm={16} md={10} lg={6} xl={6}>
                      <div
                        className={`d-flex justify-content-center align-items-center h-100`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push("/");
                        }}
                      >
                        <Image
                          src={"/images/common/alAqsaHead.png"}
                          alt={`Organization Logo`}
                          height="80px"
                          width="80px"
                        />
                        <div className={`d-flex align-items-center`}>
                          <p
                            className={`${style.app_header_logo_title} text-capitalize m-0`}
                          >
                            {t("al aqsa fund")}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={18} xl={18}>
                      <div
                        className={`${style.app_header_nav_section} d-flex justify-content-end align-items-center`}
                      >
                        {routePath.map((route, index) => (
                          <Dropdown
                            key={index}
                            overlay={route.name === "about" ? nav : navProject}
                            placement={"bottomLeft"}
                            disabled={route.navigation ? false : true}
                          >
                            <p
                              className={`${
                                route.name.toLowerCase() === pageName &&
                                style.selected
                              } text-capitalize`}
                              onClick={() => {
                                router.push(route.path);
                              }}
                            >
                              {route.name}
                              {route.navigation && (
                                <DownOutlined
                                  className={`${style.language_dd_icon} ps-1`}
                                  style={{ fontSize: "10px" }}
                                />
                              )}
                              <hr className={`${style.app_nav_list_hr}`} />
                            </p>
                          </Dropdown>
                        ))}
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col xs={0} sm={0} md={0} lg={18} xl={18}>
                      <div
                        className={`${style.app_header_nav_section} d-flex justify-content-start align-items-center`}
                      >
                        {routePath.map((route, index) => (
                          <Dropdown
                            key={index}
                            overlay={route.name === "about" ? nav : navProject}
                            placement={"bottomRight"}
                            disabled={route.navigation ? false : true}
                          >
                            <p
                              className={`${
                                route.name.toLowerCase() === pageName &&
                                style.selected
                              } text-capitalize`}
                              onClick={() => {
                                router.push(route.path);
                              }}
                            >
                              {t(route.name)}
                              {route.navigation && (
                                <DownOutlined
                                  className={`${style.language_dd_icon} ps-1`}
                                  style={{ fontSize: "10px" }}
                                />
                              )}
                              <hr className={`${style.app_nav_list_hr}`} />
                            </p>
                          </Dropdown>
                        ))}
                      </div>
                    </Col>
                    <Col xs={8} sm={8} md={14} lg={0} xl={0}>
                      {/* <div
                      className={`${style.app_header_nav_section} d-flex justify-content-start align-items-center`}
                    >
                      {routePath.map((route, index) => (
                        <Dropdown
                          key={index}
                          overlay={route.name === "About" ? nav : navProject}
                          placement={"bottomRight"}
                          disabled={route.navigation ? false : true}
                        >
                          <p
                            className={`${
                              route.name.toLowerCase() === pageName &&
                              style.selected
                            }`}
                            onClick={() => {
                              router.push(route.path);
                            }}
                          >
                            {t(route.name)}
                            {route.navigation && (
                              <DownOutlined
                                className={`${style.language_dd_icon} ps-1`}
                                style={{ fontSize: "10px" }}
                              />
                            )}
                            <hr className={`${style.app_nav_list_hr}`} />
                          </p>
                        </Dropdown>
                      ))}
                    </div> */}
                    </Col>
                    <Col xs={16} sm={16} md={10} lg={6} xl={6}>
                      <div
                        className={`d-flex justify-content-center align-items-center h-100`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          router.push("/");
                        }}
                      >
                        <div className={`d-flex align-items-center`}>
                          <p
                            className={`${style.app_header_logo_title} text-capitalize m-0`}
                          >
                            {t("al aqsa fund")}
                          </p>
                        </div>
                        <Image
                          src={"/images/common/alAqsaHead.png"}
                          alt={`Organization Logo`}
                          height="80px"
                          width="80px"
                        />
                      </div>
                    </Col>
                  </Row>
                )}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={`${style.app_header_nav_container} px-2`}>
              {router.locale === "en" ? (
                <Row>
                  <Col xs={16} sm={16} md={10} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      <Image
                        src={"/images/common/alAqsaHead.png"}
                        alt={`Organization Logo`}
                        height="80px"
                        width="80px"
                      />
                      <div className={`d-flex align-items-center`}>
                        <p
                          className={`${style.app_header_logo_title} text-capitalize m-0`}
                        >
                          {t("al aqsa fund")}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={8} sm={8} md={14} lg={18} xl={18}>
                    <div
                      className={`${style.app_header_nav_section} d-flex justify-content-end align-items-center`}
                    >
                      <Button
                        type="text"
                        className={`${style.menu_button} d-flex justify-content-between align-items-center`}
                      >
                        <i className="fas fa-bars"></i>
                      </Button>
                      {/* {routePath.map((route, index) => (
                        <Dropdown
                          key={index}
                          overlay={route.name === "About" ? nav : navProject}
                          placement={"bottomLeft"}
                          disabled={route.navigation ? false : true}
                        >
                          <p
                            className={`${
                              route.name.toLowerCase() === pageName &&
                              style.selected
                            }`}
                            onClick={() => {
                              router.push(route.path);
                            }}
                          >
                            {route.name}
                            {route.navigation && (
                              <DownOutlined
                                className={`${style.language_dd_icon} ps-1`}
                                style={{ fontSize: "10px" }}
                              />
                            )}
                            <hr className={`${style.app_nav_list_hr}`} />
                          </p>
                        </Dropdown>
                      ))} */}
                    </div>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs={0} sm={0} md={0} lg={18} xl={18}>
                    <div
                      className={`${style.app_header_nav_section} d-flex justify-content-start align-items-center`}
                    >
                      {routePath.map((route, index) => (
                        <Dropdown
                          key={index}
                          overlay={route.name === "about" ? nav : navProject}
                          placement={"bottomRight"}
                          disabled={route.navigation ? false : true}
                        >
                          <p
                            className={`${
                              route.name.toLowerCase() === pageName &&
                              style.selected
                            } text-capitalize`}
                            onClick={() => {
                              router.push(route.path);
                            }}
                          >
                            {t(route.name)}
                            {route.navigation && (
                              <DownOutlined
                                className={`${style.language_dd_icon} ps-1`}
                                style={{ fontSize: "10px" }}
                              />
                            )}
                            <hr className={`${style.app_nav_list_hr}`} />
                          </p>
                        </Dropdown>
                      ))}
                    </div>
                  </Col>
                  <Col xs={8} sm={8} md={14} lg={0} xl={0}>
                    <div
                      className={`${style.app_header_nav_section} d-flex justify-content-start align-items-center`}
                    >
                      <Button
                        type="text"
                        className={`${style.menu_button} d-flex justify-content-between align-items-center`}
                      >
                        <i className="fas fa-bars"></i>
                      </Button>
                      {/* {routePath.map((route, index) => (
                        <Dropdown
                          key={index}
                          overlay={route.name === "About" ? nav : navProject}
                          placement={"bottomRight"}
                          disabled={route.navigation ? false : true}
                        >
                          <p
                            className={`${
                              route.name.toLowerCase() === pageName &&
                              style.selected
                            }`}
                            onClick={() => {
                              router.push(route.path);
                            }}
                          >
                            {t(route.name)}
                            {route.navigation && (
                              <DownOutlined
                                className={`${style.language_dd_icon} ps-1`}
                                style={{ fontSize: "10px" }}
                              />
                            )}
                            <hr className={`${style.app_nav_list_hr}`} />
                          </p>
                        </Dropdown>
                      ))} */}
                    </div>
                  </Col>
                  <Col xs={16} sm={16} md={10} lg={6} xl={6}>
                    <div
                      className={`d-flex justify-content-center align-items-center h-100`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      <div className={`d-flex align-items-center`}>
                        <p
                          className={`${style.app_header_logo_title} text-capitalize m-0`}
                        >
                          {t("al aqsa fund")}
                        </p>
                      </div>
                      <Image
                        src={"/images/common/alAqsaHead.png"}
                        alt={`Organization Logo`}
                        height="80px"
                        width="80px"
                      />
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Header>
  );
}
