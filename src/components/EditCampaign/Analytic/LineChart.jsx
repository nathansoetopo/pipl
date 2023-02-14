import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [lineChart, setLineChart] = useState({
    series: [
      {
        name: "sent",
        data: [31, 40, 28, 51, 42, 49, 45],
      },
      {
        name: "opened",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "replied",
        data: [9, 16, 35, 22, 23, 55, 11],
      },
    ],
    options: {
      chart: {
        height: "300px",
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        type: "datetime",
        categories: [
          new Date("14 Nov 2012").getTime(),
          new Date("15 Nov 2012").getTime(),
          new Date("16 Nov 2012").getTime(),
          new Date("17 Nov 2012").getTime(),
          new Date("18 Nov 2012").getTime(),
          new Date("19 Nov 2012").getTime(),
          new Date("20 Nov 2012").getTime(),
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      legend: {
        show: true,
      },
    },
  });
  return (
    <ReactApexChart
      options={lineChart.options}
      series={lineChart.series}
      type="area"
      height={350}
    />
  );
};

export default LineChart;
