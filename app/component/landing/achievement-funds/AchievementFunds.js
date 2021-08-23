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
      title: t("Building & Equipping Schools"),
      count: "269",
      bgColor: style.bg_theme_sky_blue_color,
      ftColor: style.ft_theme_sky_blue_color,
      image: "/images/achievement-logos/Icon-Scholar.webp",
    },
    {
      title: t("Building & Equipping Hospitals"),
      count: "56",
      bgColor: style.bg_secondary_color,
      ftColor: style.ft_secondary_color,
      image: "/images/achievement-logos/Icon-Health.webp",
    },
    {
      title: t("Roads Paved"),
      count: "651",
      bgColor: style.bg_theme_dark_green_color,
      ftColor: style.ft_theme_dark_green_color,
      image: "/images/achievement-logos/Icon-Roads.webp",
    },
    {
      title: t("Revitalizing Donum of Land"),
      count: "72000",
      bgColor: style.bg_theme_golden_color,
      ftColor: style.ft_theme_golden_color,

      image: "/images/achievement-logos/Icon-Plants.webp",
    },
    {
      title: t("Economic Empowerment of Families"),
      count: "24000",
      bgColor: style.bg_theme_lite_blue_color,
      ftColor: style.ft_theme_lite_blue_color,
      image: "/images/achievement-logos/Icon-People.webp",
    },
    {
      title: t("Restoration of Houses"),
      count: "35",
      bgColor: style.bg_primary_color,
      ftColor: style.ft_primary_color,
      image: "/images/achievement-logos/Icon-Buildings.webp",
    },
  ];
  return (
    <div className={`${style.achievement_container}`}>
      <div className="py-5">
        <h3 className={`${style.fund_resource_title} text-center mb-3`}>
          {t("Achievements of Al-Aqsa Fund")}
        </h3>
        <p className={`${style.achievement_subtitle} text-center mb-5`}>
          {t("Palestine Trust Funds")}
        </p>
        <Row gutter={[32, 32]}>
          {router.locale === "en"
            ? cardData.map(data => <AchievementCards data={data} />)
            : cardData.reverse().map(data => <AchievementCards data={data} />)}
        </Row>
      </div>
    </div>
  );
}
