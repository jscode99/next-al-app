import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Row } from "antd";
// Common Components
import CommonTable from "../../../common-component/common-table/CommonTable";
//Style
import style from "./index.module.sass";

export default function ContributionsArabFunds({ arabContributions }) {
  let router = useRouter();
  const { t } = useTranslation("common");

  const [arabContribution, setArabContribution] = useState([]);
  const columns = [
    {
      title: t("Name Of Funds"),
      dataIndex: "Name",
      render: name => (
        <p className={`${style.table_name} text-start m-1`}>{name}</p>
      ),
    },
    {
      title: t("Allocation (in 000)"),
      dataIndex: "Allocation",
      render: name => (
        <p className={`${style.table_name} text-center m-1`}>{name}</p>
      ),
    },
  ];
  const arColumns = [
    {
      title: t("Allocation (in 000)"),
      dataIndex: "Allocation",
      render: name => (
        <p className={`d-flex justify-content-center m-1 pe-3`}>{name}</p>
      ),
    },
    {
      title: t("Name Of Funds"),
      dataIndex: "Name",
      render: name => (
        <p
          className={`${style.table_name} d-flex justify-content-end m-1 pe-3`}
        >
          {name}
        </p>
      ),
    },
  ];

  useEffect(() => {
    let totalValue = 0;
    let data = arabContributions.map(value => {
      totalValue += parseInt(value.Allocation.split(",").join(""));
      return {
        Allocation: new Intl.NumberFormat().format(
          parseInt(value.Allocation.split(",").join("")),
        ),
        Name: value.Name,
      };
    });

    if (data[data.length - 1].Name.toLowerCase() !== "total") {
      totalValue = new Intl.NumberFormat().format(totalValue);
      data.push({
        Allocation: <b>{totalValue}</b>,
        Name: t("Total"),
      });
    }

    setArabContribution(data);
  }, [arabContributions]);

  return (
    <div className={`${style.bg} pt-2 pb-5`}>
      <div className={`${style.container} px-5`}>
        <h3 className={`${style.contribution_table_title} text-center mb-4`}>
          {t("Arab Funds Contributions")}
        </h3>
        <div className={`w-100 d-flex justify-content-center`}>
          <div
            className={`${style.contribution_table_container} shadow overflow-hidden w-75`}
          >
            {router.locale === "en" ? (
              <CommonTable
                columnData={columns}
                data={arabContribution}
                pagination={false}
                scroll={{ x: 600 }}
              />
            ) : (
              <CommonTable
                columnData={arColumns}
                data={arabContribution}
                pagination={false}
                scroll={{ x: 600 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
