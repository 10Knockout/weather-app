// WeatherCard.js
import React, { useState, useEffect } from 'react';
import API_KEY from './config';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-card">
      {weatherData && (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
