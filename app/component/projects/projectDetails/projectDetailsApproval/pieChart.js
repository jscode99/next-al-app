import Chart from "react-google-charts";

export default function PieChart({ totalAmountData, totalApproved, color }) {
  console.log("hi");
  return (
    <>
      <Chart
        width={"35px"}
        height={"35px"}
        chartType="PieChart"
        data={[
          ["", "Approved"],
          ["Approved", Math.round((totalAmountData / totalApproved) * 100)],
          ["Others", 100 - Math.round((totalAmountData / totalApproved) * 100)],
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
    </>
  );
}
