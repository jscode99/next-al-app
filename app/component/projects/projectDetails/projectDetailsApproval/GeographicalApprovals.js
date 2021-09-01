//Components
import PieChart from "./pieChart";
import { useTranslation } from "next-i18next";
//styles
import style from "./index.module.sass";

export default function GeographicalApprovals({ geoData }) {
  const { t } = useTranslation("common");

  return (
    <div className={`d-flex align-items-center w-100 flex-column`}>
      <h4
        className={`${style.geographical_approval_title} text-capitalize text-start w-100`}
      >
        {t("geographical distribution of approvals")}
      </h4>
      <div
        className={`d-flex justify-content-center align-items-center my-2 w-100`}
      >
        <p
          className={`${style.sector_labels} w-50 text-capitalize text-secondary ms-3 m-0`}
        >
          {t("location")}
        </p>
        <p
          className={`${style.sector_labels} w-25 text-capitalize text-secondary text-center m-0`}
        >
          {t("projects")}
        </p>
        <p
          className={`${style.sector_labels} w-25 text-capitalize text-secondary text-center m-0`}
        >
          {t("% total portfolio")}
        </p>
      </div>
      {geoData.map((data, index) => (
        <div
          key={index}
          className={`${style.common_sectoral_list} d-flex justify-content-center align-items-center bg-white shadow my-1 w-100`}
        >
          <p className={`w-50 ms-3 fw-bold m-0`}>{t(data.title)}</p>
          <p className={`${style.number_of_projects} w-25 text-center m-0`}>
            {data.projects}
          </p>
          <div
            className={`d-flex justify-content-center align-items-center w-25`}
          >
            <PieChart data={data} color={`#5ca849`} />
            <p
              className={`ms-2 m-0 ${style.percentage}`}
              style={{ width: "45px" }}
            >
              {data.percent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
