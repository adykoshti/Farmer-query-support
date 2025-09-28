import express from "express";
import { getWeather } from "../services/weatherService.js";
import { history } from "./historyStore.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City required" });

    const weatherData = await getWeather(city);

    // save in history
    const entry = { type: "weather", data: weatherData };
    history.unshift(entry);

    // ✅ return updated history, same as query.js
    res.json({ history });
  } catch (error) {
    console.error("Weather API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
