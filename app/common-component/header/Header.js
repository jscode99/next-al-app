/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { useTranslation } from "next-i18next";
import { Row, Col, Layout, Menu, Dropdown, Button, Drawer } from "antd";
import { DownOutlined } from "@ant-design/icons";
import style from "./index.module.sass";
//Context API
import AppContext from "../../AppContext";
import { mapTitleToRoutePath } from "../../services/projectTitle";

const { Header } = Layout;
const { SubMenu } = Menu;

export default function AppHeader({ pageName, projectTitle }) {
  const [routePath, setRoutePath] = useState([]);
  const [visible, setVisible] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // console.log("projectTitle", projectTitle);
  const { t } = useTranslation("common");
  // let { appContext } = useContext(AppContext);
  const router = useRouter();
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

  const handleScroll = () => {
    // console.log("WINDOWWW", window.pageYOffset);
    if (window.pageYOffset > 140) {
      if (!navBar) {
        setNavBar(true);
      }
    } else {
      if (navBar) {
        setNavBar(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [navBar]);

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

  const getLanguageDataFromCode = (code) => {
    return language.find((data) => data.code === code);
  };

  const navProject = (
    <Menu
      className={`${router.locale === "en" ? style.dd_list : style.dd_list_ar}`}
    >
      {projectTitle &&
        projectTitle
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((data) => (
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
    <Menu
      className={`${router.locale === "en" ? style.dd_list : style.dd_list_ar}`}
    >
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
    <Menu
      className={`${router.locale === "en" ? style.dd_list : style.dd_list_ar}`}
    >
      {language.map((value, index) => (
        <Menu.Item key={index}>
          <Link
            href={{
              pathname: `/${router.pathname.split("/")[1]}`,
              // query: router.query.title ? { title: router.query.title } : null,
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
  // console.log(router, router.locale, "router.locale", router.locale);
  return (
    <Header
      className={`${style.app_header_container} w-100 p-0 top-0 ${
        navBar && "position-fixed shadow"
      }`}
      style={{ backgroundColor: navBar ? "#fff" : "#00000000" }}
    >
      <div className={`${style.container}`}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div
              className={`${style.app_header_language_section} d-flex ${
                router.locale === "en"
                  ? "justify-content-end"
                  : "justify-content-start"
              } align-items-center ${navBar && "bg-white"}`}
            >
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button
                  type="text"
                  className={`${style.language_switch_button} ${
                    navBar ? "" : "text-white"
                  } d-flex justify-content-between align-items-center`}
                >
                  {/* <Image
                  src={getLanguageDataFromCode(router.locale).flag}
                  height="20"
                  width="20"
                  alt="Flag Image"
                /> */}
                  <span
                    className={`${style.language_text} text-capitalize`}
                    style={{
                      fontFamily:
                        router.locale === "ar"
                          ? "Noto Kufi Arabic, sans-serif"
                          : "",
                    }}
                  >
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
                            className={`${
                              router.locale === "en"
                                ? style.app_header_logo_title
                                : style.app_header_logo_title_ar
                            } text-capitalize m-0`}
                          >
                            {t("al aqsa fund")}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={18} xl={18}>
                      <div
                        className={`${
                          router.locale === "en"
                            ? style.app_header_nav_section
                            : style.app_header_nav_section_ar
                        } d-flex justify-content-end align-items-center`}
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
                        className={`${
                          router.locale === "en"
                            ? style.app_header_nav_section
                            : style.app_header_nav_section_ar
                        } d-flex justify-content-start align-items-center`}
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
                        className={`${style.app_header_nav_section} d-flex justify-content-end align-items-center`}
                      >
                        <Button
                          type="text"
                          className={`${style.menu_button} d-flex justify-content-between align-items-center`}
                          onClick={showDrawer}
                        >
                          <i className="fas fa-bars"></i>
                        </Button>
                        <Drawer
                          title={t("al aqsa fund")}
                          className={`text-capitalize`}
                          placement="left"
                          onClose={onClose}
                          visible={visible}
                        >
                          <Menu mode="inline">
                            {routePath.reverse().map((route, index) =>
                              route.navigation === false ? (
                                <Menu.Item key={index}>
                                  <Link href={route.path}>{t(route.name)}</Link>
                                </Menu.Item>
                              ) : (
                                <SubMenu key={index} title={route.name}>
                                  {route.name === "about" ? nav : navProject}
                                </SubMenu>
                              ),
                            )}
                          </Menu>
                        </Drawer>
                      </div> */}
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
                            className={`${
                              router.locale === "en"
                                ? style.app_header_logo_title
                                : style.app_header_logo_title_ar
                            } text-capitalize m-0`}
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
                          className={`${
                            router.locale === "en"
                              ? style.app_header_logo_title
                              : style.app_header_logo_title_ar
                          } text-capitalize m-0`}
                        >
                          {t("al aqsa fund")}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={8} sm={8} md={14} lg={18} xl={18}>
                    <div
                      className={`${
                        router.locale === "en"
                          ? style.app_header_nav_section
                          : style.app_header_nav_section_ar
                      } d-flex justify-content-end align-items-center`}
                    >
                      <Button
                        type="text"
                        className={`${style.menu_button} d-flex justify-content-between align-items-center`}
                        onClick={showDrawer}
                      >
                        <i className="fas fa-bars"></i>
                      </Button>
                      <Drawer
                        title={t("al aqsa fund")}
                        className={`text-capitalize`}
                        placement="right"
                        onClose={onClose}
                        closable={false}
                        visible={visible}
                      >
                        <Menu
                          mode="inline"
                          className={`${
                            router.locale === "en"
                              ? style.dd_list
                              : style.dd_list_ar
                          }`}
                        >
                          {/* route.navigation === false ? ( */}
                          {routePath.map((route, index) => (
                            <Menu.Item key={index}>
                              <Link href={route.path}>
                                <p
                                  className={`${
                                    route.name.toLowerCase() === pageName &&
                                    router.locale === "en"
                                      ? style.mobile_selected_menu
                                      : style.mobile_selected_menu_ar
                                  } m-0 ps-2`}
                                >
                                  {t(route.name)}
                                </p>
                              </Link>
                              {/* <i className="ant-menu-submenu-arrow"></i> */}
                            </Menu.Item>
                          ))}
                          {/* ) : (
                              <SubMenu
                                icon={false}
                                key={index}
                                title={
                                  <p
                                    onClick={() => {
                                      router.push(route.path);
                                    }}
                                    className={`m-0`}
                                  >
                                    {route.name}
                                  </p>
                                }
                              >
                                {route.name === "about" ? nav : navProject}
                              </SubMenu>
                            ), */}
                        </Menu>
                      </Drawer>
                    </div>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs={0} sm={0} md={0} lg={18} xl={18}>
                    <div
                      className={`${
                        router.locale === "en"
                          ? style.app_header_nav_section
                          : style.app_header_nav_section_ar
                      } d-flex justify-content-start align-items-center`}
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
                      className={`${
                        router.locale === "en"
                          ? style.app_header_nav_section
                          : style.app_header_nav_section_ar
                      } d-flex justify-content-start align-items-center`}
                    >
                      <Button
                        type="text"
                        className={`${style.menu_button} d-flex justify-content-between align-items-center`}
                        onClick={showDrawer}
                      >
                        <i className="fas fa-bars"></i>
                      </Button>
                      <Drawer
                        title={t("al aqsa fund")}
                        className={`text-end text-capitalize`}
                        placement="left"
                        onClose={onClose}
                        closable={false}
                        visible={visible}
                      >
                        <Menu
                          mode="inline"
                          className={`${
                            router.locale === "en"
                              ? style.dd_list
                              : style.dd_list_ar
                          }`}
                        >
                          {new Array(...routePath)
                            .reverse()
                            .map((route, index) => (
                              <Menu.Item key={index}>
                                <Link href={route.path}>
                                  <p
                                    className={`${
                                      route.name.toLowerCase() === pageName &&
                                      router.locale === "en"
                                        ? style.mobile_selected_menu
                                        : style.mobile_selected_menu_ar
                                    } m-0 text-end pe-2`}
                                  >
                                    {t(route.name)}
                                  </p>
                                </Link>
                                {/* <i className="ant-menu-submenu-arrow"></i> */}
                              </Menu.Item>
                            ))}
                        </Menu>
                      </Drawer>
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
                          className={`${
                            router.locale === "en"
                              ? style.app_header_logo_title
                              : style.app_header_logo_title_ar
                          } text-capitalize m-0`}
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
