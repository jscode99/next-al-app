//Components
import PieChart from "./pieChart";

import { Col } from "antd";
//styles
import style from "./index.module.sass";

export default function SectoralApproval({ sectoralData }) {
  return (
    <div className={`d-flex align-items-center w-100 flex-column`}>
      <h4 className={`${style.sectoral_approval_title} text-end w-100`}>
        Sectoral Distribution of <br /> Approvals
      </h4>

      <div
        className={`d-flex justify-content-center align-items-center mt-4 mb-3 w-100`}
      >
        <p className={`w-50 text-secondary ms-3 m-0`}>Sector Name</p>
        <p className={`w-25 text-secondary text-center m-0`}>Projects</p>
        <p className={`w-25 text-secondary text-center m-0`}>
          % Total Portfolio
        </p>
      </div>
      {sectoralData.map((data, index) => (
        <div
          key={index}
          className={`${style.common_sectoral_list} d-flex justify-content-center align-items-center shadow bg-white my-3 w-100`}
        >
          <p className={`w-50 ms-3 fw-bold m-0`}>{data.title}</p>
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
