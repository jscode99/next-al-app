import Image from "next/image";
import { Row, Col } from "antd";
import Chart from "react-google-charts";

//styles
import style from "./index.module.sass";
import Map from "./Map";

export default function SectorAllocations({ sectorData }) {
  return (
    <div className={`${style.sector_container}`}>
      <Row>
        <Col className={`w-50`}>
          <div className={`${style.sector_chart_container} h-100 py-4`}>
            <p className={`${style.sector_title} text-white mb-2`}>
              Sector Allocations
            </p>
            <p className={`${style.sector_subtitle} m-0`}>
              Al-Aqsa Approval Distribution
            </p>
            <Row gutter={[4, 4]}>
              {sectorData.map(data => (
                <Col xs={0} sm={0} md={0} lg={8} xl={8} key={data.id}>
                  <div
                    className={`position-relative d-flex justify-content-center align-items-center`}
                    key={data.id}
                  >
                    <div
                      className={`${style.chart_percent} position-absolute d-flex justify-content-center align-items-center w-100 h-100`}
                      style={{ color: data.color }}
                    >
                      {Math.round(parseInt(data.percentage))}%
                    </div>
                    <Chart
                      width={"180px"}
                      height={"180px"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["", "Approved"],
                        [data.title, Math.round(parseInt(data.percentage))],
                        ["Others", 100 - Math.round(parseInt(data.percentage))],
                      ]}
                      options={{
                        // title: "My Daily Activities",
                        legend: { position: "none" },
                        slices: [{ color: data.color }, { color: `#666d77` }],
                        tooltip: { trigger: "none" },
                        backgroundColor: { fill: "transparent" },
                        pieSliceText: "none",
                        pieSliceBorderColor: "none",
                        // Just add this option
                        pieHole: 0.7,
                      }}
                      rootProps={{ "data-testid": "3" }}
                    />
                  </div>
                  <div
                    className={`${style.sector_chart_title} d-flex justify-content-center text-center flex-row px-3`}
                  >
                    {data.title}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col className={`w-50`}>
          <div className={`d-flex justify-content-end`}>
            <Map />
          </div>
        </Col>
      </Row>
    </div>
  );
}
