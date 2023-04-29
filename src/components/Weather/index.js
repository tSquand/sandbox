import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [temperatureUnit] = useState('fahrenheit');
    const [chanceOfRain, setChanceOfRain] = useState(null);

    useEffect(() => {
        fetchWeatherData();
    },);

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=30.44&longitude=-84.28&current_weather=true&temperature_unit=${temperatureUnit}&hourly=precipitation_probability&hours=1`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setWeatherData(data);
            setChanceOfRain(data.hourly.precipitation_probability[0]);

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { current_weather } = weatherData;
    return (
        <div>
            <h2>Current Weather</h2>
            <p>{current_weather.temperature}°F</p>
            <p>{chanceOfRain}% chance of rain</p>
        </div>
    )
}

export default Weather;