import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const App = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "",
        data: [200, 330, 548, 740, 880, 990, 1100, 1380],
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: "80%",
          isFunnel: true,
        },
      },
      colors: [
        "#F44F5E",
        "#E55A89",
        "#D863B1",
        "#CA6CD8",
        "#B57BED",
        "#8D95EB",
        "#62ACEA",
        "#4BC3E6",
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        text: "Pyramid Chart",
        align: "middle",
      },
      xaxis: {
        categories: [
          "Sweets",
          "Processed Foods",
          "Healthy Fats",
          "Meat",
          "Beans & Legumes",
          "Dairy",
          "Fruits & Vegetables",
          "Grains",
        ],
      },
      legend: {
        show: false,
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default App;
