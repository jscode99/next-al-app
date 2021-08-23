import { useState, useEffect } from "react";
//Antd
import { Row, Col } from "antd";
//Common-components
import CommonTable from "../../../../common-component/common-table/CommonTable";
//Style
import style from "./index.module.sass";

export default function ProjectDetailsTable({ projectData }) {
  const [tableData, setTableData] = useState(null);
  let columnData = [
    {
      title: `Projects`,
      dataIndex: "Projects",
      render: name => <p className={`${style.table_name} m-1`}>{name}</p>,
      width: "60%",
    },
    {
      title: `Code`,
      dataIndex: "Code",
    },
    {
      title: `Sector`,
      dataIndex: "Sector",
      width: "25%",
    },
    {
      title: `Al-Quds`,
      dataIndex: "Alquds",
    },
    {
      title: `West Bank`,
      dataIndex: "westBank",
    },
    {
      title: `Gaza`,
      dataIndex: "gazaStrip",
    },
    {
      title: `Approved Amount`,
      dataIndex: "approvedAmount",
    },
    {
      title: `Disbursement Amount`,
      dataIndex: "disbursementAmount",
    },
  ];

  useEffect(() => {
    let tData = projectData.map(data => {
      return {
        id: data.id,
        Code: data.Code,
        Projects: data.Projects,
        Sector: data.Sector,
        Alquds: Number.isNaN(parseInt(data.Alquds))
          ? data.Alquds
          : "$" + new Intl.NumberFormat().format(data.Alquds),
        westBank: Number.isNaN(parseInt(data.westBank))
          ? data.westBank
          : "$" + new Intl.NumberFormat().format(data.westBank),
        gazaStrip: Number.isNaN(parseInt(data.gazaStrip))
          ? data.gazaStrip
          : "$" + new Intl.NumberFormat().format(data.gazaStrip),
        approvedAmount: Number.isNaN(parseInt(data.approvedAmount))
          ? data.approvedAmount
          : "$" + new Intl.NumberFormat().format(data.approvedAmount),
        disbursementAmount: Number.isNaN(parseInt(data.disbursementAmount))
          ? data.disbursementAmount
          : "$" + new Intl.NumberFormat().format(data.disbursementAmount),
        projectTitle: data.projectTitle,
      };
    });
    setTableData(tData);
  }, [projectData]);

  return (
    <Row className={`py-5`}>
      <Col className={`align-items-center mb-5 w-100`}>
        <h3 className={`text-center`}>Projects</h3>
      </Col>

      <div
        className={`${style.project_details_table_container} overflow-hidden shadow w-100`}
      >
        <CommonTable
          columnData={columnData}
          data={tableData}
          pagination={true}
          scroll={{ x: 1500 }}
        />
      </div>
    </Row>
  );
}
