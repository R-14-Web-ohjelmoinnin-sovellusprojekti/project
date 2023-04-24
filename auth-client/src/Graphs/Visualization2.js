import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chartjs-adapter-luxon";

export default function Visualization2() {

  const [annualData, setAnnualData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [iceCore1Data, setIceCore1Data] = useState([]);
  const [iceCore2Data, setIceCore2Data] = useState([]);
  const [iceCore3Data, setIceCore3Data] = useState([]);

  const url = 'http://localhost:8080/';

  const getAllYearlies = async () => {
    await axios.get(`${url}vis2Annual`)
      .then((response) => {
        setAnnualData(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const getAllMonthlies = async () => {
    await axios.get(`${url}vis2Monthly`)
      .then((response) => {
        setMonthlyData(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const getAllIceCore1 = async () => {
    await axios.get(`${url}vis2Icecore1`)
      .then((response) => {
        setIceCore1Data(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const getAllIceCore2 = async () => {
    await axios.get(`${url}vis2Icecore2`)
      .then((response) => {
        setIceCore2Data(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const getAllIceCore3 = async () => {
    await axios.get(`${url}vis2Icecore3`)
      .then((response) => {
        setIceCore3Data(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAllYearlies();
    getAllMonthlies();
    getAllIceCore1();
    getAllIceCore2();
    getAllIceCore3();
  }, []);


  const data = {
    datasets: [
      {
        label: "Annual",
        parsing: true,
        data: annualData,
        borderColor: "rgb(255, 70, 112)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 2,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        }, 
      },
      {
        label: "Monthly",
        parsing: true,
        data: monthlyData,
        borderColor: "rgb(50, 255, 112)",
        backgroundColor: "rgba(50, 255, 112, 0.5)",
        pointRadius: 2,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        }, 
      },
      {
        label: "IceCore1",
        parsing: true,
        data: iceCore1Data,
        borderColor: "rgb(0, 153, 255)",
        backgroundColor: "rgba(0, 153, 255, 0.5)",
        pointRadius: 2,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        }, 
      },
      {
        label: "IceCore2",
        parsing: true,
        data: iceCore2Data,
        borderColor: "rgb(255, 128, 0)",
        backgroundColor: "rgba(255, 128, 0, 0.5)",
        pointRadius: 2,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        }, 
      },
      {
        label: "IceCore3",
        parsing: true,
        data: iceCore3Data,
        borderColor: "rgb(153, 0, 255)",
        backgroundColor: "rgba(153, 0, 255, 0.5)",
        pointRadius: 2,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "co2",
        }, 
      },
    ]
  };  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Atmospheric CO2 concentrations",
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'year',
            tooltipFormat: 'yyyy-LL'
        },
      }
    },
      y: {
        type: 'linear',
        display: true,
      },
    };

  return (
    <div class="vis2-container">
      <h1>CO2 concentrations</h1>
      <Line options={options} data={data} />
    </div>
  );
}
