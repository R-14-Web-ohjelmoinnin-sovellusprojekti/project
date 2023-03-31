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
      console.log(response.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(()=>
  {
    getAllData();
  },[]);

  const data = {
    datasets: [
      {
        parsing: true,

        label: "Temperature Delta",
        data: [...dataArray],

        borderColor: "rgb(255, 70, 112)",
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
            type: 'linear',
      },
      y:
       {
            type: 'linear',
       }
      
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>TestLineGraph</h1>
      <Line options={options} data={data} />
    </div>
  );
}
