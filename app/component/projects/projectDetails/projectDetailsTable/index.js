import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Tooltip } from "antd";

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
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("code")}
        </p>
      ),
      dataIndex: "Code",
      render: (code) => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {code}
        </p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-start m-1`}
        >
          {t("projects")}
        </p>
      ),
      dataIndex: "Projects",
      render: (projects) => (
        <p
          className={`${style.table_name} text-capitalize fw-bold text-start m-1`}
        >
          {projects}
        </p>
      ),
      width: "19%",
    },

    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-start m-1`}
        >
          {t("sector")}
        </p>
      ),
      dataIndex: "Sector",
      render: (sector) => (
        <p className={`${style.table_name} text-capitalize text-start m-1`}>
          {sector}
        </p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("al-quds")}
        </p>
      ),
      dataIndex: "Alquds",
      render: (quds) => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {quds}
        </p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("west bank")}
        </p>
      ),
      dataIndex: "westBank",
      render: (west) => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {west}
        </p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("gaza")}
        </p>
      ),
      dataIndex: "gazaStrip",
      render: (gaza) => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {gaza}
        </p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("total approved")}
        </p>
      ),
      dataIndex: "approvedAmount",
      render: (approved) => (
        <p className={`${style.table_name} text-center m-1`}>{approved}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("total disbursed")}
        </p>
      ),
      dataIndex: "disbursementAmount",
      render: (disbursed) => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {disbursed}
        </p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold text-center m-1`}
        >
          {t("status")}
        </p>
      ),
      dataIndex: "status",
      render: (status) => (
        <div
          className={`d-flex w-100 position-relative`}
          style={{ height: "50px" }}
        >
          <Tooltip
            placement="top"
            title={
              <div className={`text-capitalize`}>
                {t("total approved")}
                {`: ${status !== null ? "100%" : "NA"}`}
              </div>
            }
          >
            <div
              className={`d-flex w-100 h-100 position-absolute`}
              style={{ backgroundColor: status !== null ? "#B54F9B" : "#999" }}
            ></div>
          </Tooltip>
          <Tooltip
            placement="top"
            title={
              <div className={`text-capitalize`}>
                {t("total disbursed")}
                {`: ${status !== null ? `${status}%` : "0"}`}
              </div>
            }
          >
            <div
              className={`d-flex h-100 position-absolute fw-bold justify-content-center align-items-center`}
              style={{
                backgroundColor: "#FE8954",
                width: `${status !== null ? status : 0}%`,
                color: "#fff",
              }}
            >
              {status !== null && parseInt(status) ? status + "%" : ""}
            </div>
          </Tooltip>
        </div>
      ),
      width: "11%",
    },
  ];

  let columnDataAr = [
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-center m-1`}
        >
          {t("status")}
        </p>
      ),
      dataIndex: "status",
      render: (status) => (
        <div
          className={`d-flex w-100 position-relative flex-row-reverse`}
          style={{ height: "50px" }}
        >
          <Tooltip
            placement="top"
            title={
              <div className={`text-capitalize`}>{t("total approved")}</div>
            }
          >
            <div
              className={`d-flex w-100 h-100 position-absolute`}
              style={{ backgroundColor: status !== null ? "#B54F9B" : "#999" }}
            ></div>
          </Tooltip>
          <Tooltip
            placement="top"
            title={
              <div className={`text-capitalize`}>{t("total disbursed")}</div>
            }
          >
            <div
              className={`d-flex h-100 position-absolute fw-bold justify-content-center align-items-center`}
              style={{
                backgroundColor: "#FE8954",
                width: `${status !== null ? status : 0}%`,
                color: "#fff",
              }}
            >
              {status !== null && parseInt(status) ? status + "%" : ""}
            </div>
          </Tooltip>
        </div>
      ),
      width: "11%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-end m-1`}
        >
          {t("total disbursed")}
        </p>
      ),
      dataIndex: "disbursementAmount",
      render: (disbursed) => (
        <p className={`${style.table_name_ar} text-center m-1`}>{disbursed}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-center m-1`}
        >
          {t("total approved")}
        </p>
      ),
      dataIndex: "approvedAmount",
      render: (approved) => (
        <p className={`${style.table_name_ar} text-center m-1`}>{approved}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-center m-1`}
        >
          {t("gaza")}
        </p>
      ),
      dataIndex: "gazaStrip",
      render: (gaza) => (
        <p className={`${style.table_name_ar} text-center m-1`}>{gaza}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-center m-1`}
        >
          {t("west bank")}
        </p>
      ),
      dataIndex: "westBank",
      render: (west) => (
        <p className={`${style.table_name_ar} text-center m-1`}>{west}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-center m-1`}
        >
          {t("al-quds")}
        </p>
      ),
      dataIndex: "Alquds",
      render: (quds) => (
        <p className={`${style.table_name_ar} text-center m-1`}>{quds}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-end m-1`}
        >
          {t("sector")}
        </p>
      ),
      dataIndex: "Sector",
      render: (sector) => (
        <p className={`${style.table_name_ar} text-end m-1`}>{sector}</p>
      ),
      width: "10%",
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-end m-1`}
        >
          {t("projects")}
        </p>
      ),
      dataIndex: "Projects",
      render: (projects) => (
        <p className={`${style.table_name_ar} fw-bold text-end m-1`}>{projects}</p>
      ),
      width: "19%",
    },

    {
      title: (
        <p
          className={`${style.table_title_ar} text-capitalize fw-bold text-center m-1`}
        >
          {t("code")}
        </p>
      ),
      dataIndex: "Code",
      render: (code) => (
        <p className={`${style.table_name_ar} text-center m-1`}>{code}</p>
      ),
      width: "10%",
    },
  ];

  useEffect(() => {
    let tData = projectData.map((data) => {
      // !Number.isNaN(parseInt(data.disbursementAmount)) &&
      //     !Number.isNaN(parseInt(data.approvedAmount))
      //       ? Math.round((data.disbursementAmount / data.approvedAmount) * 100)
      //       : Number.isNaN(parseInt(data.disbursementAmount)) &&
      //         !Number.isNaN(parseInt(data.approvedAmount))
      //       ? 0
      //       : !Number.isNaN(parseInt(data.disbursementAmount)) &&
      //         Number.isNaN(parseInt(data.approvedAmount))
      //       ? null
      //       : Number.isNaN(parseInt(data.disbursementAmount)) &&
      //       Number.isNaN(parseInt(data.approvedAmount))?null:null,
      let status = 0;
      if (
        !Number.isNaN(parseInt(data.disbursementAmount)) &&
        !Number.isNaN(parseInt(data.approvedAmount))
      ) {
        status = Math.round(
          (data.disbursementAmount / data.approvedAmount) * 100
        );
      } else if (
        Number.isNaN(parseInt(data.disbursementAmount)) &&
        Number.isNaN(parseInt(data.approvedAmount))
      ) {
        status = null;
      } else if (
        !Number.isNaN(parseInt(data.disbursementAmount)) &&
        Number.isNaN(parseInt(data.approvedAmount))
      ) {
        status = null;
      } else if (
        Number.isNaN(parseInt(data.disbursementAmount)) &&
        !Number.isNaN(parseInt(data.approvedAmount))
      ) {
        status = 0;
      }

      return {
        id: data.id,
        Code: data.Code,
        Projects: data.Projects,
        Sector: data.Sector,
        Alquds: Number.isNaN(parseInt(data.Alquds))
          ? data.Alquds
          : "$" + new Intl.NumberFormat().format(Math.round(data.Alquds)),
        westBank: Number.isNaN(parseInt(data.westBank))
          ? data.westBank
          : "$" + new Intl.NumberFormat().format(Math.round(data.westBank)),
        gazaStrip: Number.isNaN(parseInt(data.gazaStrip))
          ? data.gazaStrip
          : "$" + new Intl.NumberFormat().format(Math.round(data.gazaStrip)),
        approvedAmount: Number.isNaN(parseInt(data.approvedAmount))
          ? data.approvedAmount
          : "$" +
            new Intl.NumberFormat().format(Math.round(data.approvedAmount)),
        disbursementAmount: Number.isNaN(parseInt(data.disbursementAmount))
          ? data.disbursementAmount
          : "$" +
            new Intl.NumberFormat().format(Math.round(data.disbursementAmount)),
        projectTitle: data.projectTitle,
        status,
      };
    });
    setTableData(tData);
  }, [projectData]);

  return (
    <div className={`${style.bg}`}>
      <div className={`${style.container} px-5`}>
        <Row className={`py-4`}>
          <div className={`align-items-center mb-4 w-100`}>
            <h3
              className={`${
                router.locale === "en"
                  ? style.project_details_table_title
                  : style.project_details_table_title_ar
              } text-capitalize text-center`}
            >
              {t("projects")}
            </h3>
          </div>

          <div
            className={`${style.project_details_table_container} overflow-hidden shadow w-100`}
          >
            <CommonTable
              columnData={router.locale === "en" ? columnDataEn : columnDataAr}
              data={tableData}
              pagination={true}
              scroll={{ x: 1050 }}
            />
          </div>
        </Row>
      </div>
    </div>
  );
}
