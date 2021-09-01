import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Col, Row } from "antd";
import GoogleMapReact from "google-map-react";
//Context API
import AppContext from "../../../AppContext";
// Style
import style from "./index.module.sass";

export default function ContactMap() {
  const { t } = useTranslation("common");
  let router = useRouter();
  const location = {
    address: "",
    lat: 21.475867102388687,
    lng: 39.201798383801005,
  };
  const LocationPin = ({ text }) => (
    <div className={``}>
      <i className="fa fa-map-marker fa-4x text-danger" aria-hidden="true"></i>
      <p className={``}>{text}</p>
    </div>
  );
  return (
    <>
      <div className={`${style.bg}`}>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div className={`${style.container} px-5`}>
              <h3
                className={`${style.map_title} ${
                  router.locale === "en" ? "" : "text-end"
                } my-3`}
              >
                {t("isdb hq")}
              </h3>
              <div
                className={`${style.map_container} d-flex justify-content-center align-items-center mb-3`}
              >
                <span
                  className={`${style.map_container_span} d-flex justify-content-center align-items-center`}
                >
                  <div className={`${style.map_inner_container} w-100 h-100`}>
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: `AIzaSyDSLbXVrXqjCnTtNWh1BbrH-B04EFJdqNg`,
                      }}
                      defaultCenter={location}
                      defaultZoom={17}
                    >
                      <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                      />
                    </GoogleMapReact>
                  </div>
                </span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div className={`${style.container} px-5`}>
              <h3
                className={`${style.map_title} ${
                  router.locale === "en" ? "" : "text-end"
                } my-3`}
              >
                {t("isdb hq")}
              </h3>
              <div
                className={`${style.map_container} d-flex justify-content-center align-items-center mb-3`}
              >
                <span
                  className={`${style.map_container_span} d-flex justify-content-center align-items-center`}
                >
                  <div className={`${style.map_inner_container} w-100 h-100`}>
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: `AIzaSyDSLbXVrXqjCnTtNWh1BbrH-B04EFJdqNg`,
                      }}
                      defaultCenter={location}
                      defaultZoom={17}
                    >
                      <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                      />
                    </GoogleMapReact>
                  </div>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
