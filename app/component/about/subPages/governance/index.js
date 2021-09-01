import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

//Antd
import { Row, Col } from "antd";
// Components
import IntroStructure from "./introStructure";
import CardSection from "./cardSection";
import FunctionSection from "./functionSection";
//Common Components
import InnerLayout from "../../../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../../../common-component/page-common-section/PageCommonSection";
//style
import style from "./index.module.sass";

export default function Governance() {
  let router = useRouter();
  const { t } = useTranslation("common");

  const data = [
    {
      title: t("supreme council"),
      des: "Council comprises the Finance ministers of the donor countries, the Secretary General of the LAS, and a representative of the PNA.",
      bg: style.secondary_color,
      url: "/images/about/Governance/Star.webp",
    },
    {
      title: t("management committee"),
      des: "Committee composed of senior Government officials of the major donor countries (UAE, Algeria, Qatar, Kuwait, Egypt and Kingdom of Saudi Arabia) a representative of the League of Arab States (LAS), and a representative of the Palestinian National Authority (PNA).",
      bg: style.theme_golden_color,
      url: "/images/about/Governance/People.webp",
    },
    {
      title: t("islamic development bank"),
      des: "Managed and Administered by the Palestine Trust Funds",
      bg: style.primary_color,
      url: "/images/about/Governance/Bank.webp",
    },
  ];
  return (
    <div className={`${style.continer_bg}`}>
      <IntroStructure />
      {router.locale === "en" ? (
        <CardSection data={data} />
      ) : (
        <CardSection data={data.reverse()} />
      )}
      <FunctionSection />
    </div>
  );
}
