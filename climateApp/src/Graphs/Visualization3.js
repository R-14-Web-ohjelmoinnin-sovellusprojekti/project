import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chartjs-adapter-luxon";

export default function Visualization3() {
  const [gastData, setGastData] = useState([]);
  const [cdData, setCdData] = useState([]);
  const [eventData, setEventData] = useState([]);

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

  const getEventData = async () => {
    try {
      const response = await axios.get(`${url}humanevents`);
      setEventData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Error fetching cd data: ${error}`);
    }
  };

  useEffect(() => {
    getGastData();
    getCdData();
    getEventData();
  }, []);

  const data = {
    datasets: [
      {
        label: "Global data",
        data: gastData,
        yAxisID: 'y',
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
        yAxisID: 'y1',
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 1)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "carbon_dioxide",
        },
        pointRadius: 1,
      },
      {
        label: "Event data",
        data: eventData,
        //yAxisID: 'y1',
        borderColor: "rgb(0, 127, 0)",
        backgroundColor: "rgba(0, 255, 0, 1)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "graphvalue",
        },
        pointRadius: 10,
        pointStyle: 'triangle',
        showLine: false,

        tooltip: {
          callbacks: {
              label: function(context) {
                  let label = context.dataset.label || '';
                  let eventText = context.dataset.data[context.dataIndex]["event"];

                  if (label && context.parsed.y !== null) {
                      label = eventText;
                  }
                  return label;
              }
          }            
        }
      },
    ],
    scales: {
      scales: {
        y: {
          type: 'linear',
          display: false,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: false,
          position: 'right',
  
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    }
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
        display: true,
        position: "bottom",
        min: 0,
        max: 2000000,
        reverse: true,
        ticks: {
          callback: function(value, index, ticks) {
            if(value != 0){
            return value + " BC";
            }
            else{
              return value + " AD"
            }
        }
      },
      },
      y: {
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
        The multiaxis line chart shows the evolution of global temperature and CO2 concentration changes over the past two million years.
        Horizontal axis shows years in thousands of years and vertical axis shows temperature in degrees celsius and CO2 concentration in ppm.
        Additionally, the graph shows major human evolution and culture events that happened during the same period.
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