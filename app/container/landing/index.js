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
  projectData,
  overallContributions,
}) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"landing"}
      pageName={"home"}
      projectTitle={projectTitle}
    >
      <FundResource />
      <ResourceChart />
      <SectorAllocations sectorData={sector} />
      <AchievementFunds />
      <IsdbManage />
    </Layout>
  );
}
