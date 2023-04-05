import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function Visualization1() {  

  const [dataArray, setDataArray] = useState([]);

  const url = 'http://localhost:8080/';  

  const getAllData = async () => 
  {
    axios.defaults.withCredentials = false;
    
    await axios.get(`${url}vis1`)
    .then((response)  =>  {
      setDataArray(response.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(()=>
  {
    getAllData();
  },[]);

  
  //Filtering functions for the data of different areas used in the dataset.
  const isGlobal = ((dataArray)=>dataArray.area === 1);
  const isNorthern = ((dataArray)=>dataArray.area === 2);
  const isSouthern = ((dataArray)=>dataArray.area === 3);

  const data = {
    datasets: [
      {
        label: "Global",
        data: dataArray.filter(dataArray => isGlobal(dataArray)),
        borderColor: "rgb(255, 70, 112)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
        pointRadius: 1,
      },
      {
        label: "Northern",
        data: dataArray.filter(dataArray => isNorthern(dataArray)),
        borderColor: "rgb(50, 255, 112)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
        pointRadius: 1,
      },
      {
        label: "Southern",
        data: dataArray.filter(dataArray => isSouthern(dataArray)),
        borderColor: "rgb(0, 70, 255)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
        },
        pointRadius: 1,
      },
    ],    
  };

  const options = {
    //locale: 'fi-FI',
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature Anomalies",
      },
    },    
    scales: {
      x: {
            type: 'linear',
            min : 1850,
            max : 2023,
            ticks: {
              //stepSize: 1
              callback: (value) => {return value}
          },
          time: {
            unit : 'year'
          }
      },
      y:
       {
            type: 'linear',
       }      
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>Global historical surface temperature anomalies from January 1850 onwards</h1>
      <Line options={options} data={data} />
    </div>
  );
}