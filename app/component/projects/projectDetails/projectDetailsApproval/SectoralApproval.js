import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//Components
import PieChart from "./pieChart";
import { useTranslation } from "next-i18next";
//styles
import style from "./index.module.sass";

export default function SectoralApproval({ projectData }) {
  const [sectorApproval, setSectorApproval] = useState([]);
  // console.log("projectData Sectoral", projectData);
  const { t } = useTranslation("common");
  let router = useRouter();

  useEffect(() => {
    let sector = [];
    if (projectData && Object.keys(projectData).length > 0) {
      for (let index in projectData) {
        sector.push({
          title: "infrastructure & housing",
          totalAllocated: projectData[index].totalAmountInfrastructure,
          totalProject: projectData[index].totalInfrastructure,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        sector.push({
          title: "education",
          totalAllocated: projectData[index].totalAmountEducation,
          totalProject: projectData[index].totalEducation,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        sector.push({
          title: "health",
          totalAllocated: projectData[index].totalAmountHealth,
          totalProject: projectData[index].totalHealth,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        sector.push({
          title: "economic empowerment",
          totalAllocated: projectData[index].totalAmountEconomic,
          totalProject: projectData[index].totalEconomic,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        sector.push({
          title: "trade, industry and civil institutions",
          totalAllocated: projectData[index].totalAmountTrade,
          totalProject: projectData[index].totalTrade,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        sector.push({
          title: "agriculture and rural development",
          totalAllocated: projectData[index].totalAmountAgriculture,
          totalProject: projectData[index].totalAgriculture,
          totalApproved: projectData[index].totalApprovedAmount,
        });
      }
    }
    setSectorApproval(sector);
  }, [projectData]);
  // console.log("sectorApproval", sectorApproval);

  return (
    <div className={`d-flex align-items-center w-100 flex-column`}>
      {router.locale === "en" ? (
        <>
          <h4
            className={`${style.sectoral_approval_title} w-100 text-capitalize`}
          >
            {t("sectoral distribution of approvals")}
          </h4>

          <div
            className={`d-flex justify-content-center align-items-center my-2 w-100`}
          >
            <p
              className={`${style.sector_labels} w-50 text-capitalize text-secondary ms-3 m-0`}
            >
              {t("sector name")}
            </p>
            <p
              className={`${style.sector_labels} w-25 text-capitalize text-secondary text-center m-0`}
            >
              {t("projects")}
            </p>
            <p
              className={`${style.sector_labels} w-25 text-capitalize text-secondary text-center m-0`}
            >
              {t("% total Portfolio")}
            </p>
          </div>
          {sectorApproval.map((data, index) => (
            <div
              key={index}
              className={`${style.common_sectoral_list} shadow d-flex justify-content-center align-items-center bg-white my-1 w-100`}
            >
              <p
                className={`${style.title} w-50 ms-3 fw-bold m-0 text-capitalize`}
              >
                {t(data.title)}
              </p>
              <p className={`${style.number_of_projects} w-25 text-center m-0`}>
                {data.totalProject}
              </p>
              <div
                className={`d-flex justify-content-center align-items-center w-25`}
              >
                <PieChart
                  totalAmountData={data.totalAllocated}
                  totalApproved={data.totalApproved}
                  color={`#326ccc`}
                />
                <p
                  className={`ms-1 m-0 ${style.percentage}`}
                  style={{ width: "45px" }}
                >
                  {Math.round((data.totalAllocated / data.totalApproved) * 100)}
                  {"%"}
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h4
            className={`${style.sectoral_approval_title} w-100 text-end text-capitalize`}
          >
            {t("sectoral distribution of approvals")}
          </h4>

          <div
            className={`d-flex justify-content-center align-items-center my-2 w-100`}
          >
            <p
              className={`${style.sector_labels} w-25 text-capitalize text-secondary text-center m-0`}
            >
              {t("% total Portfolio")}
            </p>
            <p
              className={`${style.sector_labels} w-25 text-capitalize text-secondary text-center m-0`}
            >
              {t("projects")}
            </p>
            <p
              className={`${style.sector_labels} w-50 text-capitalize text-secondary text-end me-3 m-0`}
            >
              {t("sector name")}
            </p>
          </div>
          {sectorApproval.map((data, index) => (
            <div
              key={index}
              className={`${style.common_sectoral_list} shadow d-flex justify-content-center align-items-center bg-white my-1 w-100`}
            >
              <div
                className={`d-flex justify-content-center align-items-center w-25`}
              >
                <PieChart
                  totalAmountData={data.totalAllocated}
                  totalApproved={data.totalApproved}
                  color={`#326ccc`}
                />
                <p
                  className={`ms-1 m-0 ${style.percentage}`}
                  style={{ width: "45px" }}
                >
                  {Math.round((data.totalAllocated / data.totalApproved) * 100)}
                  {"%"}
                </p>
              </div>
              <p className={`${style.number_of_projects} w-25 text-center m-0`}>
                {data.totalProject}
              </p>
              <p
                className={`${style.title} w-50 me-3 fw-bold m-0 text-end text-capitalize`}
              >
                {t(data.title)}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
