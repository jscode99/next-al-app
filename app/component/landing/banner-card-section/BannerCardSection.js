import { useRouter } from "next/router";
import { Row, Col } from "antd";
import BannerCard from "./BannerCard";
import style from "./index.module.sass";

export default function BannerCardSection() {
  const router = useRouter();
  let bannerCardData = [
    {
      title: "$1.734 bn",
      floatLength: 3,
      subTitle: router.locale === "en" ? `Total Resources` : `اجمالي الموارد`,
      bgColor: style.bg_secondary_color,
      ftColor: style.ft_secondary_color,
      logo: "/images/banner-logos/Icon-Resources.webp",
      navigation: true,
    },
    {
      title: "$1.604 bn",
      floatLength: 3,
      subTitle:
        router.locale === "en" ? `Total Approvals` : `اجمالي الاعتمادات`,
      bgColor: style.bg_theme_sky_blue_color,
      ftColor: style.ft_theme_sky_blue_color,
      logo: "/images/banner-logos/Icon-Approvals.webp",
      navigation: false,
    },
    {
      title: "397",
      floatLength: 0,
      subTitle: router.locale === "en" ? `Total Projects` : `اجمالي المشاريع`,
      bgColor: style.bg_primary_color,
      ftColor: style.ft_primary_color,
      logo: "/images/banner-logos/Icon-Projects.webp",
      navigation: false,
    },
  ];
  return (
    <div className={`${style.container} position-absolute w-100 h-50`}>
      <div className={`${style.banner_card_section}`}>
        <Row className={`h-100`}>
          <Col xs={0} sm={0} md={0} lg={10} xl={10}></Col>
          <Col xs={24} sm={24} md={24} lg={14} xl={14}>
            <div className={`h-100 py-5`}>
              <h1
                className={`${style.banner_card_section_title} ${
                  router.locale === "en" ? "" : `d-flex justify-content-end`
                } text-white mb-2`}
              >
                {router.locale === "en" ? `Al Aqsa Funds` : `صندوق الأقصى`}
              </h1>
              <p
                className={`${style.banner_card_section_subtitle} ${
                  router.locale === "en" ? "" : `d-flex justify-content-end`
                } mb-5`}
              >
                {router.locale === "en"
                  ? `Managed by the Islamic Development Bank`
                  : `تدار من قبل البنك
              الإسلامي للتنمية`}
              </p>
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
          </Col>
        </Row>
      </div>
    </div>
  );
}
