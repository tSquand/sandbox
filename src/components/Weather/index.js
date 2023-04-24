import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [temperatureUnit] = useState('fahrenheit');

    useEffect(() => {
        fetchWeatherData();
    });

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&temperature_unit=${temperatureUnit}`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setWeatherData(data);
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
            <h1>Current Weather</h1>
            <p>Time: {current_weather.time}</p>
            <p>Temperature: {current_weather.temperature}°F</p>
        </div>
    )
}

export default Weather;