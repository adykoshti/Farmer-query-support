import express from "express";
import { askGemini } from "../services/geminiService.js";

const router = express.Router();

// 🆕 In-memory history for this session
const history = [];

// Handle new query
router.get("/", async (req, res) => {
  try {
    const { question } = req.query;
    if (!question) return res.status(400).json({ error: "Question required" });

    const advice = await askGemini(question);

    // 🆕 store in history
    const entry = { query: question, advice };
    history.unshift(entry); // most recent first

    res.json({ history }); // return full history
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// 🆕 Fetch saved history (for page refresh)
router.get("/history", (req, res) => {
  res.json({ history });
});

export default router;
