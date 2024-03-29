import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Row, Table } from "antd";
//style
import style from "./index.module.sass";

export default function CommonTable({ columnData, data, pagination, scroll }) {
  // console.log("columnData", columnData);
  // console.log("data", data);

  let router = useRouter();

  const [column, setColumn] = useState(null);
  const [tableData, setTableData] = useState(null);

 

  useEffect(() => {
    let columns = columnData.map(cData => {
      return {
        title: cData.title,
        width: cData.width,
        dataIndex: cData.dataIndex,
        render: cData.render ? cData.render : ``,
        // sorter: {
        //   compare: (a, b) => a.dataIndex - b.dataIndex,
        // },
      };
    });

    //   let tableData = data.map((data) => {
    //     return {
    //       key: data.id,

    //    }
    //  })

    setColumn(columns);
    setTableData(data);
  }, [data,columnData]);

  //OnChange Function
  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div
      className={`${style.contribution_table_container} w-100 overflow-hidden shadow`}
    >
      <Table
        columns={column}
        dataSource={tableData}
        onChange={onChange}
        pagination={pagination}
        scroll={scroll}
      />
    </div>
  );
}
