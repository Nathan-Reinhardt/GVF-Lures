import React, { useState } from 'react';
import axios from 'axios';

const LakesInfo = (props) => {
    // units = imperial | to set units to Fahrenheit from Kelvin
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityLocation}&units=imperial&appid=731bd4f142727552264706d6ea9920d9`;
    const [data, setData] = useState({});

    if (data.name == null) {
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    }

    return(
        <div>
            <div className="lake-title-cont">
                <p className="lake-title"><strong>{props.lakeName}</strong></p>
            </div>
            {
            data.main ? 
                <p className="lake-temp">Current Temperature: {data.main.temp.toFixed()}°F</p>
                :
                <p className="lake-temp">Current Temperature: 00°F</p>
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