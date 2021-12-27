import React, { useState } from "react";
import { CurrentDataObject } from "../../models/weatherAPI";
import cloudy from '../../icons/weather/static/03.svg';
import { 
  getCelsius,
  getFahrenheit,
  capitalizeFirstLetter,
  getKilometers,
  getMiles,
  getMph,
  getKmh,
  getCountryName
} from "../../ts/helpers";

import {
  StyledCurrent,
  CurrentContent,
  TemperatureBlock,
  Buttons,
  Button,
  Details,
  Description,
  City,
  Temperature
} from './styles';

interface CurrentProps {
  currentData: CurrentDataObject
}

export const Current = ({currentData}: CurrentProps) => {
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
    <StyledCurrent>
      <CurrentContent>
        <City>{currentData.name}, {getCountryName(currentData.sys.country)}</City>
        <TemperatureBlock>
          <img className="current__img" alt="Cloudy icon" src={cloudy}/>
          <Temperature>{temperature} °</Temperature>
          <Buttons>
            <Button 
              className={isCelsius ? "active" : ""}
              type="button"
              onClick={() => setIsCelsius(true)}
            >C</Button>
            <Button
              className={isCelsius ? "" : "active"}
              type="button"
              onClick={() => setIsCelsius(false)}
            >F</Button>
          </Buttons>
        </TemperatureBlock>
        <Description>{capitalizeFirstLetter(currentData.weather[0].description)}</Description>
        <Details>
          <p >Feels Like {feelsLike}°</p>
          <p>Wind {wind}</p>
          <p>Visibility {visibility}</p>
          <p>Humidity {currentData.main.humidity}%</p>
        </Details>
      </CurrentContent>
    </StyledCurrent>
  )
}