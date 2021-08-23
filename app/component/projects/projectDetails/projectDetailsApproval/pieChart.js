import Chart from "react-google-charts";

export default function PieChart({ data, color }) {
  return (
    <Chart
      width={"35px"}
      height={"35px"}
      chartType="PieChart"
      data={[
        ["", "Approved"],
        [data.title, Math.round(parseInt(data.percent))],
        ["Others", 100 - Math.round(parseInt(data.percent))],
      ]}
      options={{
        legend: { position: "none" },
        slices: [{ color: color }, { color: `#dbdbdb` }],
        tooltip: { trigger: "none" },
        backgroundColor: { fill: "transparent" },
        pieSliceText: "none",
        pieSliceBorderColor: "none",
        pieHole: 0.4,
      }}
      rootProps={{ "data-testid": "4" }}
    />
  );
}
