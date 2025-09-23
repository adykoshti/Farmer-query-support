# 🌾 Farmer Support & Advisory System

Smart India Hackathon Project: AI-based Farmer Support & Advisory System.  
Includes **Frontend (React + Tailwind)** and **Backend (Node.js + Express + Gemini AI + Weather API)**.

---

## 🚀 Getting Started

### 1. Local Setup (without Docker)

```bash
# Install root dependencies (concurrently)
npm install

# Install frontend & backend deps
npm run install-all

# Start both frontend + backend together
npm start
```

- Frontend → http://localhost:3000  
- Backend → http://localhost:5000  

---

### 2. Docker Setup

```bash
docker-compose up --build
```

- Frontend → http://localhost:3000  
- Backend → http://localhost:5000  

---

## 📡 API Endpoints

- `GET /api/query?question=How to grow rice?`
- `GET /api/weather?city=Delhi`
- `GET /api/advisory?crop=wheat&city=Nagpur`

---

## 🛠️ Tech Stack

- **Frontend**: React (CRA), TailwindCSS  
- **Backend**: Node.js, Express  
- **AI**: Google Gemini API  
- **Weather**: WeatherAPI.com  
- **Dev Tools**: Concurrently, Docker Compose  

✅ Ready for SIH submission!
