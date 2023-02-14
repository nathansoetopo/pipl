import React, { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const [donut, setDonut] = useState({
    options: {
      labels: ["Inbox", "Promotions", "Spam"],
      // fill: {
      //   type: "gradient",
      // },
      
        colors: ['#EB4886', '#FAB934', '#875EC0'],
    
    //   markers: {
    //     colors: ['#F44336', '#E91E63', '#9C27B0']
    //  },
      // dataLabels: {
      //   style: {
      //     colors: ['#F44336', '#E91E63', '#9C27B0']
      //   }
      // },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
          },
        },
      },
    },
    series: [81, 14, 5],
    labels: ["Inbox", "Promotions", "Spam"],
    fill: {
      colors: ['#EB4886', '#FAB934', '#875EC0']
    }
  });
  return (
    <>
      <div className="donut grow-[2]">
        <Chart
          options={donut.options}
          series={donut.series}
          fill="gradient"
          type="donut"
          width="380"
        />
      </div>
    </>
  );
};

export default DonutChart;
