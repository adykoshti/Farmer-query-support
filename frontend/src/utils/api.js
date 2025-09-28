import axios from "axios";
const api = axios.create({ baseURL: "/api" });

// Get AI query history or new query
export async function getQuery(question) {
  const res = await api.get("/query", { params: { question } });
  return res.data; // always includes history array
}

// Get weather and include it in history
export async function getWeather(city) {
  const res = await api.get("/weather", { params: { city } });
  return res.data; // always includes history array
}

// Optional advisory
export async function getAdvisory(city, crop) {
  const res = await api.get("/advisory", { params: { city, crop } });
  return res.data;
}
