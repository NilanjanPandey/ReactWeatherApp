import React, { useState, useEffect } from "react";

import "./WeatherDetails.css";
import Spinner from "../../Common/Spinner";

function WeatherDetails({ state }) {
  const [weatherData, setWeatherData] = useState({});

  const __KEY = "858f15fed9292cbe25c341a754c55e45";
  const __URL = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${__KEY}`;

  useEffect(() => {
    fetch(__URL)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.log(error.message));
    return () => {
      setWeatherData({});
    };
  }, [__URL, state]);

  console.log("Weather Data: ", weatherData);
  return (
    <>
      {Object.keys(weatherData).length === 0 ? (
        <div className="weatherDetails">
          <Spinner />
        </div>
      ) : (
        <>
          {weatherData.cod === 200 && (
            <div className="weatherDetails">
              <div className="weatherData">
                <div className="leftSideWeatherData">
                  <h2>
                    {weatherData.name} - {weatherData.sys.country}
                  </h2>
                  <img
                    src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                    alt="Icon Logo"
                    style={{ width: "30px", height: "45px" }}
                  ></img>
                  <h4>{weatherData.weather[0].main}</h4>
                </div>
                <div className="rightSideWeatherData">
                  <h1>{(weatherData.main.temp - 273.15).toFixed(1)}&deg;C</h1>
                </div>
              </div>
            </div>
          )}
          {weatherData.cod === "404" && (
            <div className="weatherDetails">
              <h2>Oops! City Not Found.</h2>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default WeatherDetails;
