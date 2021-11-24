import React, { useState } from "react";
import { countryList } from "../../data/countries";
import { CurrentDataObject } from "../../models/weatherAPI";
import cloudy from '../../icons/weather/static/03.svg';

import './current.scss';

interface CurrentProps {
  currentData: CurrentDataObject
}

export const Current = ({currentData}: CurrentProps) => {
  console.log('currentData', currentData);
  const getCountryName = (city: string) => {
    const array = Object.entries(countryList);
    const country = array.find(country => country[0] === city);

    return country ? country[1] : country
  }

  const getCelsius = (number: number) => {
    return Math.floor(number - 272.15);
  }

  const getFahrenheit = (number: number) => {
    const result = number * 1.8 - 459.67;
    return Math.round(result);
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getKilometers = (number: number) => {
    const result = number / 1000;
    return `${result} km`;
  }

  const getMiles = (number: number) => {
    const result = (number * 0.00062137).toFixed(1);
    return `${result} mi`
  }

  const getMph = (number: number) => {
    const result = Math.round((number * 2.23693629)).toFixed();
    return `${result} mph`;
  }

  const getKmh = (number: number) => {
    const result = Math.round((number * 3.6)).toFixed();
    return `${result} km/h`;
  }

  const [isCelsius, setIsCelsius] = useState(true)

  const temperature = isCelsius 
    ? getCelsius(currentData.main.temp) 
    : getFahrenheit(currentData.main.temp);

  const feelsLike = isCelsius 
    ? getCelsius(currentData.main.feels_like) 
    : getFahrenheit(currentData.main.feels_like);

  const visibility = isCelsius 
  ? getKilometers(currentData.visibility) 
  : getMiles(currentData.visibility);

  const wind = isCelsius 
    ? getKmh(currentData.wind.speed) 
    : getMph(currentData.wind.speed);

  return (
    <section className="current">
      <div className="current__content">
        <p className="current__city">{currentData.name}, {getCountryName(currentData.sys.country)}</p>
        <div className="current__temperature-block">
          <div className="current__icon">
            <img className="current__img" alt="Cloudy icon" src={cloudy}/>
          </div>
          <p className="current__temperature">{temperature} °</p>
          <div className="current__buttons">
            <button 
              className={isCelsius ? "current__button active" : "current__button"}
              type="button"
              onClick={() => setIsCelsius(true)}
            >C</button>
            <button
              className={isCelsius ? "current__button" : "current__button active"}
              type="button"
              onClick={() => setIsCelsius(false)}
            >F</button>
          </div>
        </div>
        <p className="current__description">{capitalizeFirstLetter(currentData.weather[0].description)}</p>
        <div className="current__details">
          <p className="current__detail">Feels Like {feelsLike}°</p>
          <p className="current__detail">Wind {wind}</p>
          <p className="current__detail">Visibility {visibility}</p>
          <p className="current__detail">Humidity {currentData.main.humidity}%</p>
        </div>
      </div>
    </section>
  )
}