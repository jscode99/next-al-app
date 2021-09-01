import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
//Components
import ShareHolder from "./shareholders";
import AboutUsCard from "./aboutCards";
import IsdbRoleSection from "./isdbRoleSection";
import ProcedureSection from "./procedureSection";
import IntroSection from "./introSection";
import MissionSection from "./missionSection";

export default function About({}) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const flagData = [
    {
      title: "Jordan",
      url: "/images/about/flags/Jordan.webp",
    },
    {
      title: "UAE",
      url: "/images/about/flags/Uae.webp",
    },
    {
      title: "Bahrain",
      url: "/images/about/flags/Baharain.webp",
    },
    {
      title: "Algeria",
      url: "/images/about/flags/Algeria.webp",
    },
    {
      title: "Saudi Arabia",
      url: "/images/about/flags/Saudi.webp",
    },
    {
      title: "Sudan",
      url: "/images/about/flags/Sudan.webp",
    },
    {
      title: "Syria",
      url: "/images/about/flags/Syria.webp",
    },
    {
      title: "Oman",
      url: "/images/about/flags/Oman.webp",
    },
    {
      title: "Qatar",
      url: "/images/about/flags/Qatar.webp",
    },
    {
      title: "Kuwait",
      url: "/images/about/flags/Kuwait.webp",
    },
    {
      title: "Egypt",
      url: "/images/about/flags/Egypt.webp",
    },
    {
      title: "Morocco",
      url: "/images/about/flags/Morocco.webp",
    },
    {
      title: "Yemen",
      url: "/images/about/flags/Yemen.webp",
    },
    {
      title: "Iraq",
      url: "/images/about/flags/Iraq.webp",
    },
    {
      title: "Lebanon",
      url: "/images/about/flags/Lebanon.webp",
    },
    {
      title: "Mali",
      url: "/images/about/flags/Mali.webp",
    },
    {
      title: "Pakistan",
      url: "/images/about/flags/Pak.webp",
    },
  ];

  const cardData = [
    {
      title: t("Governance Structure"),
      route: "/about/governance-structure",
    },
    {
      title: t("Members"),
      route: "/about/members",
    },
    {
      title: t("Approval Process and Selection Criteria"),
      route: "/about/approval-process-and-selection-criteria",
    },
  ];

  return (
    <>
      <IntroSection />
      <MissionSection />
      <ShareHolder flagData={flagData} />
      {router.locale === "en" ? (
        <AboutUsCard cardData={cardData} />
      ) : (
        <AboutUsCard cardData={cardData.reverse()} />
      )}
      <IsdbRoleSection />
      <ProcedureSection />
    </>
  );
}
