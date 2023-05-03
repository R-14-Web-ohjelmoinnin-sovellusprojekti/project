import React, { useState, useEffect, useRef } from "react";
import Select from "react-select"
import AsyncSelect from 'react-select/async';
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
    console.log(tempValue);
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
          console.log("TRYING TO CHANGE VISIBIILITY FOR LABEL : " + curChart.data.datasets[i].label + "AT INDEX : " + i);
        }
        else{
          curChart.setDatasetVisibility(i, false);
        }
      }
      curChart.update();
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
    'rgba(27, 158, 119, 0.5)',
    'rgba(217, 95, 2, 0.5)',
    'rgba(117, 112, 179, 0.5)',
    'rgba(231, 41, 138, 0.5)',
    'rgba(102, 166, 30, 0.5)',
    'rgba(230, 171, 2, 0.5)',
    'rgba(166, 118, 29, 0.5)',
    'rgba(102, 102, 102, 0.5)'
  ];
  var bc = [
    'rgb(27, 158, 119)',
    'rgb(217, 95, 2)',
    'rgb(117, 112, 179)',
    'rgb(231, 41, 138)',
    'rgb(102, 166, 30)',
    'rgb(230, 171, 2)',
    'rgb(166, 118, 29)',
    'rgb(102, 102, 102)'
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
              backgroundColor: bc[i % bc.length],
              data: tempData.filter(Boolean),
              hidden: true
            })

          tempData = []; //Clear temporary data and start adding new data for the next dataset
          tempName = countryName;
        }
        else {  //If the country names match, push data to array to later push the whole dataset when they don't match anymore
          tempData.push(emissionData[i]);
          tempName = countryName;
        }
        //Special handling for the last dataset push, name comparing doesn't work for the last item to determine when to push the last element to the dataset
        if(i == emissionData.length -1)
        {
          countryData.datasets.push(
            {
              label: emissionData[i]["country"],
              backgroundColor: bc[i % bc.length],
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
          text: "Emission Data",
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
            }
          },
          //min: new Date('1959').valueOf(),
          //max: 2023//max: new Date('2023').valueOf()
        },
        y: {
            type: 'linear',
            //min: -1,
            //max: 1.5
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
      <Chart ref={chartRef} type='line' data={countryData} options={options} />;
    </div>
  );
}