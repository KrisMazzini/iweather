import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: 'pt_br',
    units: 'metric',
    appid: process.env.EXPO_PUBLIC_WEATHER_APP_ID,
  }
});

export const geoAPI = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0",
  params: {
    appid: process.env.EXPO_PUBLIC_WEATHER_APP_ID,
  }
})