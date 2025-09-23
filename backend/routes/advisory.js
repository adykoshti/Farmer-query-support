import express from "express";
import { getWeather } from "../services/weatherService.js";
import { askGemini } from "../services/geminiService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { crop, city } = req.query;
    if (!crop || !city) return res.status(400).json({ error: "Crop and city required" });

    const weather = await getWeather(city);
    const query = `Given the weather ${JSON.stringify(weather.current)} in ${city}, give best farming advice for ${crop}.`;
    const response = await askGemini(query);

    res.json({
      city,
      crop,
      weather: weather.current,
      advisory: response
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
