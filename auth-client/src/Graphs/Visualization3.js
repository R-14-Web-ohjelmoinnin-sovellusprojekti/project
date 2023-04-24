import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chartjs-adapter-luxon";

export default function Visualization3() {
  const [gastData, setGastData] = useState([]);
  const [cdData, setCdData] = useState([]);
  const url = "http://localhost:8080/";

  const getGastData = async () => {
    try {
      const response = await axios.get(`${url}vis3gast`);
      setGastData(response.data);
    } catch (error) {
      console.error(`Error fetching gast data: ${error}`);
    }
  };

  const getCdData = async () => {
    try {
      const response = await axios.get(`${url}vis3cd`);
      setCdData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Error fetching cd data: ${error}`);
    }
  };

  useEffect(() => {
    getGastData();
    getCdData();

  }, []);

  const data = {
    datasets: [
      {
        label: "Global data",
        data: gastData,
        yAxisID: "left-y-axis",
        borderColor: "rgb(255, 0, 0)",
        backgroundColor: "rgba(255, 0, 0, 0.8)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "gast",
        },
        pointRadius: 1,
      },
      {
        label: "Carbon data",
        data: cdData,
        yAxisID: "right-y-axis",
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 1)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "carbon_dioxide",
        },
        pointRadius: 1,
      },
    ],
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats: {
            year: 'YYYY'
          }
        }
      },
      yAxes: [
        {
          id: "left-y-axis",
          type: "linear",
          position: "left",
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Gast',
          },
        },
        {
          id: "right-y-axis",
          type: "linear",
          position: "right",
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'CD',
          },
        },
      ],
    },
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
      x: {
        type: "linear",
      },
    },
  };
  

  return (
    <div class="vis3-container">
      <h1>Evolution of global temperature over the past two million years</h1>
      <Line data={data} options={options} />
    </div>
  );
}
