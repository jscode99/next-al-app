import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
//component
import ResponsiveView from "./ResponsiveView";
//css
import style from "./footer.module.sass";
import router from "next/router";

export default function Footer({ logo }) {
  const router = useRouter();
  return (
    <>
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <ResponsiveView view={"desktop"} logo={logo} />
        </Col>
        <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <ResponsiveView view={"tablet"} logo={logo} />
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <ResponsiveView view={"mobile"} logo={logo} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div
            className={`${style.rights_reserved} d-flex justify-content-center align-items-center`}
          >
            <div>
              {router.locale === "en"
                ? `© 2021 IsDB Group. All rights reserved.`
                : `© جميع الحقوق محفوظة . مجموعة البنك الإسلامي  للتنمية 2021`}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
