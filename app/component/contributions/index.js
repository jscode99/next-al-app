import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
//Common Components
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
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
  console.log("overallContributions", overallArContributions);
  const [summitAmount, setSummitAmount] = useState({});
  const [cardData, setCardData] = useState([]);
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    setCardData([
      {
        // amount: `$${summitAmount.cairoSummitTotal}`,
        amount: 542400000,
        subTitle: t("Cairo Summit"),
        bg: style.bg_theme_sky_blue_color,
      },
      {
        // amount: `$${summitAmount.beirutSirteSummitTotal}`,
        amount: 222220230,
        subTitle: t("Beirut & Sirte Summit"),
        bg: style.bg_theme_golden_color,
      },
      {
        // amount: `$${summitAmount.deadSeaSummitTotal}`,
        amount: 111421000,
        subTitle: t("Dead Sea Summit"),
        bg: style.bg_primary_color,
      },
    ]);
  }, [summitAmount]);
  console.log("cardData", cardData);
  return (
    <>
      <InnerLayout>
        <PageCommonSection title={t("Contributions")} />
        <div className={`${style.contribution_card_container}`}>
          <ContributionsCard
            cardData={cardData}
            grandTotal={summitAmount.grandTotal}
          />
        </div>
      </InnerLayout>
      <div className={`${style.bg}`}>
        <div className={`${style.contribution_container_bg}`}>
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
        </div>
      </div>
      {router.locale === "en" ? (
        <ContributionsArabFunds arabContributions={arabContributions} />
      ) : (
        <ContributionsArabFunds arabContributions={arabArContributions} />
      )}
      {/* </div> */}
    </>
  );
}
