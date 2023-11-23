// App.js
import React, { useState } from 'react';
import WeatherCard from './weatherCard';

function App() {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <div className="weather-cards">
        {city && <WeatherCard city={city} />}
      </div>
    </div>
  );
}

export default App;
