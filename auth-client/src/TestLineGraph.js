import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import tempData from "./data/testdata.json";

export default function TestLineGraph() {
  const data = {
    datasets: [
      {
        label: "Temperature delta",
        data: [...tempData],//.reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "tempDelta",
        parsing: {
          xAxisKey: "TimeYear",
          yAxisKey: "TempDelta",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Test Temperature plot",
      },
    },
    scales: {
      co2: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>TestLineGraph</h1>
      <Line options={options} data={data} />
    </div>
  );
}
