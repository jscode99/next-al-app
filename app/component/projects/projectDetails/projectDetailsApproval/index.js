import { Row, Col } from "antd";
//Component
import SectoralApproval from "./SectoralApproval";
import GeographicalApprovals from "./GeographicalApprovals";
//style
import style from "./index.module.sass";

export default function ProjectDetailsApproval({ projectData }) {
  console.log("projectData", projectData);
  const sectoralData = [
    {
      title: "Infrastructure & Housing",
      projects: "12",
      percent: "86.50%",
    },
    {
      title: "Education",
      projects: "25",
      percent: "66.30%",
    },
    {
      title: "Health",
      projects: "15",
      percent: "90%",
    },
    {
      title: "Economic Empowerment",
      projects: "10",
      percent: "60.10%",
    },
    {
      title: "Trade, Industry & Other",
      projects: "3",
      percent: "72.33%",
    },
    {
      title: "Agriculture & Rural Development",
      projects: "2",
      percent: "86.50%",
    },
  ];

  const geoData = [
    {
      title: "Al-Quds",
      projects: "45",
      percent: "86.50%",
    },
    {
      title: "West Bank",
      projects: "35",
      percent: "66.30%",
    },
    {
      title: "Gaza",
      projects: "20",
      percent: "90%",
    },
  ];

  return (
    <div className={`${style.project_details_bg}`}>
      <div className={`${style.container} px-5`}>
        <Row gutter={[34, 34]} className={`h-100 my-4 align-items-end`}>
          <Col span={12}>
            <SectoralApproval sectoralData={sectoralData} />
          </Col>
          <Col span={12}>
            <GeographicalApprovals geoData={geoData} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
