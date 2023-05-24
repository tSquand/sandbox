import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
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
            setWeatherData(data);  
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

    const getWeatherDescription = (code) => {
        switch (code) {
            case 0 : return 'Clear sky';
            case 1 : return 'Mainly clear sky';
            case 2 : return 'Partly cloudy';
            case 3 : return 'Overcast';
            case 45 : return 'Foggy';
            case 48 : return 'Depositing rime fog';
            case 51: return 'Light drizzle';
            case 53: return 'Moderate drizzle';
            case 55: return 'Dense drizzle';
            case 56: return 'Light freezing drizzle';
            case 57: return 'Dense freezing drizzle';
            case 61: return 'Slight rain';
            case 63: return 'Moderate rain';
            case 65: return 'Heavy rain';
            case 66: return 'Light freezing rain';
            case 67: return 'Heavy freezing rain';
            case 71: return 'Slight snowfall';
            case 73: return 'Moderate snowfall';
            case 75: return 'Heavy snowfall';
            case 77: return 'Snow grains';
            case 80: return 'Slight rain showers';
            case 81: return 'Moderate rain showers';
            case 82: return 'Heavy rain showers';
            case 85: return 'Slight snow showers';
            case 86: return 'Heavy snow showers';
            case 95: return 'Thunderstorm';
            case 96: return 'Thunderstorm with slight hail';
            case 99: return 'Thunderstorm with heavy hail';
            default : return 'Unknown';
        }
    }

    return (
        <div className="weather">
            <h2>{location} Weather</h2>
            <p>{current_weather.temperature}°F</p>
            <p>{getWeatherDescription(current_weather.weathercode)}</p>
        </div>
    )
}

export default Weather;