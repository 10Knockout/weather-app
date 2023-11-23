// WeatherCard.js

import React, { useState, useEffect } from 'react';
import API_KEY from './config';
import './WeatherCard.css'; // Import the CSS file

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityImage, setCityImage] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);

          // Fetch city image (you may use a different API for this purpose)
          const imageResponse = await fetch(`https://source.unsplash.com/featured/?${city}`);
          if (imageResponse.ok) {
            setCityImage(imageResponse.url);
          }
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-card">
      <div className="weather-image" style={{ backgroundImage: `url(${cityImage})` }}></div>
      <div className="weather-details">
        {weatherData && (
          <>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
