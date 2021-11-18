import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//Components
import PieChart from "./pieChart";
import { useTranslation } from "next-i18next";
//styles
import style from "./index.module.sass";

export default function GeographicalApprovals({ projectData }) {
  const [geoSector, setGeoSector] = useState([]);
  let router = useRouter();
  // console.log(
  //   "test",
  //   test[0].gazatotalAmount,
  //   test[0].totalApproved,
  //   test[0].gazatotalAmount / test[0].totalApproved,
  //   Math.round((test[0].gazatotalAmount / test[0].totalApproved) * 100),
  // );
  // console.log("ProjectData", projectData);

  useEffect(() => {
    let geo = [];
    if (projectData && Object.keys(projectData).length > 0) {
      for (let index in projectData) {
        geo.push({
          title: "gaza",
          totalAmount: projectData[index].totalGazaAmount,
          totalProject: projectData[index].totalGaza,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        geo.push({
          title: "al-quds",
          totalAmount: projectData[index].totalAlQuadsAmount,
          totalProject: projectData[index].totalAlQuads,
          totalApproved: projectData[index].totalApprovedAmount,
        });
        geo.push({
          title: "west bank",
          totalAmount: projectData[index].totalWestBanksAmount,
          totalProject: projectData[index].totalWestBanks,
          totalApproved: projectData[index].totalApprovedAmount,
        });
      }
    }
    setGeoSector(geo);
  }, [projectData]);

  // console.log("geoSector", geoSector);

  const { t } = useTranslation("common");

  return (
    <div className={`d-flex align-items-center w-100 flex-column`}>
      {router.locale === "en" ? (
        <>
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
              {t("% total Portfolio")}
            </p>
          </div>
          {geoSector.map((data, index) => (
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
                  totalAmountData={data.totalAmount}
                  totalApproved={data.totalApproved}
                  // data={data}
                  color={`#5ca849`}
                />
                <p
                  className={`ms-2 m-0 ${style.percentage}`}
                  style={{ width: "45px" }}
                >
                  {Math.round((data.totalAmount / data.totalApproved) * 100)}
                  {"%"}
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h4
            className={`${style.geographical_approval_title} text-capitalize text-end w-100`}
          >
            {t("geographical distribution of approvals")}
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
              {t("location")}
            </p>
          </div>
          {geoSector.map((data, index) => (
            <div
              key={index}
              className={`${style.common_sectoral_list} shadow d-flex justify-content-center align-items-center bg-white my-1 w-100`}
            >
              <div
                className={`d-flex justify-content-center align-items-center w-25`}
              >
                <PieChart
                  totalAmountData={data.totalAmount}
                  totalApproved={data.totalApproved}
                  // data={data}
                  color={`#5ca849`}
                />
                <p
                  className={`ms-2 m-0 ${style.percentage}`}
                  style={{ width: "45px" }}
                >
                  {Math.round((data.totalAmount / data.totalApproved) * 100)}
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
