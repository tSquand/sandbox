import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [chanceOfRain, setChanceOfRain] = useState(null);
    const location = "Tallahassee";

    const fetchWeatherData = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=30.44&longitude=-84.28&current_weather=true&hourly=precipitation_probability&temperature_unit=fahrenheit&timezone=America%2FNew_York`,
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Weather API data:", data);
            setWeatherData(data);
            if(data.hourly && data.hourly.precipitation_probability){
            setChanceOfRain(data.hourly.precipitation_probability[0]);
            }
        

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
            <h2>{location} Weather</h2>
            <p>{current_weather.temperature}°F</p>
            <p>{chanceOfRain}% chance of rain</p>
        </div>
    )
}

export default Weather;