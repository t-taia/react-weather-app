import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
 

export default function Weather (props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        });

     
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                {/* Search block*/}
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="Enter a city..." 
                            className="form-control"
                            autoFocus="on"
                            />
                        </div>
        
                        <div className="col-3">
                            <input 
                            type="submit" 
                            value="Search"
                            className="btn btn-secondary w-100"/>
                        </div>
                    </div>
                </form>
        
                {/* Weather description block*/}
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
        
                {/* IMG and Temperature block*/}
                <div className="row mt-3">
                   
                    <div className="col-6">
                        <div className="clearfix">
                            <img 
                            src={weatherData.iconUrl} 
                            alt={weatherData.description} 
                            />
                            
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                
        
                {/* Conditions block*/}
                    <div className="col-6">
                        <ul>
                            <li>
                                Humidity: {Math.round(weatherData.humidity)}%
                            </li>
                            <li>
                                Wind: {Math.round(weatherData.wind)} km/h
                            </li>
                        </ul>
                    </div>
        
                </div>
            </div>
            );
    } else {
       

    const apiKey = "a634dd1dee9be0dfeff6ce65b2525c84";
   
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
}
    
    
 
    
