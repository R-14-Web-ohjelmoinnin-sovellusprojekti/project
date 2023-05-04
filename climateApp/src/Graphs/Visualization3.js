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
        xAxisID: "left-x-axis",
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
            unit: 'YYYY'
          }
        }
      },
      y: [
        {
          id: "left-x-axis",
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
      },
    },
    scales: {
      x: {
        type: "linear",
        diplay: true,
        position: "bottom",
        min: -1000,
        max: 805000,
      },
      yAxis: {
        type: "linear",
        display: true,
        position: "right",
        min: -7,
        max: 2.5,
      },
    },
  };
  

  return (
    <div class="vis3-container">
      <div>
        <h1>Evolution of global temperature over the past two million years</h1>
      </div>
      <Line data={data} options={options} />
      <p> 
        The graph shows the evolution of global temperature over the past two million years.
        You can find more detailed information below
      </p>
      <p>
        <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Description</a><br></br>
        <a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">Dataset</a><br></br>
        <a href="https://www.southampton.ac.uk/~cpd/history.html">Human Evolution dataset</a>
      </p>
    </div>
  );
}
