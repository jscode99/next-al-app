import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
//Common-components
import CommonTable from "../../../../common-component/common-table/CommonTable";
//Style
import style from "./index.module.sass";

export default function ProjectDetailsTable({ projectData }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [tableData, setTableData] = useState(null);
  let columnDataEn = [
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>{t("code")}</p>
      ),
      dataIndex: "Code",
      render: code => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {code}
        </p>
      ),
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-start m-1`}>
          {t("projects")}
        </p>
      ),
      dataIndex: "Projects",
      render: projects => (
        <p className={`${style.table_name} text-capitalize  text-start m-1`}>
          {projects}
        </p>
      ),
      width: "60%",
    },

    {
      title: (
        <p className={`text-capitalize fw-bold text-start m-1`}>
          {t("sector")}
        </p>
      ),
      dataIndex: "Sector",
      render: sector => (
        <p className={`${style.table_name} text-capitalize text-start m-1`}>
          {sector}
        </p>
      ),
      width: "20%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("al-quds")}
        </p>
      ),
      dataIndex: "Alquds",
      render: quds => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {quds}
        </p>
      ),
      width: "13%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("west bank")}
        </p>
      ),
      dataIndex: "westBank",
      render: west => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {west}
        </p>
      ),
      width: "13%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>{t("gaza")}</p>
      ),
      dataIndex: "gazaStrip",
      render: gaza => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {gaza}
        </p>
      ),
      width: "13%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("approved amount")}
        </p>
      ),
      dataIndex: "approvedAmount",
      render: approved => (
        <p className={`${style.table_name} text-center m-1`}>{approved}</p>
      ),
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("disbursement amount")}
        </p>
      ),
      dataIndex: "disbursementAmount",
      render: disbursed => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {disbursed}
        </p>
      ),
    },
  ];

  let columnDataAr = [
    {
      title: (
        <p className={`text-capitalize fw-bold text-end m-1`}>
          {t("disbursement amount")}
        </p>
      ),
      dataIndex: "disbursementAmount",
      render: disbursed => (
        <p className={`${style.table_name} text-center m-1`}>{disbursed}</p>
      ),
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("approved amount")}
        </p>
      ),
      dataIndex: "approvedAmount",
      render: approved => (
        <p className={`${style.table_name} text-center m-1`}>{approved}</p>
      ),
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>{t("gaza")}</p>
      ),
      dataIndex: "gazaStrip",
      render: gaza => (
        <p className={`${style.table_name} text-center m-1`}>{gaza}</p>
      ),
      width: "13%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("west bank")}
        </p>
      ),
      dataIndex: "westBank",
      render: west => (
        <p className={`${style.table_name} text-center m-1`}>{west}</p>
      ),
      width: "13%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>
          {t("al-quds")}
        </p>
      ),
      dataIndex: "Alquds",
      render: quds => (
        <p className={`${style.table_name} text-center m-1`}>{quds}</p>
      ),
      width: "13%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-end m-1`}>{t("sector")}</p>
      ),
      dataIndex: "Sector",
      render: sector => (
        <p className={`${style.table_name} text-end m-1`}>{sector}</p>
      ),
      width: "20%",
    },
    {
      title: (
        <p className={`text-capitalize fw-bold text-end m-1`}>
          {t("projects")}
        </p>
      ),
      dataIndex: "Projects",
      render: projects => (
        <p className={`${style.table_name} text-end m-1`}>{projects}</p>
      ),
      width: "60%",
    },

    {
      title: (
        <p className={`text-capitalize fw-bold text-center m-1`}>{t("code")}</p>
      ),
      dataIndex: "Code",
      render: code => (
        <p className={`${style.table_name} text-center m-1`}>{code}</p>
      ),
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
    <div className={`${style.bg}`}>
      <div className={`${style.container} px-5`}>
        <Row className={`py-4`}>
          <Col className={`align-items-center mb-4 w-100`}>
            <h3
              className={`${style.project_details_table_title} text-capitalize text-center`}
            >
              {t("projects")}
            </h3>
          </Col>

          <div
            className={`${style.project_details_table_container} overflow-hidden shadow w-100`}
          >
            <CommonTable
              columnData={router.locale === "en" ? columnDataEn : columnDataAr}
              data={tableData}
              pagination={true}
              scroll={{ x: 1500 }}
            />
          </div>
        </Row>
      </div>
    </div>
  );
}
