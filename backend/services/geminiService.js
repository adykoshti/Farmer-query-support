import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("Gemini Key:", process.env.GEMINI_API_KEY);

export async function askGemini(question) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are an expert agricultural advisor for farmers in Kerala, India.  
Provide **practical, actionable advice**, not just information.  
Always consider local climate, soil, crop cycles, and regional regulations.  
Respond in a helpful and friendly tone.  
Use formatting like **bold**, *italics*, and _underline_ where appropriate.  
Always give a clear recommendation or decision, not vague info.  

Farmer's question: ${question}
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    throw new Error("Failed to fetch response from Gemini");
  }
}
