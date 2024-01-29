import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Uncomment when working in dev mode if you want to see updated weather data
// import weatherApiKey from '../../utils/APIKeys/_weatherapikey';

const LakesInfo = (props) => {
    // units = imperial | to set units to Fahrenheit from Kelvin
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let url;
            if (process.env.NODE_ENV === 'development') {
                // Uncomment when working in dev mode if you want to see updated weather data
                // url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityLocation}&units=imperial&appid=${weatherApiKey}`;
            }
            else {
                url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityLocation}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            }

            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching weather data: ', error);
            }
        };

        // Fetch data when the component mounts
        fetchData();
    }, [props.cityLocation]);

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
};

export default LakesInfo;