import axios from "axios";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
console.log("Weather Key:", WEATHER_API_KEY);

export async function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(city)}`;
  try {
    const { data } = await axios.get(url);
    return {
      location: data.location,
      current: data.current,
    };
  } catch (err) {
    // If WeatherAPI returns an error JSON, expose that instead of 500
    if (err.response?.data?.error?.message) {
      throw new Error(err.response.data.error.message);
    }
    throw err;
  }
}
