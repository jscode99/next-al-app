import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";

//Component
import SectoralApproval from "./SectoralApproval";
import GeographicalApprovals from "./GeographicalApprovals";
//style
import style from "./index.module.sass";

export default function ProjectDetailsApproval({ projectData, sector }) {
  // console.log("projectData", projectData);
  // console.log("sector", sector);
  let router = useRouter();

  return (
    <div className={`${style.project_details_bg}`}>
      <div className={`${style.container} px-5`}>
        <Row gutter={[34, 34]} className={`h-100 my-4 align-items-end`}>
          {router.locale === "en" ? (
            <>
              <Col span={12}>
                <SectoralApproval projectData={projectData} />
              </Col>
              <Col span={12}>
                <GeographicalApprovals projectData={projectData} />
              </Col>
            </>
          ) : (
            <>
              <Col span={12}>
                <GeographicalApprovals projectData={projectData} />
              </Col>
              <Col span={12}>
                <SectoralApproval projectData={projectData} />
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
}
