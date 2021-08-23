import { useTranslation } from "next-i18next";

//Antd
import { Row, Col } from "antd";
//Common Components
import InnerLayout from "../../../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../../../common-component/page-common-section/PageCommonSection";
//Components
import Approval from "./apporval";
import Selection from "./selection";
import ProposalSection from "./proposalSection";
import ProposalCard from "./proposalCards";

//Style
import style from "./index.module.sass";

export default function ApprovalProcess() {
  const { t } = useTranslation("common");

  const cardData = [
    {
      no: "1",
      title: "Developmental Impact",
      des: "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements.",
      color: style.bg_theme_sky_blue_color,
    },
    {
      no: "2",
      title: "Aligned with National Development Plans ",
      des: "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements.",
      color: style.bg_secondary_color,
    },
    {
      no: "3",
      title: "Financial Efficiency of the projects",
      des: "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements.",
      color: style.bg_theme_dark_green_color,
    },
    {
      no: "4",
      title: "Quality of Proposal ",
      des: "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements.",
      color: style.bg_theme_golden_color,
    },
    {
      no: "5",
      title: "Exposure",
      des: "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements.",
      color: style.bg_theme_lite_blue_color,
    },
    {
      no: "6",
      title: "Geographical Coverage",
      des: "Agreement of financing is signed with the Implementing Agencies detailing the items financed as well as disbursement and procurements.",
      color: style.bg_primary_color,
    },
  ];

  return (
    <>
      <div className={`${style.container_bg}`}>
        <InnerLayout>
          <PageCommonSection
            title={t("Approval Process and Selection Criteria")}
          />
          <Approval />
        </InnerLayout>
        <Selection />
        <ProposalSection />
        <ProposalCard cardData={cardData} />
      </div>
    </>
  );
}
