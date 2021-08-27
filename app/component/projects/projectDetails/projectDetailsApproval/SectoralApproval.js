//Components
import PieChart from "./pieChart";
import { useTranslation } from "next-i18next";
//styles
import style from "./index.module.sass";

export default function SectoralApproval({ sectoralData }) {
  const { t } = useTranslation("common");
  return (
    <div className={`d-flex align-items-center w-100 flex-column`}>
      <h4 className={`${style.sectoral_approval_title} w-100`}>
        {t("Sectoral Distribution of Approvals")}
      </h4>

      <div
        className={`d-flex justify-content-center align-items-center mt-4 mb-3 w-100`}
      >
        <p className={`${style.sector_labels} w-50 text-secondary ms-3 m-0`}>
          {t("Sector Name")}
        </p>
        <p
          className={`${style.sector_labels} w-25 text-secondary text-center m-0`}
        >
          {t("Projects")}
        </p>
        <p
          className={`${style.sector_labels} w-25 text-secondary text-center m-0`}
        >
          {t("% Total Portfolio")}
        </p>
      </div>
      {sectoralData.map((data, index) => (
        <div
          key={index}
          className={`${style.common_sectoral_list} d-flex justify-content-center align-items-center shadow bg-white my-3 w-100`}
        >
          <p className={`w-50 ms-3 fw-bold m-0`}>{t(data.title)}</p>
          <p className={`${style.number_of_projects} w-25 text-center m-0`}>
            {data.projects}
          </p>
          <div
            className={`d-flex justify-content-center align-items-center w-25`}
          >
            <PieChart data={data} color={`#326ccc`} />
            <p className={`ms-1 m-0`} style={{ width: "45px" }}>
              {data.percent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
