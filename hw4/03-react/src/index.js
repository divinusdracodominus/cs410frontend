import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar';
import GOTSearch from './search.js';
import GOTChart from './chart.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
         
    <Navbar /> 
    <GOTSearch />
    <h1 id="home_msg" className="main_chart">Welcome to homework four game of thrones</h1>
    <GOTChart/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
