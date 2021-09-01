import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Row, Col } from "antd";
import BannerCard from "./BannerCard";
import TweenOne from "rc-tween-one";
import style from "./index.module.sass";

export default function BannerCardSection() {
  const { t } = useTranslation("common");
  const router = useRouter();
  let bannerCardData = [
    {
      title: "$1.734 bn",
      floatLength: 3,
      subTitle: t("total resources"),
      bgColor: style.bg_secondary_color,
      ftColor: style.ft_secondary_color,
      logo: "/images/banner-logos/Icon-Resources.webp",
      navigation: true,
    },
    {
      title: "$1.604 bn",
      floatLength: 3,
      subTitle: t("total approvals"),
      bgColor: style.bg_theme_sky_blue_color,
      ftColor: style.ft_theme_sky_blue_color,
      logo: "/images/banner-logos/Icon-Approvals.webp",
      navigation: false,
    },
    {
      title: "397",
      floatLength: 0,
      subTitle: t("total projects"),
      bgColor: style.bg_primary_color,
      ftColor: style.ft_primary_color,
      logo: "/images/banner-logos/Icon-Projects.webp",
      navigation: false,
    },
  ];
  return (
    <div className={`${style.container} w-100 h-50`}>
      <div className={`${style.banner_card_section}`}>
        <Row className={`h-100`}>
          <Col xs={0} sm={0} md={0} lg={9} xl={10}></Col>
          <Col xs={0} sm={0} md={24} lg={15} xl={14}>
            <div className={`d-flex justify-content-center align-items-center`}>
              <div className={`${style.inner_container} h-100 py-5 `}>
                <TweenOne
                  className={`${style.banner_card_section_title} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } text-white mb-2 text-capitalize`}
                  animation={{ y: -30, opacity: 0, type: "from", delay: 50 }}
                >
                  {t("al aqsa fund")}
                </TweenOne>
                <TweenOne
                  className={`${style.banner_card_section_subtitle} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } mb-5 text-capitalize`}
                  animation={{ y: 30, opacity: 0, type: "from", delay: 150 }}
                >
                  {t("managed by the islamic development bank")}
                </TweenOne>
                <div
                  className={`d-flex flex-wrap justify-content-between align-items-center`}
                >
                  {router.locale === "en"
                    ? bannerCardData.map(data => <BannerCard data={data} />)
                    : bannerCardData
                        .reverse()
                        .map(data => <BannerCard data={data} />)}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div className={`d-flex justify-content-center align-items-center`}>
              <div className={`${style.inner_container} h-100 py-5`}>
                <TweenOne
                  className={`${style.banner_card_section_title} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } text-white mb-2 text-capitalize`}
                  animation={{ y: 30, opacity: 0, type: "from", delay: 50 }}
                >
                  {t("al aqsa fund")}
                </TweenOne>
                <TweenOne
                  className={`${style.banner_card_section_subtitle} ${
                    router.locale === "en" ? "" : `d-flex justify-content-end`
                  } mb-5 text-capitalize`}
                  animation={{ y: 30, opacity: 0, type: "from", delay: 150 }}
                >
                  {t("managed by the islamic development bank")}
                </TweenOne>
                <div
                  className={`d-flex flex-wrap justify-content-center align-items-center`}
                >
                  {router.locale === "en"
                    ? bannerCardData.map(data => <BannerCard data={data} />)
                    : bannerCardData
                        .reverse()
                        .map(data => <BannerCard data={data} />)}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
