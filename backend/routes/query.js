import express from "express";
import { askGemini } from "../services/geminiService.js";
import { history } from "./historyStore.js";

const router = express.Router();

// Handle AI queries
router.get("/", async (req, res) => {
  try {
    const { question } = req.query;
    if (!question) return res.json({ history });

    const advice = await askGemini(question);
    const entry = { type: "ai", query: question, advice };
    history.unshift(entry);

    res.json({ history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Optional: fetch full history
router.get("/history", (req, res) => {
  res.json({ history });
});

export default router;
