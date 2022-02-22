import './index.css';
import { useState, useEffect } from "react";
import Chart from 'chart.js';

let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

let renderChart = () => {
  let donutChart = document.getElementById('donut-chart');
  fetch(url).then(response => response.json()).then(resp => { 
  var houses = [];
  var count = [];
  resp.forEach(element => {
    console.log("element: " + JSON.stringify(element));
    let index = houses.indexOf(element.family); 
	console.log("index: " + index);  
    if(index < 0) {
        houses.push(element.family);
        count.push(1);
    }else{
        count[index] += 1;
    } 
  }); 
  var newhouses = [];
  var newcount = [];
  count.forEach((item, index) => {
    if(item > 2) {
      newhouses.push(houses[index]);
      newcount.push(item);
    }
  });
 
  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: newhouses,
      datasets: [
        {
          label: 'My First Dataset',
          data: newcount,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
  });
};

function GOTChart() {
  useEffect(() => {
    renderChart();
  }); 
  return (
    <div id="chart_page" className="main_chart"> 
    <main class="wrapper">
      <canvas id="donut-chart" aria-label="donut chart" role="img"></canvas>
    </main>
    </div>
  );
}
export default GOTChart;
