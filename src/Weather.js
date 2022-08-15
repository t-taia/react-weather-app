import React from "react";
import "./Weather.css";

export default function Weather () {
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
                    />
                </div>
                <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search"
                    className="btn btn-secondary"/>
                </div>
            </div>
        </form>

        {/* Weather description block*/}
        <h1>Paris</h1>
        <ul>
            <li>Monday 12:00</li>
            <li>Cloudy</li>
        </ul>

        {/* IMG and Temperature block*/}
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/>
                22°C
            </div> 

        {/* Conditions block*/}
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 5%
                    </li>
                    <li>
                        Humidity: 76%
                    </li>
                    <li>
                        Wind: 5 km/h
                    </li>
                </ul>
            </div>

        </div>
    </div>
    );
}