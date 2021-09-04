import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

//Component
import SectoralApproval from "./SectoralApproval";
import GeographicalApprovals from "./GeographicalApprovals";
//style
import style from "./index.module.sass";

export default function ProjectDetailsApproval({ projectData, sector }) {
  console.log("projectData", projectData);
  console.log("sector", sector);
  let router = useRouter();
  // const [geoSector, setGeoSector] = useState([]);

  // useEffect(() => {
  //   let geo = [];
  //   for (let index in projectData) {
  //     geo.push({
  //       gazatotal: projectData[index].totalGaza,
  //       gazatotalAmount: projectData[index].totalGazaAmount,
  //       alQuadsTotal: projectData[index].totalAlQuads,
  //       alQuadsTotalAmount: projectData[index].totalAlQuadsAmount,
  //       westBankTotal: projectData[index].totalWestBanks,
  //       westBankTotalAmount: projectData[index].totalWestBanksAmount,
  //       totalApproved: projectData[index].totalApprovedAmount,
  //       totalDisbursed: projectData[index].totalDisbursementAmount,
  //     });
  //   }
  //   setGeoSector(geo);
  // }, [projectData]);
  // console.log("geoSector", geoSector);

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

  return (
    <div className={`${style.project_details_bg}`}>
      <div className={`${style.container} px-5`}>
        <Row gutter={[34, 34]} className={`h-100 my-4 align-items-end`}>
          {router.locale === "en" ? (
            <>
              <Col span={12}>
                <SectoralApproval
                  sectoralData={sectoralData}
                  projectData={projectData}
                />
              </Col>
              <Col span={12}>
                <GeographicalApprovals projectData={projectData} />
              </Col>
            </>
          ) : (
            <>
              <Col span={12}>
                <GeographicalApprovals geoData={geoData} />
              </Col>
              <Col span={12}>
                <SectoralApproval sectoralData={sectoralData} />
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
}
