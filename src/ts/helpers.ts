import { countryList } from "../data/countries";

export const getCountryName = (city: string) => {
  const array = Object.entries(countryList);
  const country = array.find(country => country[0] === city);

  return country ? country[1] : country
}

export const getCelsius = (number: number) => {
  return Math.floor(number - 272.15);
}

export const getFahrenheit = (number: number) => {
  const result = number * 1.8 - 459.67;
  return Math.round(result);
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getKilometers = (number: number) => {
  const result = number / 1000;
  return `${result} km`;
}

export const getMiles = (number: number) => {
  const result = (number * 0.00062137).toFixed(1);
  return `${result} mi`
}

export const getMph = (number: number) => {
  const result = Math.round((number * 2.23693629)).toFixed();
  return `${result} mph`;
}

export const getKmh = (number: number) => {
  const result = Math.round((number * 3.6)).toFixed();
  return `${result} km/h`;
}