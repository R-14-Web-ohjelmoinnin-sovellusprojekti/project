import React, { useState, useEffect } from "react";
//import { Chart } from "chart.js/auto";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import { DateTime } from "luxon";
import 'chartjs-adapter-luxon';
import './Visualizations.css';

export default function Visualization1() {  

  const [annualData, setAnnualData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [tempReconstruction, setTempReconstruction] = useState([]);

  const [toggleDataset, setDataset] = useState([]);

  const url = 'http://localhost:8080/';

  const getAnnualData = async () => 
  {
    await axios.get(`${url}vis1annual`)
    .then((response)  =>  {
      setAnnualData(response.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const getMonthlyData = async () => 
  {
    await axios.get(`${url}vis1monthly`)
    .then((response)  =>  {
      setMonthlyData(response.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const getReconstructionData = async () => 
  {
    await axios.get(`${url}vis1rec`)
    .then((response)  =>  {
      setTempReconstruction(response.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }  

  useEffect(()=>
  {
    getAnnualData();
    getMonthlyData();
    getReconstructionData();
  },[]);

  
  //Filtering functions for the data of different areas used in the dataset.
  const isGlobal = ((dataArray)=>dataArray.area === 1);
  const isNorthern = ((dataArray)=>dataArray.area === 2);
  const isSouthern = ((dataArray)=>dataArray.area === 3);

  const annualOptions = {
        responsive: true,
        plugins: {
        title: {
          align: "center",
          display: true,
          text: "Annual Data",
        }
      },
      scales:
      {
        x: {
          type: 'time',
          
          time: {
          parser: 'y',
          tooltipFormat: 'yyyy',
          },
        },
        
        y: {
            type: 'linear',
        }
      },
      parsing: {
          xAxisKey: "time",
          yAxisKey: "anomaly",
      },
      spanGaps: true
  };

  const monthlyOptions = {
    responsive: true,
      plugins: {
        title: {
          align: "center",
          display: true,
          text: "Monthly Data",
    }
  },
    parsing: {
        xAxisKey: "time",
        yAxisKey: "anomaly",
    },
    scales:
      {
        x: {
          type: 'time',
          //min: new Date('1850-01').valueOf(),
          //max: new Date('2023-01').valueOf(),
          time: {
            tooltipFormat: 'yyyy LLLL',
            unit: 'month',
            parser: "yyyy-LL",         
            displayFormats: {
            month: 'yyyy LLLL'
          },
          
        },
      },
      y: {
          type: 'linear',
          //min: -2,
          //max: 2
      }
    },
    spanGaps: true,
    pointRadius: 0
  };

  const annualDataset = {
    datasets: [
      {
        label: "Global annual anomalies",
        data: annualData.filter(annualData => isGlobal(annualData)),
        borderColor: "rgb(50, 255, 112)",
        backgroundColor: "rgba(32, 255, 32, 0.5)",
      },
      {
        label: "North annual anomalies",
        data: annualData.filter(annualData => isNorthern(annualData)),
        borderColor: "rgb(0, 50, 255)",
        backgroundColor: "rgba(32, 32, 255, 0.5)",
      },
      {
        label: "South annual anomalies",
        data: annualData.filter(annualData => isSouthern(annualData)),
        borderColor: "rgb(255, 50, 112)",
        backgroundColor: "rgba(255, 32, 32, 0.5)",
      },
      {
        label: "Reconstruction",
        data: tempReconstruction,
        borderColor: "rgb(255, 255, 112)",
        backgroundColor: "rgba(255, 255, 32, 0.5)",
      },
  ]};

    const monthlyDataset = {
      datasets: [
      {
        label: "Global monthly anomalies",
        data: monthlyData.filter(monthlyData => isGlobal(monthlyData)),
        borderColor: "rgb(50, 255, 112)",
        backgroundColor: "rgba(32, 255, 32, 0.5)",
      },
      {
        label: "North monthly anomalies",
        data: monthlyData.filter(monthlyData => isNorthern(monthlyData)),
        borderColor: "rgb(0, 50, 255)",
        backgroundColor: "rgba(32, 32, 255, 0.5)",
      },
      {
        label: "South monthly anomalies",
        data: monthlyData.filter(monthlyData => isSouthern(monthlyData)),
        borderColor: "rgb(255, 50, 112)",
        backgroundColor: "rgba(255, 32, 32, 0.5)",
      },         
    ]};

  function timeAnnual()
  {
    setDataset(0);
  };

  function timeMonthly()
  {
    setDataset(1);
  };

  function showRecData()
  {
    console.log(tempReconstruction);
  }

  let view = <Line options = {annualOptions} data = {annualDataset} />;

  switch(toggleDataset)
  {
    case 0:
      view = <Line options = {annualOptions} data = {annualDataset} />
      break;
    case 1:
      view = <Line options = {monthlyOptions} data = {monthlyDataset} />
      break;
  }    
  return (
    <div className="vis1-container">
      <h1>Global historical surface temperature anomalies from January 1850 onwards and 2000-year reconstruction</h1>
        <div className="vis1-buttons">
          <button onClick={timeAnnual}>Annual</button>
          <button onClick={timeMonthly}>Monthly</button>
        </div>     
      {view}
      <p>
                This chart shows global and regional temperature anomalies starting from January 1850 and a 2000-year temperature reconstruction for the northern hemisphere.
                You can switch between monthly and annual datasets by clicking on the 'annual' or 'monthly' buttons.

            </p>
            <p> <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Description for Temperature anomalies from 1850</a><br></br>
                <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html">Dataset for Temperature anomalies from 1850</a><br></br><br></br>

                <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">Description for 2000-year Temperature Reconstruction</a><br></br>
                <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">Dataset for 2000-year Temperature Reconstruction</a><br></br>
                <a href="https://www.nature.com/articles/nature03265">Full study for 2000-year Temperature Reconstruction</a>
            </p>
    </div>
  );  
}