import React, { useState } from 'react';
import axios from 'axios';
import apiKey from '../../utils/APIKeys/_weatherapikey';

const LakesInfo = (props) => {
    // units = imperial | to set units to Fahrenheit from Kelvin
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityLocation}&units=imperial&appid=${apiKey}`;
    const [data, setData] = useState({});

    if (data.name == null) {
        axios.get(url).then((response) => {
            setData(response.data);
            // console.log(response.data);
        });
    }

    return(
        <div>
            <div className="lake-title-cont">
                <p className="lake-title"><strong>{props.lakeName}</strong></p>
            </div>
            <p className="state-name">State: {props.state}</p>
            {
            data.main ? 
                <div className="text-wrapper">
                    <p className="lake-temp">Current Temperature: {data.main.temp.toFixed()}°F</p>
                </div>
                :
                <div className="text-wrapper">
                    <p className="lake-temp">Current Temperature: 00°F</p>
                </div>
            }
            <div className="text-wrapper">
                <p className="lake-shoreline">Surface Area: {props.surfaceArea} acres</p>
            </div>
            <div className="text-wrapper">
                <p className="lake-above-sea">Above Sea Level: {props.seaLevel} feet</p>
            </div>
            <div className="text-wrapper">
                <p className="max-depth">Max Depth: {props.maxDepth} feet</p>
            </div>
            <div className="text-wrapper">
                <p className="lake-lure"><strong>Hot Lure: {props.hotLure}</strong></p>
            </div>
            <div className="lakes-lure-cont">
                {props.LurePic}
            </div>
        </div>
    );
}

export default LakesInfo;