import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

//Common components
import AppCollapsible from "../../../common-component/app-collapsible";
//Style
import style from "./index.module.sass";

export default function ProcedureSection({ data }) {
  let router = useRouter();
  const { t } = useTranslation("common");
  const [collapseDetails, setCollapseDetails] = useState(null);
  useEffect(() => {
    let bulletGroupNameList = Object.keys(data).filter(data =>
      data.match("bulletGroup"),
    );
    let bulletGroupList = bulletGroupNameList.map((item, index) => {
      return {
        ...data[item],
      };
      item;
    });
    const collapseDetails = bulletGroupList.map(data => {
      return {
        title: data.bulletTitle,
        color: "#d32050",
        des: data.bullet,
      };
    });
    setCollapseDetails(collapseDetails);
  }, [data]);

  // const collapseDetails = [
  //   {
  //     title: "Areas of finance",
  //     color: "#d32050",
  //     des: [
  //       {
  //         des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
  //       },
  //       {
  //         des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
  //       },
  //       {
  //         des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Get to know the projects",
  //     color: "#d32050",
  //     des: [
  //       {
  //         des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
  //       },
  //       {
  //         des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
  //       },
  //       {
  //         des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Submission of requests",
  //     color: "#d32050",
  //     des: [
  //       {
  //         des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
  //       },
  //       {
  //         des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
  //       },
  //       {
  //         des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Procedures for studying applications",
  //     color: "#d32050",
  //     des: [
  //       {
  //         des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
  //       },
  //       {
  //         des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
  //       },
  //       {
  //         des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Methods and conditions of financing",
  //     color: "#d32050",
  //     des: [
  //       {
  //         des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
  //       },
  //       {
  //         des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
  //       },
  //       {
  //         des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Withdrawal procedures",
  //     color: "#d32050",
  //     des: [
  //       {
  //         des: "Projects and programs that preserve the Arab and Islamic identity of Jerusalem and prevent its obliteration, and enable the Palestinian economy to develop its own capabilities and disengage from the Israeli economy and to confront the policy of isolation and siege. This can be translated into the implementation of projects in the housing and historical buildings sectors in the Old City of Jerusalem in particular, in addition to projects In the housing, education, health and tourism sectors in the Jerusalem area in general.",
  //       },
  //       {
  //         des: "Organizing and financing research, seminars and studies that serve the same goal (Al-Quds).",
  //       },
  //       {
  //         des: "Development projects in all the Palestinian territories to develop the Palestinian economy and contribute to providing work for Palestinian workers and getting rid of dependence on the Israeli economy.",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className={`${style.procedure_bg} py-4`}>
      <div className={`${style.procedure_container} px-5`}>
        <p
          className={`${style.procedure_title} text-capitalize ${
            router.locale === "en" ? `` : `text-end`
          }`}
        >
          {t("procedures")}
        </p>
        <p
          className={`${style.procedure_description} pb-2 ${
            router.locale === "en" ? `` : `text-end`
          }`}
        >
          {data && Object.keys(data).length > 0 && data.description}
        </p>
        <div className={`mb-4`}>
          {collapseDetails &&
            collapseDetails.length > 0 &&
            collapseDetails.map((data, index) => (
              <AppCollapsible key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}
