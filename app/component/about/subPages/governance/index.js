import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// Components
import IntroStructure from "./introStructure";
import CardSection from "./cardSection";
import FunctionSection from "./functionSection";
//style
import style from "./index.module.sass";

export default function Governance({ staticSite }) {
  let router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={`${style.continer_bg}`}>
      <IntroStructure />
      {Object.keys(staticSite[0].static.about_governance_introduction).length >
        0 && (
        <CardSection
          data={staticSite[0].static.about_governance_introduction}
        />
      )}
      {Object.keys(staticSite[0].static.about_governance_functions).length >
        0 && (
        <FunctionSection
          data={staticSite[0].static.about_governance_functions}
        />
      )}
    </div>
  );
}
