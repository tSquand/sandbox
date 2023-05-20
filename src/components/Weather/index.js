import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [chanceOfRain, setChanceOfRain] = useState(null);
    const location = "Tallahassee";

    const fetchWeatherData = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=30.44&longitude=-84.28&current_weather=true&timezone=EST&temperature_unit=fahrenheit&hourly=precipitation_probability&hours=1`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Weather API data:", data);
            setWeatherData(data);
            setChanceOfRain(data.hourly.precipitation_probability[0]);

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }, []);

    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { current_weather } = weatherData;
    return (
        <div className="weather">
            <h2>Weather</h2>
            <p>{location}</p>
            <p>{current_weather.temperature}°F</p>
            <p>{chanceOfRain}% chance of rain</p>
        </div>
    )
}

export default Weather;