import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
 

export default function Weather (props) {
    const [city, setCity] =useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) { // All components of Weather Description
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord, 
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
        });
    }

    function search() { // API key and URL 
        const apiKey = "a634dd1dee9be0dfeff6ce65b2525c84";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();  //search for a city
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                {/* Search block*/}
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="Enter a city..." 
                            className="form-control"
                            autoFocus="on"
                            onChange={handleCityChange}
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
                <WeatherInfo data={weatherData}/> 
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
            );
    } else {
       search();
       return "Loading...";
    }
}
    
    
 
    
