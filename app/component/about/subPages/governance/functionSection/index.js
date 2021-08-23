import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

//Common-Components
import AppCollapsible from "../../../../../common-component/app-collapsible";

//Styles
import style from "./index.module.sass";

export default function FunctionSection() {
  let router = useRouter();
  const { t } = useTranslation("common");

  const listData = [
    {
      title: t("Supreme Council"),
      url: "/images/about/Governance/Star.webp",
      iconBg: style.secondary_color,
      color:'#5ca849',
      des: [
        { des: "Approves the policies of the Fund." },
        { des: "Approves Investment polices and growth" },
        { des: "Approves Annual reports on the Fund activities" },
        { des: "Selection and approval of annual auditors" },
        { des: "Approves financial statements and closing balances " },
      ],
    },
    {
      title: t("Management Committee"),
      url: "/images/about/Governance/People.webp",
      iconBg: style.theme_golden_color,
      color:'#dabd2c',
      des: [
        { des: "Approves the policies of the Fund." },
        { des: "Approves Investment polices and growth" },
        { des: "Approves Annual reports on the Fund activities" },
        { des: "Selection and approval of annual auditors" },
        { des: "Approves financial statements and closing balances " },
      ],
    },
    {
      title: t("Islamic Development Bank"),
      url: "/images/about/Governance/Bank.webp",
      iconBg: style.primary_color,
      color:'#0E3890',
      des: [
        { des: "Approves the policies of the Fund." },
        { des: "Approves Investment polices and growth" },
        { des: "Approves Annual reports on the Fund activities" },
        { des: "Selection and approval of annual auditors" },
        { des: "Approves financial statements and closing balances " },
      ],
    },
  ];
  return (
    <div className={`${style.function_container}`}>
      <div className={`p-5`}>
        <h4
          className={`mx-4 my-4 ${
            router.locale === "en" ? `text-start` : `text-end`
          } fw-bold`}
        >
          {t("Functions")}
        </h4>
        {listData.map((data) => (
          <div className={`ms-5`} key={Math.random()}>
            <AppCollapsible data={data} color={`#64ac52`} />
          </div>
        ))}
      </div>
    </div>
  );
}
