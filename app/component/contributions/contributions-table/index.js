import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row, Table } from "antd";
import { stringToNumberConverter } from "../../../services/commonService";

//Common Component
import CommonTable from "../../../common-component/common-table/CommonTable";
//Style
import style from "./index.module.sass";

export default function ContributionsTable({ tData, setSummitAmount }) {
  console.log("overallArContributions", tData);
  const [countryContribution, setCountryContribution] = useState([]);
  let router = useRouter();
  const { t } = useTranslation("common");
  let columnData = [
    {
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-start m-0 text-capitalize`}
        >
          {t("country")}
        </p>
      ),
      dataIndex: "Country",
      render: (Country) => (
        <p className={`${style.table_name} fw-bold text-start text-capitalize`}>
          {Country}
        </p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-center m-0 text-capitalize`}
        >
          {t("cairo summit")}
        </p>
      ),
      dataIndex: "CairoSummitContribution",
      render: (Cairo) => (
        <p className={`${style.table_name} text-center m-1 text-capitalize`}>
          {Cairo}
        </p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold d-flex justify-content-center m-0`}
        >
          {t("beirut & sirte summit")}
        </p>
      ),
      dataIndex: "BeirutSirteSummitContribution",
      render: (Beirut) => (
        <p className={`${style.table_name} text-center m-1 text-capitalize`}>
          {Beirut}
        </p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title} text-capitalize fw-bold d-flex justify-content-center m-0`}
        >
          {t("dead sea summit")}
        </p>
      ),
      dataIndex: "DeadSeaSummitContribution",
      render: (Beirut) => (
        <p className={`${style.table_name} text-center m-1 text-capitalize`}>
          {Beirut}
        </p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title} fw-bold d-flex justify-content-center m-0 text-capitalize`}
        >
          {t("total payed")}
        </p>
      ),
      dataIndex: "totalPayed",
      render: (total) => (
        <p className={`${style.table_name} text-capitalize text-center m-1`}>
          {total}
        </p>
      ),
    },
  ];

  let columnArData = [
    {
      title: (
        <p
          className={`${style.table_title_ar} d-flex justify-content-end m-0 pe-3`}
        >
          {t("total payed")}
        </p>
      ),
      dataIndex: "totalPayed",
      render: (name) => (
        <p className={`d-flex justify-content-center m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} d-flex justify-content-end m-0 pe-3`}
        >
          {t("dead sea summit")}
        </p>
      ),
      dataIndex: "DeadSeaSummitContribution",
      render: (name) => (
        <p className={`d-flex justify-content-center m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} d-flex justify-content-end m-0 pe-3`}
        >
          {t("beirut & sirte summit")}
        </p>
      ),
      dataIndex: "BeirutSirteSummitContribution",
      render: (name) => (
        <p className={`d-flex justify-content-center m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} d-flex justify-content-end m-0 pe-3`}
        >
          {t("cairo summit")}
        </p>
      ),
      dataIndex: "CairoSummitContribution",
      render: (name) => (
        <p className={`d-flex justify-content-center m-0 pe-3`}>{name}</p>
      ),
    },
    {
      title: (
        <p
          className={`${style.table_title_ar} d-flex justify-content-end m-0 pe-3`}
        >
          {t("country")}
        </p>
      ),
      dataIndex: "Country",
      render: (Country) => (
        <p
          className={`${style.table_name_ar} d-flex justify-content-end m-0 pe-3`}
        >
          {Country}
        </p>
      ),
    },
  ];

  useEffect(() => {
    let cairoSummitTotal = 0;
    let beirutSirteSummitTotal = 0;
    let deadSeaSummitTotal = 0;
    let rowTotal = 0;
    tData
      .sort((a, b) => {
        if (a.Country < b.Country) {
          return -1;
        }
        if (a.Country > b.Country) {
          return 1;
        }
        return 0;
      })
      .forEach((value, index) => {
        if (!Number.isNaN(parseInt(value.CairoSummitContribution)))
          cairoSummitTotal += parseInt(
            value.CairoSummitContribution.split(",").join("")
          );

        if (!Number.isNaN(parseInt(value.BeirutSirteSummitContribution)))
          beirutSirteSummitTotal += parseInt(
            value.BeirutSirteSummitContribution.split(",").join("")
          );

        if (!Number.isNaN(parseInt(value.DeadSeaSummitContribution)))
          deadSeaSummitTotal += parseInt(
            value.DeadSeaSummitContribution.split(",").join("")
          );
      });
    // console.log("testing", tData[tData.length - 1].Country.props.children);
    if (
      tData[tData.length - 1].Country &&
      !tData[tData.length - 1].Country.props
      // &&
      // !tData[tData.length - 1].Country.props.children &&
      // (tData[tData.length - 1].Country.props.children.toLowerCase() !==
      //   "total" ||
      //   tData[tData.length - 1].Country.props.children.toLowerCase() !==
      //     "مجموع")
    ) {
      if (cairoSummitTotal)
        cairoSummitTotal = new Intl.NumberFormat().format(cairoSummitTotal);
      if (beirutSirteSummitTotal)
        beirutSirteSummitTotal = new Intl.NumberFormat().format(
          beirutSirteSummitTotal
        );
      if (deadSeaSummitTotal)
        deadSeaSummitTotal = new Intl.NumberFormat().format(deadSeaSummitTotal);

      tData.push({
        CairoSummitContribution: <b>{"$" + cairoSummitTotal}</b>,
        DeadSeaSummitContribution: <b>{"$" + deadSeaSummitTotal}</b>,
        BeirutSirteSummitContribution: <b>{"$" + beirutSirteSummitTotal}</b>,
        Country: <b>{t("total")}</b>,
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
      let beirut = getNumericValue(
        stringToNumberConverter(
          value.BeirutSirteSummitContribution &&
            value.BeirutSirteSummitContribution.props
            ? value.BeirutSirteSummitContribution.props.children
            : value.BeirutSirteSummitContribution
        )
      );
      let cairo = getNumericValue(
        stringToNumberConverter(
          value.CairoSummitContribution && value.CairoSummitContribution.props
            ? value.CairoSummitContribution.props.children
            : value.CairoSummitContribution
        )
      );
      let dead = getNumericValue(
        stringToNumberConverter(
          value.DeadSeaSummitContribution &&
            value.DeadSeaSummitContribution.props
            ? value.DeadSeaSummitContribution.props.children
            : value.DeadSeaSummitContribution
        )
      );
      console.log("beirut", beirut);
      // console.log(
      //   "total",
      //   beirut &&
      //     beirut.props &&
      //     beirut.props.children &&
      //     cairo &&
      //     cairo.props &&
      //     cairo.props.children &&
      //     dead &&
      //     dead.props &&
      //     dead.props.children
      //     ? beirut.props.children
      //     : // stringToNumberConverter(beirut.props.children)
      //       // +
      //       //     stringToNumberConverter(cairo.props.children) +
      //       //     stringToNumberConverter(dead.props.children)
      //       beirut + cairo + dead,
      // );
      rowTotal =
        beirut && beirut.props && cairo && cairo.props && dead && dead.props
          ? stringToNumberConverter(beirut.props.children) +
            stringToNumberConverter(cairo.props.children) +
            stringToNumberConverter(dead.props.children)
          : beirut + cairo + dead;

      if (index === tData.length - 1)
        setSummitAmount({
          cairoSummitTotal,
          beirutSirteSummitTotal,
          deadSeaSummitTotal,
          grandTotal: rowTotal,
        });

      return {
        BeirutSirteSummitContribution: getInternationalSeparator(
          value.BeirutSirteSummitContribution
        ),
        CairoSummitContribution: getInternationalSeparator(
          value.CairoSummitContribution
        ),
        Country: value.Country,
        DeadSeaSummitContribution: getInternationalSeparator(
          value.DeadSeaSummitContribution
        ),
        totalPayed:
          value.BeirutSirteSummitContribution &&
          value.BeirutSirteSummitContribution.props &&
          value.DeadSeaSummitContribution &&
          value.DeadSeaSummitContribution.props &&
          value.CairoSummitContribution &&
          value.CairoSummitContribution.props ? (
            <b>{"$" + new Intl.NumberFormat().format(rowTotal)}</b>
          ) : (
            "$" + new Intl.NumberFormat().format(rowTotal)
          ),
      };
    });
    console.log("mapedData", mapedData);
    setCountryContribution(mapedData);
  }, []);

  const getNumericValue = (value) => {
    return !Number.isNaN(parseInt(value))
      ? parseInt(typeof value === "string" ? value.split(",").join("") : value)
      : 0;
  };

  const getInternationalSeparator = (value) => {
    return !Number.isNaN(parseInt(value))
      ? Number.isNaN(parseInt(new Intl.NumberFormat().format(value)))
        ? value
        : "$" + new Intl.NumberFormat().format(value)
      : value;
  };

  return (
    <div className={`${style.bg}`}>
      <div className={`${style.container} px-5`}>
        <Row className={`pb-5`}>
          <h3
            className={`${
              router.locale === "en" ? style.donor_title : style.donor_title_ar
            } text-center mb-4 w-100 text-capitalize`}
          >
            {t("donor countries contributions")}
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
                    scroll={{ x: 700 }}
                  />
                ) : (
                  <CommonTable
                    columnData={columnArData}
                    data={countryContribution}
                    pagination={false}
                    scroll={{ x: 700 }}
                  />
                )}
              </>
            )}
          </div>
        </Row>
      </div>
    </div>
  );
}
