import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
//Common Component
import AppSlider from "../../../common-component/appSlider/AppSlider";
//Styles
import styles from "./index.module.sass";

export default function SuccessStoriesDetails({ storiesProps }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const base_url = process.env.BASE_URL;
  return (
    <>
      <Row>
        {router.locale === "en" ? (
          <>
            <Col xs={0} sm={0} md={0} lg={10} xl={12}>
              <Row className={`my-4`}>
                <Col span={6} className={`${styles.stories_amount_heading}`}>
                  Total Approved
                </Col>
                <Col span={1} className={`${styles.stories_amount_heading}`}>
                  {`:`}
                </Col>
                <Col span={17} className={`${styles.stories_amount}`}>
                  ${storiesProps.TotalApproved}
                </Col>
              </Row>
              <Row className={`mb-5`}>
                <Col span={6} className={`${styles.stories_amount_heading}`}>
                  Source of Fund
                </Col>
                <Col span={1} className={`${styles.stories_amount_heading}`}>
                  {`:`}
                </Col>
                <Col span={17} className={`${styles.stories_amount}`}>
                  {storiesProps.FundSource}
                </Col>
              </Row>
              <p className={`${styles.stories_details_des} pr-4`}>
                {storiesProps.Overview}
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={14}
              xl={12}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div className={`${styles.stories_details_image_box} mb-5`}>
                <AppSlider
                  showIndicators={false}
                  autoPlay={true}
                  setAutoPlay={() => {}}
                  stopOnHover={false}
                >
                  {storiesProps &&
                    storiesProps.Image.map(imageData => (
                      <>
                        <Image
                          src={base_url + imageData.url}
                          alt="ssc"
                          width="500"
                          height="418"
                          className={`${styles.stories_details_image}`}
                        />
                      </>
                    ))}
                </AppSlider>
              </div>
              <div className={`d-flex ${styles.thumbnail_container}`}>
                {storiesProps &&
                  storiesProps.Image.slice(0, 4).map(imageData => (
                    <>
                      <div className={`mx-3 `}>
                        <Image
                          src={base_url + imageData.url}
                          alt="ssc"
                          width="100"
                          height="80"
                        />
                      </div>
                    </>
                  ))}
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={14}
              xl={12}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div className={`${styles.stories_details_image_box} mb-5`}>
                <AppSlider
                  showIndicators={false}
                  autoPlay={true}
                  setAutoPlay={() => {}}
                  stopOnHover={false}
                >
                  {storiesProps &&
                    storiesProps.Image.map(imageData => (
                      <>
                        <Image
                          src={base_url + imageData.url}
                          alt="ssc"
                          width="500"
                          height="418"
                          className={`${styles.stories_details_image}`}
                        />
                      </>
                    ))}
                </AppSlider>
              </div>
              <div className={`d-flex ${styles.thumbnail_container}`}>
                {storiesProps &&
                  storiesProps.Image.slice(0, 4).map(imageData => (
                    <>
                      <div className={`mx-3 `}>
                        <Image
                          src={base_url + imageData.url}
                          alt="ssc"
                          width="100"
                          height="80"
                        />
                      </div>
                    </>
                  ))}
              </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={10} xl={12}>
              <Row className={`my-4`}>
                <Col span={16} className={`${styles.stories_amount} text-end`}>
                  ${storiesProps.TotalApproved}
                </Col>
                <Col span={1} className={`${styles.stories_amount_heading}`}>
                  {`:`}
                </Col>
                <Col span={7} className={`${styles.stories_amount_heading}`}>
                  {t("Total Approved")}
                </Col>
              </Row>
              <Row className={`mb-5`}>
                <Col span={16} className={`${styles.stories_amount} text-end`}>
                  {storiesProps.FundSource}
                </Col>
                <Col span={1} className={`${styles.stories_amount_heading}`}>
                  {`:`}
                </Col>
                <Col span={7} className={`${styles.stories_amount_heading}`}>
                  {t("Source of Fund")}
                </Col>
              </Row>
              <p className={`${styles.stories_details_des} text-justify pr-4`}>
                {storiesProps.Overview}
              </p>
            </Col>
          </>
        )}
      </Row>
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <p className={`${styles.stories_details_des}  mt-5 text-justify`}>
            {storiesProps.Description}
          </p>
        </Col>
      </Row>
    </>
  );
}
