import React, { useState } from "react";
import { countryList } from "../data/countries";
import { CurrentDataObject } from "../models/weatherAPI";

import './current.scss';

interface CurrentProps {
  currentData: CurrentDataObject
}

export const Current = ({currentData}: CurrentProps) => {
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

  const [isCelsius, setIsCelsius] = useState(true)

  const temperature = isCelsius 
    ? getCelsius(currentData.main.temp) 
    : getFahrenheit(currentData.main.temp);

  return (
    <section className="current">
      <div className="current__content">
        <p className="current__city">{currentData.name}, {getCountryName(currentData.sys.country)}</p>
        <div className="current__temperature-block">
          <div className="current__icon"></div>
          <p className="current__temperature">{temperature} °</p>
          <div className="current__buttons">
            <button 
              className="current__button"
              type="button"
              onClick={() => setIsCelsius(true)}
            >{isCelsius ? 'C' : 'F'}</button>
            <button
              className="current__button"
              type="button"
              onClick={() => setIsCelsius(false)}
            >{isCelsius ? 'F' : 'C'}</button>
          </div>
        </div>
        <p className="current__description">{capitalizeFirstLetter(currentData.weather[0].description)}</p>
        {/* <p className="current__updated">Updated as of ...</p> */}
        {/* <div className="current__details">
          <p className="current__detail">Feels Like 3</p>
          <p className="current__detail">Wind</p>
          <p className="current__detail">Visibility</p>
          <p className="current__detail">Barometer</p>
          <p className="current__detail">Humidity</p>
          <p className="current__detail">Dew Point</p>
        </div> */}
      </div>
    </section>
  )
}