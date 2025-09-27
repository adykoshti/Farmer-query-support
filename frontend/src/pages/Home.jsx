import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getQuery, getWeather, getAdvisory } from '../utils/api';

export default function Home() {
  const [prompt, setPrompt] = React.useState('');
  const [city, setCity] = React.useState('');
  const [crop, setCrop] = React.useState('');
  const [result, setResult] = React.useState([]); // 🆕 array of chat history
  const [loading, setLoading] = React.useState(false);

  async function handleQuery() {
    if (!prompt) return alert("Type a question or prompt");
    setLoading(true);
    try {
      const res = await getQuery(prompt);
      // Add new query at the start of history
      setResult(res.history);
      setPrompt(''); // clear input
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
      // Optional: you can store weather in a separate array if needed
      alert(`Weather in ${res.location.name}: ${res.current.temp_c}°C, ${res.current.condition.text}`);
    } catch (e) {
      alert('Error: ' + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='home'>
      <div className='hero'>
        <h1>How can <span className='accent'>we assist you</span> today?</h1>
        <p>AI-based helpbot for all your farming needs</p>

        <div className='quick-links'>
          <a href='https://pmfby.gov.in/' target='_blank' rel='noreferrer'>pmfby.gov.in</a>
          <a href='https://kisansuvidha.gov.in/' target='_blank' rel='noreferrer'>kisansuvidha.gov.in</a>
          <a href='https://pmkisan.gov.in/' target='_blank' rel='noreferrer'>pmkisan.gov.in</a>
          <a href='https://soilhealth.dac.gov.in/home' target='_blank' rel='noreferrer'>Soilhealth Card</a>
        </div>

        <div className='prompt-row'>
          <input
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder='type your prompt here'
            onKeyDown={e => {
              if (e.key === "Enter" && !loading) handleQuery();
            }}
          />
          <button className='send' onClick={handleQuery} disabled={loading}>➤</button>
        </div>

        <div className='advisory-row'>
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder='City (for weather)'
            onKeyDown={e => {
              if (e.key === "Enter" && !loading) handleWeather();
            }}
          />
          <button onClick={handleWeather} disabled={loading}>Get Weather Forecast</button>
        </div>

        {/* 🔄 Chat History */}
        {result.length > 0 && (
          <div className="chat-box">
            {result.map((entry, idx) => (
              <React.Fragment key={idx}>
                <div className="user-msg">
                  <span>🧑‍🌾 {entry.query}</span>
                </div>
                <div className="bot-msg">
                  <ReactMarkdown>{entry.advice}</ReactMarkdown>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
