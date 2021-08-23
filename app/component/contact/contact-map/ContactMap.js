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
        <Row className={`pt-5`}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className={`mt-5`}>
            <div className={`${style.container}`}>
              <h3
                className={`${style.map_title} ${
                  router.locale === "en" ? "" : "text-end"
                } mb-5`}
              >
                {t("Head Quarters")}
              </h3>
              <div className={`${style.map_container} shadow mb-5`}>
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
