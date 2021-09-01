import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"landing"}
      pageName={"home"}
      projectTitle={projectTitle}
    >
      <FundResource />
      {router.locale === "en" ? (
        <ResourceChart
          projectTitle={projectTitle}
          alAqsa={alAqsa}
          arab={arab}
          yearly={yearly}
          flag={flag}
        />
      ) : (
        <ResourceChart
          projectTitle={projectAr}
          alAqsa={alAqsaAr}
          arab={arabAr}
          yearly={yearlyAr}
          flag={flagAr}
        />
      )}
      <SectorAllocations sectorData={sector} />
      <AchievementFunds />
      <IsdbManage />
    </Layout>
  );
}
