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
    let cairoSummitTotal = 0;
    let beirutSirteSummitTotal = 0;
    let deadSeaSummitTotal = 0;
    overallContributions.forEach((value, index) => {
      // console.log("Testing Value--->", value);
      if (!Number.isNaN(parseInt(value.CairoSummitContribution)))
        cairoSummitTotal += parseInt(
          value.CairoSummitContribution.split(",").join("")
        );

      if (!Number.isNaN(parseInt(value.BeirutSirteSummitContribution)))
        beirutSirteSummitTotal += parseInt(
          value.BeirutSirteSummitContribution.split(",").join("")
        );

      if (!Number.isNaN(parseInt(value.DeadSeaSummitContribution)))
        deadSeaSummitTotal += parseInt(
          value.DeadSeaSummitContribution.split(",").join("")
        );
    });

    setCardData([
      {
        amount: cairoSummitTotal,
        subTitle: t("cairo summit"),
        bg: style.bg_theme_sky_blue_color,
      },
      {
        amount: beirutSirteSummitTotal,
        subTitle: t("beirut & sirte summit"),
        bg: style.bg_theme_golden_color,
      },
      {
        amount: deadSeaSummitTotal,
        subTitle: t("dead sea summit"),
        bg: style.bg_primary_color,
      },
    ]);
  }, [overallContributions, t]);

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
