//Common-Components
import Layout from "../layout";
//Components
import ResourceChart from "../../component/landing/resources-chart";
import SectorAllocations from "../../component/landing/sector-allocations";
import AchievementFunds from "../../component/landing/achievement-funds/AchievementFunds";
import FundResource from "../../component/landing/fund-resource/FundResource";
import IsdbManage from "../../component/landing/isdb-manage/IsdbManage";

export default function Landing({
  sector,
  projectTitle,
  projectAr,
  alAqsa,
  alAqsaAr,
  arab,
  arabAr,
  yearly,
  yearlyAr,
  bannerImage,
  flag,
  flagAr,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"landing"}
      pageName={"home"}
      projectTitle={projectTitle}
    >
      <FundResource />
      <ResourceChart
        projectTitle={projectTitle}
        projectAr={projectAr}
        alAqsa={alAqsa}
        alAqsaAr={alAqsaAr}
        arab={arab}
        arabAr={arabAr}
        yearly={yearly}
        yearlyAr={yearlyAr}
        flag={flag}
        flagAr={flagAr}
      />
      <SectorAllocations sectorData={sector} />
      <AchievementFunds />
      <IsdbManage />
    </Layout>
  );
}
