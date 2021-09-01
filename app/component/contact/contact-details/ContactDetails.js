import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
// Style
import style from "./index.module.sass";

export default function ContactDetails({}) {
  let router = useRouter();
  const { t } = useTranslation("common");
  let data = [
    {
      email: "tfd@isdb.org",
      fax: "+ 966-12-6366871",
      phone: "+ 966-12-6361400",
      website: "www.al-aqsa.com",
    },
  ];
  return (
    <div className={`${style.details_bg}`}>
      <div className={`${style.container} px-5`}>
        <Row className={`py-2`}>
          {Object.keys(data[0]).map((keys, index) => (
            <Col xs={0} sm={0} md={0} lg={6} xl={6} key={index}>
              <div
                className={`${style.detail_container} ${
                  index !== Object.keys(data[0]).length - 1 && "border-end"
                } d-flex justify-content-center align-items-center flex-column`}
              >
                <i
                  className={`${style.icon} ${
                    keys === "email" &&
                    `far fa-envelope faa-tada ${style.envelope_icon_stroke}`
                  } ${
                    keys === "website" &&
                    `fas fa-globe ${style.globe_icon_stroke}`
                  } ${
                    keys === "fax" &&
                    `fas fa-fax faa-float ${style.fax_icon_stroke}`
                  } ${
                    keys === "phone" &&
                    `fas fa-phone-alt faa-ring ${style.phone_icon_stroke}`
                  } fa-3x faa-slow animated mb-2`}
                ></i>
                <p
                  className={`text-center text-uppercase text-white ${style.key} mb-1`}
                >
                  {t(keys)}
                </p>
                <p
                  className={`text-center text-white text-uppercase ${style.value} mb-1`}
                >
                  {data[0][keys]}
                </p>
              </div>
            </Col>
          ))}
          {Object.keys(data[0]).map((keys, index) => (
            <Col xs={0} sm={0} md={12} lg={0} xl={0} key={index}>
              <div
                className={`${style.detail_container} ${
                  index === 0 && "border-end border-bottom"
                } ${index === 1 && "border-start border-bottom"} ${
                  index === 2 && "border-end border-top"
                } ${
                  index === 3 && "border-start border-top"
                } d-flex justify-content-center align-items-center flex-column`}
              >
                <i
                  className={`${style.icon} ${
                    keys === "email" &&
                    `far fa-envelope faa-tada ${style.envelope_icon_stroke}`
                  } ${
                    keys === "website" &&
                    `fas fa-globe ${style.globe_icon_stroke}`
                  } ${
                    keys === "fax" &&
                    `fas fa-fax faa-float ${style.fax_icon_stroke}`
                  } ${
                    keys === "phone" &&
                    `fas fa-phone-alt faa-ring ${style.phone_icon_stroke}`
                  } fa-3x faa-slow animated mb-2`}
                ></i>
                <p
                  className={`text-center text-uppercase text-white text-secondary ${style.key} mb-1`}
                >
                  {t(keys)}
                </p>
                <p
                  className={`text-center text-white text-uppercase ${style.value} mb-1`}
                >
                  {data[0][keys]}
                </p>
              </div>
            </Col>
          ))}
          {Object.keys(data[0]).map((keys, index) => (
            <Col xs={24} sm={24} md={0} lg={0} xl={0} key={index}>
              <div
                className={`${style.detail_container} ${
                  index !== Object.keys(data[0]).length - 1 && "border-bottom"
                } d-flex justify-content-center align-items-center flex-column`}
              >
                <i
                  className={`${style.icon} ${
                    keys === "email" &&
                    `far fa-envelope faa-tada ${style.envelope_icon_stroke}`
                  } ${
                    keys === "website" &&
                    `fas fa-globe ${style.globe_icon_stroke}`
                  } ${
                    keys === "fax" &&
                    `fas fa-fax faa-float ${style.fax_icon_stroke}`
                  } ${
                    keys === "phone" &&
                    `fas fa-phone-alt faa-ring ${style.phone_icon_stroke}`
                  } fa-3x faa-slow animated mb-2`}
                ></i>
                <p
                  className={`text-center text-uppercase text-white text-secondary ${style.key} mb-1`}
                >
                  {t(keys)}
                </p>
                <p
                  className={`text-center text-uppercase text-white ${style.value} mb-1`}
                >
                  {data[0][keys]}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
