import axios from 'axios'
const api = axios.create({ baseURL: '/api' })

export async function getWeather(city){
  const res = await api.get(`/weather`, { params: { city } })
  return res.data
}

export async function getAdvisory(city, crop){
  const res = await api.get(`/advisory`, { params: { city, crop } })
  return res.data
}

export async function getQuery(question){
  const res = await api.get(`/query`, { params: { question } })
  return res.data
}