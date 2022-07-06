import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

//Components
import ShareHolder from "./shareholders";
import AboutUsCard from "./aboutCards";
import IsdbRoleSection from "./isdbRoleSection";
import ProcedureSection from "./procedureSection";
import IntroSection from "./introSection";
import MissionSection from "./missionSection";

export default function About({ staticSite, staticSiteAr, flag, flagAr }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  // console.log("staticSite", staticSite);
  const cardData = [
    {
      title: t("governance structure"),
      route: "/about/governance-structure",
    },
    {
      title: t("members"),
      route: "/about/members",
    },
    {
      title: t("approval process and selection criteria"),
      route: "/about/approval-process-and-selection-criteria",
    },
  ];

  return (
    <>
      {router.locale === "en"
        ? Object.keys(staticSite[0].static.about_introduction).length > 0 && (
            <IntroSection data={staticSite[0].static.about_introduction} />
          )
        : Object.keys(staticSiteAr[0].static.about_introduction).length > 0 && (
            <IntroSection data={staticSiteAr[0].static.about_introduction} />
          )}
      {router.locale === "en"
        ? Object.keys(staticSite[0].static.about_missions).length > 0 && (
            <MissionSection data={staticSite[0].static.about_missions} />
          )
        : Object.keys(staticSiteAr[0].static.about_missions).length > 0 && (
            <MissionSection data={staticSiteAr[0].static.about_missions} />
          )}
      {router.locale === "en" ? (
        <ShareHolder flagData={flag} />
      ) : (
        <ShareHolder flagData={flagAr} />
      )}
      {router.locale === "en" ? (
        <AboutUsCard cardData={cardData} />
      ) : (
        <AboutUsCard cardData={cardData.reverse()} />
      )}
      {router.locale === "en"
        ? Object.keys(staticSite[0].static.about_roles).length > 0 && (
            <IsdbRoleSection data={staticSite[0].static.about_roles} />
          )
        : Object.keys(staticSiteAr[0].static.about_roles).length > 0 && (
            <IsdbRoleSection data={staticSiteAr[0].static.about_roles} />
          )}
      {router.locale === "en"
        ? Object.keys(staticSite[0].static.about_procedures).length > 0 && (
            <ProcedureSection data={staticSite[0].static.about_procedures} />
          )
        : Object.keys(staticSiteAr[0].static.about_procedures).length > 0 && (
            <ProcedureSection data={staticSiteAr[0].static.about_procedures} />
          )}
    </>
  );
}
