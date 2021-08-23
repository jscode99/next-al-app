import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row, Table } from "antd";
//Common Component
import CommonTable from "../../../common-component/common-table/CommonTable";
//Style
import style from "./index.module.sass";

export default function ContributionsTable({ tData, setSummitAmount }) {
  const [countryContribution, setCountryContribution] = useState([]);
  let router = useRouter();
  const { t } = useTranslation("common");
  let columnData = [
    {
      title: `Country`,
      dataIndex: "Country",
      render: name => <p className={`${style.table_name}`}>{name}</p>,
    },
    {
      title: `Cairo Summit`,
      dataIndex: "CairoSummitContribution",
    },
    {
      title: `Beirut & Sirte Summit`,
      dataIndex: "BeirutSirteSummitContribution",
    },
    {
      title: `Dead Sea Summit`,
      dataIndex: "DeadSeaSummitContribution",
    },
    {
      title: `Total Payed`,
      dataIndex: "totalPayed",
    },
  ];

  let columnArData = [
    {
      title: ` اجمالي المدفوعات`,
      dataIndex: "totalPayed",
      render: name => (
        <p className={`d-flex justify-content-end m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: `قمة البحر الميت`,
      dataIndex: "DeadSeaSummitContribution",
      render: name => (
        <p className={`d-flex justify-content-end m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: `قمة بيروت  وسرت`,
      dataIndex: "BeirutSirteSummitContribution",
      render: name => (
        <p className={`d-flex justify-content-end m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: `قمة القاهرة`,
      dataIndex: "CairoSummitContribution",
      render: name => (
        <p className={`d-flex justify-content-end m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: `الدولة`,
      dataIndex: "Country",
      render: name => (
        <p
          className={`${style.table_name} d-flex justify-content-end m-0 pe-3`}
        >
          {name}
        </p>
      ),
    },
  ];

  useEffect(() => {
    let cairoSummitTotal = 0;
    let beirutSirteSummitTotal = 0;
    let deadSeaSummitTotal = 0;
    let rowTotal = 0;
    tData.forEach((value, index) => {
      if (!Number.isNaN(parseInt(value.CairoSummitContribution)))
        cairoSummitTotal += parseInt(
          value.CairoSummitContribution.split(",").join(""),
        );

      if (!Number.isNaN(parseInt(value.BeirutSirteSummitContribution)))
        beirutSirteSummitTotal += parseInt(
          value.BeirutSirteSummitContribution.split(",").join(""),
        );

      if (!Number.isNaN(parseInt(value.DeadSeaSummitContribution)))
        deadSeaSummitTotal += parseInt(
          value.DeadSeaSummitContribution.split(",").join(""),
        );
    });
    if (tData[tData.length - 1].Country.toLowerCase() !== "total") {
      if (cairoSummitTotal)
        cairoSummitTotal = new Intl.NumberFormat().format(cairoSummitTotal);
      if (beirutSirteSummitTotal)
        beirutSirteSummitTotal = new Intl.NumberFormat().format(
          beirutSirteSummitTotal,
        );
      if (deadSeaSummitTotal)
        deadSeaSummitTotal = new Intl.NumberFormat().format(deadSeaSummitTotal);

      tData.push({
        CairoSummitContribution: cairoSummitTotal,
        DeadSeaSummitContribution: deadSeaSummitTotal,
        BeirutSirteSummitContribution: beirutSirteSummitTotal,
        Country: t("Total"),
      });
    }

    // console.log(
    //   "===========>",
    //   cairoSummitTotal,
    //   beirutSirteSummitTotal,
    //   deadSeaSummitTotal,
    //   tData
    // );
    let mapedData = tData.map((value, index) => {
      let beirut = getNumericValue(value.BeirutSirteSummitContribution);
      let cairo = getNumericValue(value.CairoSummitContribution);
      let dead = getNumericValue(value.DeadSeaSummitContribution);

      rowTotal = beirut + cairo + dead;
      if (index === tData.length - 1)
        setSummitAmount({
          cairoSummitTotal,
          beirutSirteSummitTotal,
          deadSeaSummitTotal,
          grandTotal: rowTotal,
        });

      return {
        BeirutSirteSummitContribution: getInternationalSeparator(
          value.BeirutSirteSummitContribution,
        ),
        CairoSummitContribution: getInternationalSeparator(
          value.CairoSummitContribution,
        ),
        Country: value.Country,
        DeadSeaSummitContribution: getInternationalSeparator(
          value.DeadSeaSummitContribution,
        ),
        totalPayed: new Intl.NumberFormat().format(rowTotal),
      };
    });
    console.log("mapedData", mapedData);
    setCountryContribution(mapedData);
  }, []);

  const getNumericValue = value => {
    return !Number.isNaN(parseInt(value))
      ? parseInt(typeof value === "string" ? value.split(",").join("") : value)
      : 0;
  };

  const getInternationalSeparator = value => {
    return !Number.isNaN(parseInt(value))
      ? Number.isNaN(parseInt(new Intl.NumberFormat().format(value)))
        ? value
        : new Intl.NumberFormat().format(value)
      : value;
  };

  return (
    <Row className={`pb-5`}>
      <h3 className={`text-center mb-5 w-100`}>
        {t("Donor Countries Contributions")}
      </h3>
      <div
        className={`${style.contribution_table_container} shadow overflow-hidden w-100`}
      >
        {countryContribution && countryContribution.length > 0 && (
          <>
            {router.locale === "en" ? (
              <CommonTable
                columnData={columnData}
                data={countryContribution}
                pagination={false}
              />
            ) : (
              <CommonTable
                columnData={columnArData}
                data={countryContribution}
                pagination={false}
              />
            )}
          </>
        )}
      </div>
    </Row>
  );
}
