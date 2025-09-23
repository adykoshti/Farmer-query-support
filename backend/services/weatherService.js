import axios from "axios";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
console.log("Weather Key:", process.env.WEATHER_API_KEY);

export async function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;
  const { data } = await axios.get(url);
  return {
    location: data.location,
    current: data.current
  };
}
