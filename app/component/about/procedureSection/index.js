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
    let bulletGroupNameList = Object.keys(data).filter((data) =>
      data.match("bulletGroup")
    );
    let bulletGroupList = bulletGroupNameList.map((item, index) => {
      return {
        ...data[item],
      };
      item;
    });
    const collapseDetails = bulletGroupList.map((data) => {
      return {
        title: data.bulletTitle,
        color: "#d32050",
        des: data.bullet,
      };
    });
    setCollapseDetails(collapseDetails);
  }, [data]);

  return (
    <div className={`${style.procedure_bg} py-4`}>
      <div className={`${style.procedure_container} px-5`}>
        <p
          className={`${
            router.locale === "en"
              ? style.procedure_title
              : style.procedure_title_ar
          } text-capitalize ${router.locale === "en" ? `` : `text-end`}`}
        >
          {t("procedures")}
        </p>
        <p
          className={`${
            router.locale === "en"
              ? style.procedure_description
              : style.procedure_description_ar
          } pb-2 text-justify
          }`}
          dir={`rtl`}
        >
          {data && Object.keys(data).length > 0 && data.description}
        </p>
        <div className={`mb-4`}>
          {collapseDetails &&
            collapseDetails.length > 0 &&
            collapseDetails.map((data, index) => (
              <AppCollapsible keys={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
}
