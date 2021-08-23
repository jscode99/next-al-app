//Components
import PieChart from "./pieChart";
import { Col } from "antd";
//styles
import style from "./index.module.sass";

export default function GeographicalApprovals({ geoData }) {
  return (
    <div className={`d-flex align-items-center w-100 flex-column`}>
      <h4 className={`${style.geographical_approval_title} text-start w-100`}>
        Geographical Distribution of <br /> Approvals
      </h4>
      <div
        className={`d-flex justify-content-center align-items-center mt-4 mb-3 w-100`}
      >
        <p className={`w-50 text-secondary ms-3 m-0`}>Location</p>
        <p className={`w-25 text-secondary text-center  m-0`}>Projects</p>
        <p className={`w-25 text-secondary text-center m-0`}>
          % Total Portfolio
        </p>
      </div>
      {geoData.map((data, index) => (
        <div
          key={index}
          className={`${style.common_sectoral_list} d-flex justify-content-center align-items-center bg-white shadow my-3 w-100`}
        >
          <p className={`w-50 ms-3 fw-bold m-0`}>{data.title}</p>
          <p className={`${style.number_of_projects} w-25 text-center m-0`}>
            {data.projects}
          </p>
          <div
            className={`d-flex justify-content-center align-items-center w-25`}
          >
            <PieChart data={data} color={`#5ca849`} />
            <p className={`ms-2 m-0`} style={{ width: "45px" }}>
              {data.percent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
