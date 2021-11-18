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
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-start m-0 text-capitalize`}
        >
          {t("name Of funds")}
        </p>
      ),
      dataIndex: "Name",
      render: name => (
        <p
          className={`${style.table_name} text-capitalize fw-bold text-start m-1`}
        >
          {name}
        </p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-center m-0 text-capitalize`}
        >
          {t("allocation (in 000)")}
        </p>
      ),
      dataIndex: "Allocation",
      render: name => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {name}
        </p>
      ),
    },
  ];
  const arColumns = [
    {
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-center m-1 pe-3`}
        >
          {t("allocation (in 000)")}
        </p>
      ),
      dataIndex: "Allocation",
      render: name => (
        <p className={`d-flex justify-content-center m-1 pe-3`}>{name}</p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-end m-1 pe-3`}
        >
          {t("name Of funds")}
        </p>
      ),
      dataIndex: "Name",
      render: name => (
        <p
          className={`${style.table_name} fw-bold d-flex justify-content-end m-1 pe-3`}
        >
          {name}
        </p>
      ),
    },
  ];

  useEffect(() => {
    let totalValue = 0;
    let contribution = arabContributions.sort(
      (a, b) =>
        parseFloat(b.Allocation.split(",").join("")) -
        parseFloat(a.Allocation.split(",").join("")),
    );
    let data = contribution.map(value => {
      totalValue += parseInt(value.Allocation.split(",").join(""));
      return {
        Allocation:
          "$" +
          new Intl.NumberFormat().format(
            parseInt(value.Allocation.split(",").join("")),
          ),
        Name: value.Name,
      };
    });

    if (data[data.length - 1].Name.toLowerCase() !== "total") {
      totalValue = new Intl.NumberFormat().format(totalValue);
      data.push({
        Allocation: <b>{"$" + totalValue}</b>,
        Name: <b>{t("total")}</b>,
      });
    }

    setArabContribution(data);
  }, [arabContributions]);

  return (
    <div className={`${style.bg} pt-2 pb-5`}>
      <div className={`${style.container} px-5`}>
        <h3
          className={`${style.contribution_table_title} text-center text-capitalize mb-4`}
        >
          {t("arab funds contributions")}
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
