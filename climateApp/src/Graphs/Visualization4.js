import React, { useState, useEffect, useRef } from "react";
import Select from "react-select"
//import { Chart } from "chart.js/auto";
import { Line, Chart } from "react-chartjs-2";
import axios from "axios";
import { DateTime } from "luxon";
import 'chartjs-adapter-luxon';
import './Visualizations.css';

export default function TestingGraph() {  

  // Array for storing countries' emission data
  const [emissionData, setEmissionData] = useState([]);

  // Currently selected countries to display in the graph
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown menu
  const handleChange = (e) => {
    var tempValue = Array.isArray(e) ? e.map(x => x.value) : [];
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);

    updateVisibleData(tempValue);
  }
  //Set visibility for the currently selected dataset 
  function updateVisibleData(nameArray){
    var curChart = chartRef.current;
    console.log(selectedValue.length);
    if(curChart){
      for(let i = 0; i < curChart.data.datasets.length; i++){
        if(nameArray.includes(curChart.data.datasets[i].label)){
          curChart.setDatasetVisibility(i, true);         
        }
        else{
          curChart.setDatasetVisibility(i, false);
        }
      }
      //curChart.update();
    }
  }
  //Array containing all country names and other areas fetched from the database, formatted to {label, value}
  //both values containing the name of the country, needed for the dropdown menu.
  const [countryNames, setCountryNames] = useState([""]);

  const [listOfCountries, setListOfCountries] = useState([""]);

  const url = 'http://localhost:8080/';

  const chartRef = useRef(null);

  useEffect(()=> {
    const getData = async () => {
      await axios.get(`${url}vis4data`).then((response) => {
      let result = response.data;
      //Variable checking for duplicated in the iterated names, if it matches the current array name, skip adding the name to the list.
      var tempName = "";
      var tempNames = [];
      var countryList = [];
      for(let i = 0; i < result.length; i++)
      {
        var countryName =  result[i]["country"];
        if(tempName != countryName)
        {          
            //console.log(countryName);
            tempNames.push({value: countryName, label: countryName});
            countryList.push(countryName);
            tempName = countryName;            
        }
      }
        setCountryNames(tempNames);
        setListOfCountries(countryList);
        setEmissionData(result);
      });
    };
    getData();
  }, []);

  const isFinland = ((dataArray)=>dataArray.country === "Finland");

  function getLabels(){
    var tempLabels = [];
    for(let i = 0; i < countryNames.length; i++){
      tempLabels.push(countryNames[i]["label"])
    }
    return tempLabels;
  }

  let countryData = {
    labels: getLabels(),
    datasets: [/*{
      label: "Finland",
      data: emissionData.filter(d => isFinland(d)),
      borderColor: "rgb(50, 255, 112)",
      backgroundColor: "rgba(32, 255, 32, 0.5)",
    },*/
]};

  var bg = [
    'rgba(27, 158, 119, 0.2)',
    'rgba(217, 95, 2, 0.2)',
    'rgba(117, 112, 179, 0.2)',
    'rgba(231, 41, 138, 0.2)',
    'rgba(102, 166, 30, 0.2)',
    'rgba(230, 171, 2, 0.2)',
    'rgba(166, 118, 29, 0.2)',
    'rgba(102, 102, 102, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(133, 155, 888, 0.2)',
    'rgba(255, 126, 50, 0.2)',
    'rgba(75, 162, 162, 0.2)',
    'rgba(255, 15, 100, 0.2)',
    'rgba(205, 122, 66, 0.2)',
    'rgba(255, 122, 78, 0.2)',
    'rgba(75, 99, 99, 0.2)',
    'rgba(152, 199, 61, 0.2)',
    'rgba(259, 159, 12, 0.2)',
    'rgba(125, 112, 64, 0.2)',
    'rgba(100, 159, 45, 0.2)',
    'rgba(211, 185, 31, 0.2)',
    'rgba(255, 283, 82, 0.2)',
  ];
  var bc = [
    'rgb(27, 158, 119)',
    'rgb(217, 95, 2)',
    'rgb(117, 112, 179)',
    'rgb(231, 41, 138)',
    'rgb(102, 166, 30)',
    'rgb(230, 171, 2)',
    'rgb(166, 118, 29)',
    'rgb(102, 102, 102)',
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 206, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(133, 155, 123)',
    'rgb(255, 126, 50)',
    'rgb(75, 162, 162)',
    'rgb(255, 15, 100)',
    'rgb(205, 122, 66)',
    'rgb(255, 122, 78)',
    'rgb(75, 99, 99)',
    'rgb(152, 199, 61)',
    'rgb(259, 119, 12)',
    'rgb(125, 112, 64)',
    'rgb(100, 159, 45)',
    'rgb(125, 185, 62)',
    'rgb(255, 283, 82)',
  ];
  
  //function initializeData(){
    var tempName = "";
    var tempData = [];

    for (var i = 0; i < emissionData.length; i++) {
      var countryName = emissionData[i]["country"];
        //If current country name differs from the former, push the dataset and continue, clearing the tempData array
        if(tempName!=countryName && i != 0){

          countryData.datasets.push(
            {
              label: emissionData[i-1]["country"],
              backgroundColor: bg[i % bc.length],
              borderColor: bc[i % bg.length],
              data: tempData.filter(Boolean),
              hidden: true
            })

          tempData = []; //Clear temporary data and start adding new data for the next dataset
          tempName = countryName;
        }
        else {  //If the country names match, push data to array to later push the whole dataset when they don't match anymore
          var tempObject = emissionData[i];

          if(tempObject.country == "China")
          {
            console.log(i);
          }

          tempData.push(tempObject);
          tempObject = {};
          tempName = countryName;
        }
        //Special handling for the last dataset push, name comparing doesn't work for the last item to determine when to push the last element to the dataset
        if(i == emissionData.length -1)
        {
          countryData.datasets.push(
            {
              label: emissionData[i]["country"],
              backgroundColor: bg[i % bc.length],
              borderColor: bc[i % bg.length],
              data: tempData.filter(Boolean),
              hidden: true
            })
        }
  }

  const options = {
        responsive: true,
        plugins: {
        title: {
          align: "center",
          display: true,
          text: "CO2 Emission Data",

        },
        tooltip: {
          mode: 'index',
          axis: 'xy',
          intersect: 'false',
        },
        legend: {
          labels: {
            filter: function(item, chart) {
                if(listOfCountries.includes(item.text) && selectedValue.includes(item.text)){
                  return item.text;
              }
            }
          }
        },
      },
   
      scales:
      {
        x: {
          type: 'time',
          time: {
            tooltipFormat: 'yyyy',
            unit: 'year',
            parser: 'yyyy',
            displayFormats: {
              year: 'yyyy'
            },
          },
          title: {
            display: true,
            text: 'Year'
          },
        },
        y: {
            type: 'linear',
            stacked: true,
            title: {
              display: true,
              text: 'Emissions'
            },
            ticks: {
              callback: function(value, index) {
                 if (value !== -1) { return value; }
                 else { return "NO DATA"}
              }
            }
        }
      },
      parsing: {
          xAxisKey: "time",
          yAxisKey: "emissions",
      },
      spanGaps: true
  };

  const filterCountries = (inputValue) => {
    console.log(inputValue);
    return countryNames.filter((i) =>
      i.label.toUpperCase().includes(inputValue.toUpperCase())      
    );
  };

  const loadCountries = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterCountries(inputValue))
    }, 100)
  }
  
  let view = <Line options = {options} data = {countryData} />;

  //Dropdown selection object
  let selections = <Select
  onChange={handleChange} // assign onChange function
  isMulti
  placeholder="Select country or area"
  name="Country selection"
  options={countryNames}
  cacheOptions loadOptions={loadCountries}
  className="basic-multi-select"
  classNamePrefix="select"
  />;

  return (
    <div className="vis4-container">
      <h1>National Carbon Emissions starting from 1959</h1>
        <div>{selections}</div>        
        {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
      </div>}
      <div><Chart ref={chartRef} type='line' data={countryData} options={options} /></div> 
      <p>
                This chart shows co2 emissions of each selected country or combined regions. The values presented on the y-axis are in million tonnes of CO2 per year.<br></br>
                The data starts from the year 1959. Some of the areas do not have available data for the whole timeframe and are marked with value "-1" if the data is unavailable.<br></br>
                Select an area from the dropdown list to add it to the chart.<br></br>
                Detailed information of the data is provided in the links below.
            </p>
            <p> <a href="https://essd.copernicus.org/articles/14/1917/2022/">Description</a><br></br>
                <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset</a><br></br><br></br>
            </p>
    </div>

  );
}