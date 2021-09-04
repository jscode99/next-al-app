import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Collapse, Space } from "antd";
//Styles
import style from "./index.module.sass";

const { Panel } = Collapse;

export default function AppCollapsible({ data, color }) {
  const [bulletColor, setBulletColor] = useState("");
  console.log("data", data);
  let router = useRouter();

  useEffect(() => {
    setBulletColor(data.color);
  }, [data]);
  const Icon = () => {
    if (data.url) {
      return router.locale === "en" ? (
        <span className={`${style.pannel_container}`}>
          <div
            className={`d-flex justify-content-center align-items-center w-100`}
          >
            <div
              className={`${data.iconBg} d-flex justify-content-center align-items-center rounded-circle`}
              style={{ width: "32px", height: "32px" }}
            >
              <Image src={data.url} alt={`Icon`} height="12px" width="12px" />
            </div>
            <h6
              className={`${style.collapsible_title} text-capitalize ${
                router.locale === "en" ? `text-start` : `text-end`
              } fw-bold m-2 ms-2`}
            >
              {data.title}
            </h6>
          </div>
        </span>
      ) : (
        <span className={`${style.pannel_container}`}>
          <div
            className={`d-flex justify-content-center align-items-center w-100`}
          >
            <h6
              className={`${style.collapsible_title} text-capitalize ${
                router.locale === "en" ? `text-start` : `text-end`
              } fw-bold m-2 ms-2`}
            >
              {data.title}
            </h6>
            <div
              className={`${data.iconBg} d-flex justify-content-center align-items-center rounded-circle`}
              style={{ width: "32px", height: "32px" }}
            >
              <Image src={data.url} alt={`Icon`} height="12px" width="12px" />
            </div>
          </div>
        </span>
      );
    } else {
      return (
        <div
          className={`${style.collapsible_title} text-capitalize fw-bold ${
            router.locale === "en" ? `text-start` : `text-end`
          }`}
        >
          {data.title}
        </div>
      );
    }
  };

  return (
    <>
      <Space direction="vertical" className={`w-100`}>
        <Collapse
          collapsible="header"
          accordion
          // defaultActiveKey={["1"]}
          expandIconPosition={router.locale === "en" ? `right` : `left`}
        >
          <Panel header={Icon()} key="1">
            {data.des.map(data => (
              <>
                <div
                  className={`d-flex ${
                    router.locale === "en"
                      ? `justify-content-start`
                      : `justify-content-end`
                  } align-items-start`}
                >
                  {router.locale === "en" ? (
                    <>
                      <span
                        className={`${style.role_bullet_point} mx-2`}
                        style={{ color: `${bulletColor}` }}
                      >
                        &#8226;
                      </span>

                      <p className={`${style.collapsible_des} mt-2 pt-1 h6`}>
                        {data.title}
                      </p>
                    </>
                  ) : (
                    <>
                      <p
                        className={`${style.collapsible_des} mt-2 pt-1 h6 text-end`}
                      >
                        {data.title}
                      </p>

                      <span
                        className={`${style.role_bullet_point} mx-2`}
                        style={{ color: `${bulletColor}` }}
                      >
                        &#8226;
                      </span>
                    </>
                  )}
                </div>
              </>
            ))}
          </Panel>
        </Collapse>
      </Space>
    </>
  );
}
