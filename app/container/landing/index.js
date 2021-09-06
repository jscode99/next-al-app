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
  staticSite,
  staticSiteAr,
  projectData,
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
  isdbManage,
  isdbManageAr,
}) {
  const router = useRouter();
  // console.log("staticSite", staticSite);
  return (
    <Layout
      staticSite={router.locale === "en" ? staticSite : staticSiteAr}
      heroImage={bannerImage}
      page={"landing"}
      pageName={"home"}
      projectTitle={projectTitle}
      projectData={projectData}
    >
      {router.locale === "en"
        ? staticSite[0].static.home_fundResources.length > 0 && (
            <FundResource data={staticSite[0].static.home_fundResources} />
          )
        : staticSiteAr[0].static.home_fundResources.length > 0 && (
            <FundResource data={staticSiteAr[0].static.home_fundResources} />
          )}
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
      {router.locale === "en"
        ? staticSite[0].static.home_achievements.length > 0 && (
            <AchievementFunds data={staticSite[0].static.home_achievements} />
          )
        : staticSiteAr[0].static.home_achievements.length > 0 && (
            <AchievementFunds data={staticSiteAr[0].static.home_achievements} />
          )}
      <IsdbManage isdbManage={isdbManage} isdbManageAr={isdbManageAr} />
    </Layout>
  );
}
