import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Components
import ContributionsCard from "./contributions-card/index";
import ContributionsTable from "./contributions-table/index";
import ContributionsArabFunds from "./contributions-arab-funds/index";
import style from "./index.module.sass";

export default function Contributions({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
}) {
  // console.log("overallContributions", overallArContributions);
  const [summitAmount, setSummitAmount] = useState({});
  const [cardData, setCardData] = useState([]);
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    // `${}`
    setCardData([
      {
        // amount: Math.floor(summitAmount.cairoSummitTotal),
        amount: 542400000,
        subTitle: t("cairo summit"),
        bg: style.bg_theme_sky_blue_color,
      },
      {
        // amount: `${summitAmount.beirutSirteSummitTotal}`,
        amount: 222220230,
        subTitle: t("beirut & sirte summit"),
        bg: style.bg_theme_golden_color,
      },
      {
        // amount: `${summitAmount.deadSeaSummitTotal}`,
        amount: 112500000,
        subTitle: t("dead sea summit"),
        bg: style.bg_primary_color,
      },
    ]);
  }, [summitAmount]);
  console.log("cardData", cardData);
  console.log("summitAmount--->",typeof summitAmount.beirutSirteSummitTotal);
  return (
    <>
      <ContributionsCard
        cardData={cardData}
        grandTotal={summitAmount.grandTotal}
      />
      {router.locale === "en" ? (
        <ContributionsTable
          tData={overallContributions}
          setSummitAmount={setSummitAmount}
        />
      ) : (
        <ContributionsTable
          tData={overallArContributions}
          setSummitAmount={setSummitAmount}
        />
      )}
      {router.locale === "en" ? (
        <ContributionsArabFunds arabContributions={arabContributions} />
      ) : (
        <ContributionsArabFunds arabContributions={arabArContributions} />
      )}
    </>
  );
}
