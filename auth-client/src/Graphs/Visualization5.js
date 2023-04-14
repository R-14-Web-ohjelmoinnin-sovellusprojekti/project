import React, { useState, useEffect, useRef } from "react";

import { Doughnut, getElementsAtEvent } from "react-chartjs-2";
import Constants from '../Constants.json'
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function getSector(data, ide){
    const result = [];

    data.forEach(obj => {
        if (obj.ide === ide){
            const { sector } = obj;
            result.push( sector )
        }
    });

    return result;
}

function getEmissions(data, ide){
    const result = [];

    data.forEach(obj => {
        if (obj.ide === ide){
            const { emissions } = obj;
            result.push( emissions )
        }
    });

    return result;
}

export default function Visualization5() {

  const [visData, setVisData] = useState([]);
  const [dataState, setDataState] = useState("");

  const getVis5Data = async () => {
    await axios.get(Constants.API_ADDRESS + '/vis5')
      .then((response) => {
        setVisData(response.data);

            console.log("XXXX");
            console.log(response.data);
        })
      .catch(error => console.error(`Error: ${error}`));
   }

 useEffect(() => {
     getVis5Data();
  }, []);

    const data = {

        labels: getSector(visData, "main"),
        datasets: [
            {
                data: getEmissions(visData, "main"),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const energyData = {

        labels: getSector(visData, "energy"),
        datasets: [
            {
                data: getEmissions(visData, "energy"),
                backgroundColor: [
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
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(133, 155, 888, 1)',
                    'rgba(255, 126, 50, 1)',
                    'rgba(75, 162, 162, 1)',
                    'rgba(255, 15, 100, 1)',
                    'rgba(205, 122, 66, 1)',
                    'rgba(255, 122, 78, 1)',
                    'rgba(75, 99, 99, 1)',
                    'rgba(152, 199, 61, 1)',
                    'rgba(259, 119, 12, 1)',
                    'rgba(125, 112, 64, 1)',
                    'rgba(100, 159, 45, 1)',
                    'rgba(125, 185, 62, 1)',
                    'rgba(255, 283, 82, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    const  industryData= {

        labels: getSector(visData, "industy"),
        datasets: [
            {
                data: getEmissions(visData, "industry"),
                backgroundColor: [
                    'rgba(75, 162, 162, 0.2)',
                    'rgba(255, 15, 100, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 162, 162, 1)',
                    'rgba(255, 15, 100, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const afluData = {

        labels: getSector(visData, "aflu"),
        datasets: [
            {
                data: getEmissions(visData, "aflu"),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(278, 12, 50, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 126, 50, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const  wasteData= {

        labels: getSector(visData, "waste"),
        datasets: [
            {
                data: getEmissions(visData, "waste"),
                backgroundColor: [
                    'rgba(259, 119, 12, 0.2)',
                    'rgba(125, 112, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(259, 119, 12, 1)',
                    'rgba(125, 112, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    
    const options = {
        responsive: true,
        plugins: {
            title: {
                align: "center",
                display: true,
                text: "Visualization 5",
            }
        }
         
    };

    const dataRef = useRef();

    const onClick = (event) => {
        if (getElementsAtEvent(dataRef.current, event).length > 0) {
            const datasetIndexNum = getElementsAtEvent(dataRef.current, event)[0].datasetIndex;
            const dataPoint = getElementsAtEvent(dataRef.current, event)[0].index;
            
            console.log(`Dataset: ${datasetIndexNum} and Data: ${dataPoint}`);

        if (getElementsAtEvent(dataRef.current, event)[0].index == 0){
            setDataState(0);
        }
        else if (getElementsAtEvent(dataRef.current, event)[0].index == 1){
            setDataState(1);
        }
        else if (getElementsAtEvent(dataRef.current, event)[0].index == 2){
            setDataState(2);
        }
        else if (getElementsAtEvent(dataRef.current, event)[0].index == 3){
            setDataState(3);
        }
    }}

    let view = null

    switch(dataState) {
        case 0:
            view = <Doughnut options = {options} data = {afluData} />
            break;
        case 1:
            view = <Doughnut options = {options} data = {energyData} />
            break;
        case 2:
            view = <Doughnut options = {options} data = {industryData} />
            break;
        case 3:
            view = <Doughnut options = {options} data = {wasteData} />
            break;       
    }

    return (

        <div  style = {{ width : "500px" }}>
            <h1>CO2 emissions by sector</h1>
            <Doughnut
                data={data}
                options={options}
                onClick={onClick}
                ref={dataRef}
            ></Doughnut>
            {view}
        </div>
    );

    }