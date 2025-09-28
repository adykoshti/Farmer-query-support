import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getQuery, getWeather } from '../utils/api';

export default function Home() {
  const [prompt, setPrompt] = React.useState('');
  const [city, setCity] = React.useState('');
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // Fetch history on first load
  useEffect(() => {
    (async () => {
      try {
        const res = await getQuery(""); // empty = fetch history
        if (res.history) setResult(res.history);
      } catch (err) {
        console.error("Failed to fetch history", err);
      }
    })();
  }, []);

  async function handleQuery() {
  if (!prompt) return alert("Type a question or prompt");
  setLoading(true);
  try {
    const res = await getQuery(prompt);
    if (res.history) setResult(res.history);  // ✅ always take server history
    setPrompt('');
  } catch (e) {
    alert("Error: " + e.message);
  } finally {
    setLoading(false);
  }
}

async function handleWeather() {
  if (!city) return alert('Provide City please');
  setLoading(true);
  try {
    const res = await getWeather(city);
    if (res.history) setResult(res.history);  // ✅ always take server history
    setCity('');
  } catch (e) {
    alert("Error: " + e.message);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className='home'>
      <div className='hero'>
        <h1>How can <span className='accent'>we assist you</span> today?</h1>
        <p>AI-based helpbot for all your farming needs</p>

        {/* Quick Links */}
        <div className='quick-links'>
          <a href='https://pmfby.gov.in/' target='_blank' rel='noreferrer'>pmfby.gov.in</a>
          <a href='https://kisansuvidha.gov.in/' target='_blank' rel='noreferrer'>kisansuvidha.gov.in</a>
          <a href='https://pmkisan.gov.in/' target='_blank' rel='noreferrer'>pmkisan.gov.in</a>
          <a href='https://soilhealth.dac.gov.in/home' target='_blank' rel='noreferrer'>Soilhealth Card</a>
        </div>

        {/* Query input */}
        <div className='prompt-row'>
          <input
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder='Type your prompt here'
            onKeyDown={e => { if (e.key === "Enter" && !loading) handleQuery(); }}
          />
          <button className='send' onClick={handleQuery} disabled={loading}>➤</button>
        </div>

        {/* Weather input */}
        <div className='advisory-row'>
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder='City (for weather)'
            onKeyDown={e => { if (e.key === "Enter" && !loading) handleWeather(); }}
          />
          <button onClick={handleWeather} disabled={loading}>Get Weather Forecast</button>
        </div>

        {/* Chat History */}
        {result.length > 0 && (
          <div className="chat-box">
            {result.map((entry, idx) => (
              <React.Fragment key={idx}>
                {/* AI Query/Response */}
                {entry.type === "ai" && (
                  <>
                    <div className="user-msg">
                      <span>🧑‍🌾 {entry.query}</span>
                    </div>
                    <div className="bot-msg">
                      <ReactMarkdown>{entry.advice || "⚠️ No response available."}</ReactMarkdown>
                    </div>
                  </>
                )}

                {/* Weather Response */}
                {entry.type === "weather" && entry.data && (
                  <div className="bot-msg weather-msg">
                    <h3>🌤 Weather in {entry.data.location?.name}, {entry.data.location?.region}</h3>
                    <p><strong>Temperature:</strong> {entry.data.current?.temp_c}°C ({entry.data.current?.temp_f}°F)</p>
                    <p><strong>Condition:</strong> {entry.data.current?.condition?.text}</p>
                    <p><strong>Humidity:</strong> {entry.data.current?.humidity}%</p>
                    <p><strong>Wind:</strong> {entry.data.current?.wind_kph} km/h {entry.data.current?.wind_dir}</p>
                    <p><strong>Feels Like:</strong> {entry.data.current?.feelslike_c}°C</p>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
