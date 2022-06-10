import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row } from "antd";
import AchievementCards from "./AchievementCards";
import style from "./index.module.sass";

export default function AchievementFunds({ data }) {
  const [cardData, setcardData] = useState([]);
  const router = useRouter();
  //Trans Lib
  const { t } = useTranslation("common");

  const getProperty = (priority) => {
    switch (priority) {
      case "1":
        return [
          style.bg_theme_sky_blue_color,
          style.ft_theme_sky_blue_color,
          "/images/achievement-logos/Icon-Scholar.webp",
        ];
      case "2":
        return [
          style.bg_secondary_color,
          style.ft_secondary_color,
          "/images/achievement-logos/Icon-Health.webp",
        ];
      case "3":
        return [
          style.bg_theme_dark_green_color,
          style.ft_theme_dark_green_color,
          "/images/achievement-logos/Icon-Roads.webp",
        ];
      case "4":
        return [
          style.bg_theme_golden_color,
          style.ft_theme_golden_color,
          "/images/achievement-logos/Icon-Plants.webp",
        ];
      case "5":
        return [
          style.bg_theme_lite_blue_color,
          style.ft_theme_lite_blue_color,
          "/images/achievement-logos/Icon-People.webp",
        ];
      case "6":
        return [
          style.bg_primary_color,
          style.ft_primary_color,
          "/images/achievement-logos/Icon-Buildings.webp",
        ];
    }
  };

  useEffect(() => {
    let achievement = data.sort((x, y) => x.priority - y.priority);
    console.log("achievement", achievement);
    let cardData = achievement.map((data) => {
      return {
        title: data.title,
        count: data.count,
        bgColor: getProperty(data.priority)[0],
        ftColor: getProperty(data.priority)[1],
        image: getProperty(data.priority)[2],
      };
    });
    setcardData(cardData);
  }, [data, data.length]);

  return (
    <div className={`${style.achievement_bg}`}>
      <div className={`${style.achievement_container}`}>
        <div className="py-4 d-flex justify-content align-items-center flex-column">
          <h3
            className={`${
              router.locale === "en"
                ? style.achievement_title
                : style.achievement_title_ar
            } text-center py-3 text-capitalize`}
          >
            {t("achievements of al-aqsa fund")}
          </h3>
          {/* <p className={`${style.achievement_subtitle} text-center mb-4`}>
            {t("Palestine Trust Funds")}
          </p> */}
          <Row className="w-100" gutter={[32, 32]}>
            {router.locale === "en"
              ? cardData.map((data) => <AchievementCards data={data} />)
              : new Array(...cardData)
                  .reverse()
                  .map((data) => <AchievementCards data={data} />)}
          </Row>
        </div>
      </div>
    </div>
  );
}
