import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Paris" />
      
      {/*---Footer---*/}
      <footer>
        This project was coded by {" "}
        <a href="https://github.com/t-taia/" target="_blank" rel="noopener noreferrer">
          Taia</a> and is{" "}  
        <a href="https://github.com/t-taia/react-weather-app" target="_blank" rel="noopener noreferrer"> 
        open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  )
}


