import express from "express";
import dotenv from "dotenv";
dotenv.config();
console.log("GEMINI_API_KEY =", process.env.GEMINI_API_KEY);



import queryRoutes from "./routes/query.js";
import weatherRoutes from "./routes/weather.js";
import advisoryRoutes from "./routes/advisory.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/query", queryRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/advisory", advisoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
