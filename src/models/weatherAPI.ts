export interface CurrentDataObject {
  cod: number,
  name: string,
  id: number,
  timezone: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrize: number,
    sunset: number
  },
  dt: number,
  clouds: {
    all: number
  },
  wind: {
    speed: number,
    deg: number
  },
  visibility: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  base: string,
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  coord: {
    lon: number,
    lat: number
  }
}