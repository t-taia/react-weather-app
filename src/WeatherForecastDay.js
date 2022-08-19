import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
    function maxTemperature() {
        let temp = Math.round(props.data.temp.max);
        return `${temp}°`;
    }

    function minTemperature() {
        let temp = Math.round(props.data.temp.min);
        return `${temp}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>

            <WeatherIcon code={props.data.weather[0].icon} size={36}/>
            <div className="WeatherForecast-temperatures">
                <span className="Weather-forecast-temperature-max">{maxTemperature()}</span> {" "}
                <span className="Weather-forecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    );
}