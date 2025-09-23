import express from "express";
import { askGemini } from "../services/geminiService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { question } = req.query;
    http://localhost:5000/api/query?question=Hello?
    if (!question) return res.status(400).json({ error: "Question required" });

    const response = await askGemini(question);
    res.json({ query: question, advice: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
