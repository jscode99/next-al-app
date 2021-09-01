import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row } from "antd";
import AchievementCards from "./AchievementCards";
import style from "./index.module.sass";

export default function AchievementFunds({}) {
  const router = useRouter();
  //Trans Lib
  const { t } = useTranslation("common");
  const cardData = [
    {
      title: t("building & equipping schools"),
      count: "269",
      bgColor: style.bg_theme_sky_blue_color,
      ftColor: style.ft_theme_sky_blue_color,
      image: "/images/achievement-logos/Icon-Scholar.webp",
    },
    {
      title: t("building & equipping hospitals"),
      count: "56",
      bgColor: style.bg_secondary_color,
      ftColor: style.ft_secondary_color,
      image: "/images/achievement-logos/Icon-Health.webp",
    },
    {
      title: t("roads paved"),
      count: "651",
      bgColor: style.bg_theme_dark_green_color,
      ftColor: style.ft_theme_dark_green_color,
      image: "/images/achievement-logos/Icon-Roads.webp",
    },
    {
      title: t("revitalizing donum of land"),
      count: "72000",
      bgColor: style.bg_theme_golden_color,
      ftColor: style.ft_theme_golden_color,

      image: "/images/achievement-logos/Icon-Plants.webp",
    },
    {
      title: t("economic empowerment of families"),
      count: "24000",
      bgColor: style.bg_theme_lite_blue_color,
      ftColor: style.ft_theme_lite_blue_color,
      image: "/images/achievement-logos/Icon-People.webp",
    },
    {
      title: t("restoration of houses"),
      count: "35",
      bgColor: style.bg_primary_color,
      ftColor: style.ft_primary_color,
      image: "/images/achievement-logos/Icon-Buildings.webp",
    },
  ];
  return (
    <div className={`${style.achievement_bg}`}>
      <div className={`${style.achievement_container}`}>
        <div className="py-4 d-flex justify-content align-items-center flex-column">
          <h3
            className={`${style.achievement_title} text-center py-3 text-capitalize`}
          >
            {t("achievements of al-aqsa fund")}
          </h3>
          {/* <p className={`${style.achievement_subtitle} text-center mb-4`}>
            {t("Palestine Trust Funds")}
          </p> */}
          <Row className="w-100" gutter={[32, 32]}>
            {router.locale === "en"
              ? cardData.map(data => <AchievementCards data={data} />)
              : new Array(...cardData)
                  .reverse()
                  .map(data => <AchievementCards data={data} />)}
          </Row>
        </div>
      </div>
    </div>
  );
}
