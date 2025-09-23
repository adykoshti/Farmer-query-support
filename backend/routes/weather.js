import express from "express";
import { getWeather } from "../services/weatherService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    // http://localhost:5000/api/weather?city=Ahmedabad
    if (!city) return res.status(400).json({ error: "City required" });

    const weather = await getWeather(city);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
