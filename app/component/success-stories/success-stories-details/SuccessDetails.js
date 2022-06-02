import Image from "next/image";
import isImage from "is-image";
import ImageViewer from "react-simple-image-viewer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ReactPlayer from "react-player";
//Antd
import { Row, Col, Modal } from "antd";
//Common Component
import AppSlider from "../../../common-component/appSlider/AppSlider";
//Styles
import styles from "./index.module.sass";

export default function SuccessStoriesDetails({ successMedia, storiesProps }) {
  const [media, setMedia] = useState(null);
  const [galleryView, setGalleryView] = useState(false);
  const [viewUrl, setViewUrl] = useState(null);
  const { t } = useTranslation("common");
  const router = useRouter();
  const base_url = process.env.BASE_URL;
  useEffect(() => {
    if (
      successMedia &&
      successMedia.length > 0 &&
      storiesProps &&
      storiesProps.id &&
      Object.keys(storiesProps).length > 0
    ) {
      let media = successMedia.filter(
        (value) => value.successID.toString() === storiesProps.id.toString()
      );
      let medias = media.map((value) => {
        return {
          multimedia: value.multimedia[0].url,
          successID: value.successID,
          videoPreview:
            value.videoPreview.length > 0 ? value.videoPreview[0].url : null,
        };
      });
      setMedia(medias);
    }
  }, [successMedia, storiesProps]);

  // useEffect(() => {
  //   // if (viewUrl) {
  //   //   console.log("viewUrl", viewUrl);
  //   // }
  // }, [viewUrl]);

  return (
    <>
      <div className={`${styles.bg}`}>
        <div className={`${styles.stories_card_container}`}>
          <Row className={`px-5 pt-4`}>
            {router.locale === "en" ? (
              <>
                <Col xs={24} sm={24} md={24} lg={10} xl={12}>
                  <Row className={`my-4`}>
                    <Col
                      span={7}
                      className={`${styles.stories_amount_heading}`}
                    >
                      Total Approved
                    </Col>
                    <Col
                      span={1}
                      className={`${styles.stories_amount_heading}`}
                    >
                      {`:`}
                    </Col>
                    <Col span={16} className={`${styles.stories_amount}`}>
                      ${storiesProps.TotalApproved}
                    </Col>
                  </Row>
                  <Row className={`mb-5`}>
                    <Col
                      span={7}
                      className={`${styles.stories_amount_heading}`}
                    >
                      Source of Fund
                    </Col>
                    <Col
                      span={1}
                      className={`${styles.stories_amount_heading}`}
                    >
                      {`:`}
                    </Col>
                    <Col span={16} className={`${styles.stories_amount}`}>
                      {storiesProps.FundSource}
                    </Col>
                  </Row>
                  <Row className={`mb-5`}>
                    <Col
                      span={7}
                      className={`${styles.stories_amount_heading}`}
                    >
                      Overview
                    </Col>
                    <Col
                      span={1}
                      className={`${styles.stories_amount_heading}`}
                    >
                      {`:`}
                    </Col>
                    <Col span={16} className={`${styles.stories_amount}`}>
                      <p className="text-justify">{storiesProps.Overview}</p>
                    </Col>
                  </Row>
                  {/* : <p className={`${styles.stories_details_des} pr-4`}>
                    {storiesProps.Overview}
                  </p> */}
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={14}
                  xl={12}
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    className={`${styles.stories_details_image_box} mb-3 ps-3`}
                  >
                    <AppSlider
                      showIndicators={false}
                      autoPlay={true}
                      setAutoPlay={() => {}}
                      stopOnHover={false}
                    >
                      {media &&
                        media.length > 0 &&
                        media.map((imageData) => (
                          <>
                            {!isImage(imageData.multimedia) && (
                              <div
                                className={`d-flex position-absolute h-100 justify-content-center align-items-center`}
                                style={{
                                  zIndex: 100,
                                  width: "500px",
                                  fontSize: "85px",
                                }}
                              >
                                <i className="far fa-play-circle text-white"></i>
                              </div>
                            )}
                            <Image
                              src={
                                isImage(imageData.multimedia)
                                  ? base_url + imageData.multimedia
                                  : base_url + imageData.videoPreview
                              }
                              alt="ssc"
                              width="500"
                              height="418"
                              className={`${styles.stories_details_image}`}
                            />
                          </>
                        ))}
                    </AppSlider>
                  </div>
                  <div
                    className={`${styles.thumbnail_container} ${
                      media && media.length > 3 && `w-100`
                    } overflow-hidden`}
                  >
                    <div className={`d-flex overflow-auto`}>
                      <div className={`d-flex`}>
                        {media &&
                          media.length > 0 &&
                          media.map((imageData) => (
                            <>
                              <div
                                className={`mx-3 ${styles.image_cont} position-relative`}
                                onClick={() => setGalleryView(true)}
                              >
                                {!isImage(imageData.multimedia) && (
                                  <div
                                    className={`d-flex position-absolute  justify-content-center align-items-center`}
                                    style={{
                                      zIndex: 100,
                                      width: "100px",
                                      height: "85px",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <i className="far fa-play-circle text-white"></i>
                                  </div>
                                )}
                                <div
                                  className={`position-absolute`}
                                  style={{
                                    width: "100px",
                                  }}
                                >
                                  <Image
                                    src={
                                      isImage(imageData.multimedia)
                                        ? base_url + imageData.multimedia
                                        : base_url + imageData.videoPreview
                                    }
                                    alt="ssc"
                                    width="100"
                                    height="80"
                                  />
                                </div>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
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
                  <div
                    className={`${styles.stories_details_image_box} mb-3 pe-3`}
                  >
                    <AppSlider
                      showIndicators={false}
                      autoPlay={true}
                      setAutoPlay={() => {}}
                      stopOnHover={false}
                    >
                      {media &&
                        media.length > 0 &&
                        media.map((imageData) => (
                          <>
                            {!isImage(imageData.multimedia) && (
                              <div
                                className={`d-flex position-absolute h-100 justify-content-center align-items-center`}
                                style={{
                                  zIndex: 100,
                                  width: "500px",
                                  fontSize: "85px",
                                }}
                              >
                                <i className="far fa-play-circle text-white"></i>
                              </div>
                            )}
                            <Image
                              src={
                                isImage(imageData.multimedia)
                                  ? base_url + imageData.multimedia
                                  : base_url + imageData.videoPreview
                              }
                              alt="ssc"
                              width="500"
                              height="418"
                              className={`${styles.stories_details_image}`}
                            />
                          </>
                        ))}
                    </AppSlider>
                  </div>
                  <div
                    className={`${styles.thumbnail_container} w-100 overflow-hidden`}
                  >
                    <div className={`d-flex overflow-auto`}>
                      <div className={`d-flex`}>
                        {media &&
                          media.length > 0 &&
                          media.map((imageData) => (
                            <>
                              <div
                                className={`mx-3 ${styles.image_cont} position-relative`}
                                onClick={() => setGalleryView(true)}
                              >
                                {!isImage(imageData.multimedia) && (
                                  <div
                                    className={`d-flex position-absolute  justify-content-center align-items-center`}
                                    style={{
                                      zIndex: 100,
                                      width: "100px",
                                      height: "85px",
                                      fontSize: "25px",
                                    }}
                                  >
                                    <i className="far fa-play-circle text-white"></i>
                                  </div>
                                )}
                                <div
                                  className={`position-absolute`}
                                  style={{
                                    width: "100px",
                                  }}
                                >
                                  <Image
                                    src={
                                      isImage(imageData.multimedia)
                                        ? base_url + imageData.multimedia
                                        : base_url + imageData.videoPreview
                                    }
                                    alt="ssc"
                                    width="100"
                                    height="80"
                                  />
                                </div>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={12}>
                  <Row className={`my-4`}>
                    <Col
                      span={16}
                      className={`${styles.stories_amount} text-end`}
                    >
                      ${storiesProps.TotalApproved}
                    </Col>
                    <Col
                      span={1}
                      className={`${styles.stories_amount_heading} ps-2`}
                    >
                      {`:`}
                    </Col>
                    <Col
                      span={7}
                      className={`${styles.stories_amount_heading} text-capitalize text-end`}
                    >
                      {t("total approved")}
                    </Col>
                  </Row>
                  <Row className={`mb-5`}>
                    <Col
                      span={16}
                      className={`${styles.stories_amount} text-end`}
                    >
                      {storiesProps.FundSource}
                    </Col>
                    <Col
                      span={1}
                      className={`${styles.stories_amount_heading} ps-2`}
                    >
                      {`:`}
                    </Col>
                    <Col
                      span={7}
                      className={`${styles.stories_amount_heading} text-capitalize text-end`}
                    >
                      {t("source of funds")}
                    </Col>
                  </Row>
                  <p className={`${styles.stories_details_des} text-end pr-4`}>
                    {storiesProps.Overview}
                  </p>
                </Col>
              </>
            )}
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <p
                className={`${styles.stories_details_des} px-5 mt-5 ${
                  router.locale === "en" ? `text-justify` : `text-end`
                }`}
              >
                {storiesProps.Description}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      {galleryView && (
        <Modal
          centered
          onCancel={() => {
            setGalleryView(false);
          }}
          visible={galleryView}
          closable={false}
          footer={null}
          width={1200}
          bodyStyle={{ padding: "20px", height: "90vh", overflow: "hidden" }}
          wrapClassName={`${styles.video_modal}`}
        >
          <div className={`overflow-auto h-100`}>
            <div
              className={`d-flex justify-content-end align-items-center w-100`}
            >
              <i
                className="fas fa-times"
                onClick={() => setGalleryView(false)}
              ></i>
            </div>
            <Row gutter={[8, 8]} className="w-100">
              {media &&
                media.length > 0 &&
                media.map((imageData, index) => (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
                    <div
                      className={`overflow-hidden`}
                      onClick={() => setViewUrl(imageData.multimedia)}
                    >
                      <div
                        className={`overflow-hidden ${styles.gallery_image_container} position-relative`}
                      >
                        {!isImage(imageData.multimedia) && (
                          <div
                            className={`d-flex position-absolute  justify-content-center align-items-center ${styles.modal_video_playIcon}`}
                            style={{
                              zIndex: 100,
                              width: "100%",
                              height: "100%",
                              fontSize: "75px",
                            }}
                          >
                            <i className="far fa-play-circle text-white"></i>
                          </div>
                        )}
                        <div
                          className={`position-absolute overflow-hidden d-flex justify-content-center align-items-center w-100 h-100`}
                        >
                          <img
                            className={`${styles.modal_image}`}
                            src={
                              isImage(imageData.multimedia)
                                ? base_url + imageData.multimedia
                                : base_url + imageData.videoPreview
                            }
                            alt="ssc"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        </Modal>
      )}

      {viewUrl ? (
        isImage(viewUrl) ? (
          <div
            className="position-absolute w-100 h-100"
            style={{ zIndex: 1200 }}
          >
            <ImageViewer
              src={[base_url + viewUrl]}
              currentIndex={0}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={() => setViewUrl(null)}
            />
          </div>
        ) : (
          <div
            className={`${styles.video_player} d-flex justify-content-center align-items-center position-fixed w-100 h-100`}
          >
            <div
              className={`d-flex justify-content-end position-fixed w-100 p-3`}
              style={{ top: 0, fontSize: "20px" }}
              onClick={() => {
                setViewUrl(null);
                console.log("hello");
              }}
            >
              <i className="fas fa-times text-white"></i>
            </div>
            <ReactPlayer
              url={base_url + viewUrl}
              width={"95%"}
              height={"90%"}
              style={{
                position: "fixed",
                top: "20",
                zIndex: 1200,
                // backgroundColor: "#000",
              }}
              // volume={play ? 1 : 0}
              controls={true}
              playing={true}
            />
          </div>
        )
      ) : null}
    </>
  );
}
