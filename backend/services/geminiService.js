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
    let text = result.response.text();

    // ✅ NEW: fallback if response is empty
    if (!text || text.trim() === "") {
      text = "⚠️ ക്ഷമിക്കണം, ഇപ്പോൾ ഞാൻ മറുപടി നൽകാനാകുന്നില്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.";
    }

    return text;
  } catch (err) {
    console.error("Gemini API Error:", err);
    // ✅ NEW: return safe fallback instead of throwing
    return "⚠️ AI സേവനം ഇപ്പോൾ ലഭ്യമല്ല. പിന്നീട് ശ്രമിക്കുക.";
  }
}
