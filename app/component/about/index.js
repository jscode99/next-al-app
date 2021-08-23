import { useTranslation } from "next-i18next";
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
//Components
import ShareHolder from "./shareholders";
import AboutUsCard from "./aboutCards";
import IsdbRoleSection from "./isdbRoleSection";
import ProcedureSection from "./procedureSection";
import IntroSection from "./introSection";
import MissionSection from "./missionSection";

export default function About({}) {
  const { t } = useTranslation("common");
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

  return (
    <>
      <InnerLayout>
        <PageCommonSection title={t("Al Aqsa Fund")} />
        <IntroSection />
        <MissionSection />
      </InnerLayout>
      <ShareHolder flagData={flagData} />
      <AboutUsCard />
      <IsdbRoleSection />
      <ProcedureSection />
    </>
  );
}
