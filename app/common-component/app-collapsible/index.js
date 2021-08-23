import { useRouter } from "next/router";
import Image from "next/image";
import { Collapse, Space } from "antd";
//Styles
import style from "./index.module.sass";

const { Panel } = Collapse;

export default function AppCollapsible({ data, color }) {
  let router = useRouter();
  const Icon = () => {
    if (data.url) {
      return router.locale === "en" ? (
        <div className={`d-flex aligin-items-center`}>
          <div
            className={`${data.iconBg} d-flex justify-content-center align-items-center rounded-circle`}
            style={{ width: "32px", height: "32px" }}
          >
            <Image src={data.url} alt={`Icon`} height="12px" width="12px" />
          </div>
          <h6 className={`fw-bold m-2 ms-2`}>{data.title}</h6>
        </div>
      ) : (
        <div className={`d-flex justify-content-end aligin-items-center`}>
          <h6 className={`fw-bold m-2 ms-2`}>{data.title}</h6>
          <div
            className={`${data.iconBg} d-flex justify-content-center align-items-center rounded-circle`}
            style={{ width: "32px", height: "32px" }}
          >
            <Image src={data.url} alt={`Icon`} height="12px" width="12px" />
          </div>
        </div>
      );
    } else {
      return (
        <h6
          className={`fw-bold ${
            router.locale === "en" ? `text-start` : `text-end`
          }`}
        >
          {data.title}
        </h6>
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
                        style={{ color: `${color}` }}
                      >
                        &#8226;
                      </span>

                      <p className={`mt-2 pt-1 h6`}>{data.des}</p>
                    </>
                  ) : (
                    <>
                      <p className={`mt-2 pt-1 h6 text-end`}>{data.des}</p>

                      <span
                        className={`${style.role_bullet_point} mx-2`}
                        style={{ color: `${color}` }}
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
