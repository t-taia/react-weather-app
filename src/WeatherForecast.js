import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect (() => { // days changing according to city
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily)
        setLoaded(true);
    } 

    function load() { // API
        const apiKey = "a634dd1dee9be0dfeff6ce65b2525c84";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) { // Forecast for 5 days
        return (
            <div className="WeatherForecast"> 
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {

                        if (index < 5) {
                            return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                            );
                        } else {
                            return null;
                        }
                        })}        
                </div>
            </div>
        );
    } else {
        load();

        return null;
    }   
}