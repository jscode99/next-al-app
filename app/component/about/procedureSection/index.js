import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

//Common components
import AppCollapsible from "../../../common-component/app-collapsible";
//Style
import style from "./index.module.sass";

export default function ProcedureSection() {
  let router = useRouter();
  const { t } = useTranslation("common");

  const collapseDetails = [
    {
      title: "Areas of finance",
      des: [
        {
          des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
        },
        {
          des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
        },
        {
          des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
        },
      ],
    },
    {
      title: "Get to know the projects",
      des: [
        {
          des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
        },
        {
          des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
        },
        {
          des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
        },
      ],
    },
    {
      title: "Submission of requests",
      des: [
        {
          des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
        },
        {
          des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
        },
        {
          des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
        },
      ],
    },
    {
      title: "Procedures for studying applications",
      des: [
        {
          des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
        },
        {
          des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
        },
        {
          des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
        },
      ],
    },
    {
      title: "Methods and conditions of financing",
      des: [
        {
          des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
        },
        {
          des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
        },
        {
          des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
        },
      ],
    },
    {
      title: "Withdrawal procedures",
      des: [
        {
          des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
        },
        {
          des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
        },
        {
          des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
        },
      ],
    },
  ];
  return (
    <div className={`${style.procedure_bg} py-5`}>
      <div className={`${style.procedure_container}`}>
        <h3 className={`${router.locale === "en" ? `` : `text-end`}`}>
          {t("Procedures")}
        </h3>
        <p className={`pb-4 h6 ${router.locale === "en" ? `` : `text-end`}`}>
          Based on the Bank’s practical experience in managing the projects it
          has financed in the Palestinian territories since its inception, as
          well as its experience in managing the generous grant approved by the
          Government of the Kingdom of Saudi Arabia for housing projects in the
          city of Al-Quds Al-Sharif, and guided by the general rules followed by
          the Bank in implementing projects it finances in member states and for
          the benefit of communities It is proposed to follow the following
          procedures for each of the two funds
        </p>
        <div className={`my-4`}>
          {collapseDetails.map(data => (
            <AppCollapsible key={Math.random()} data={data} color={`#d32050`} />
          ))}
        </div>
      </div>
    </div>
  );
}
