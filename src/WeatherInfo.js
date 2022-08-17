import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        {/* Weather description block*/}
        <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>

        {/* IMG and Temperature block*/}
        <div className="row mt-3"> 
           
            <div className="col-6">
                <div className="clearfix">
                   
                    <WeatherIcon code={props.data.icon} />
                    
                    
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°C</span>
                </div>
            </div>
        

        {/* Conditions block*/}
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: {Math.round(props.data.humidity)}%
                    </li>
                    <li>
                        Wind: {Math.round(props.data.wind)} km/h
                    </li>
                </ul>
            </div>

        </div>
        </div>
    );
}