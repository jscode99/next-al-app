import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Image from "next/image";
//Antd
import { Row, Col } from "antd";
//Style
import style from "./index.module.sass";

export default function IntroStructure() {
  let router = useRouter();
  const { t } = useTranslation("common");

  const [height, setHeight] = useState(0);
  useEffect(() => {
    let element = document.getElementById("image-height");
    setHeight(element.offsetHeight);
  }, []);
  return (
    <div className={`${style.container}`}>
      <Row
        className={`d-flex justify-content-center align-items-center pt-4 pb-5`}
      >
        {router.locale === "en" ? (
          <>
            <Col>
              <div id="image-height">
                <Image
                  src={"/images/about/Governance/gs.webp"}
                  alt={`Governance Structure`}
                  // layout={`fill`}
                  height="323px"
                  width="911px"
                />
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col>
              <div id="image-height">
                <Image
                  src={"/images/about/Governance/gs.webp"}
                  alt={`Governance Structure`}
                  // layout={`fill`}
                  height="323px"
                  width="911px"
                />
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}
