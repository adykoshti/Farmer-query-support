import React from 'react'
import { getQuery, getWeather, getAdvisory } from '../utils/api'

export default function Home(){
  const [prompt, setPrompt] = React.useState('')
  const [city, setCity] = React.useState('')
  const [crop, setCrop] = React.useState('')
  const [result, setResult] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  async function handleQuery(){
    if(!prompt) return alert('Type a question or prompt')
    setLoading(true)
    try{
      const res = await getQuery(prompt)
      setResult(res)
    }catch(e){
      alert('Error: '+e.message)
    }finally{setLoading(false)}
  }

  // async function handleAdvisory(){
  //   if(!city || !crop) return alert('Provide city and crop')
  //   setLoading(true)
  //   try{
  //     const res = await getAdvisory(city,crop)
  //     setResult(res)
  //   }catch(e){alert('Error: '+e.message)}
  //   finally{setLoading(false)}
  // }

  async function handleWeather(){
    if(!city) return alert('Provide City please')
    setLoading(true)
    try{
      const res = await getWeather(city)
      setResult(res)
    }catch(e){alert('Error: '+e.message)}
    finally{setLoading(false)}
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
          <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder='type your prompt here' />
          <button className='send' onClick={handleQuery} disabled={loading}>➤</button>
        </div>

        <div className='advisory-row'>
          <input value={city} onChange={e=>setCity(e.target.value)} placeholder='City (for weather)' />
          {/* <input value={crop} onChange={e=>setCrop(e.target.value)} placeholder='Crop (for advisory)' /> */}
          <button onClick={handleWeather} disabled={loading}>Get Weather Forecast</button>
        </div>

        {result && (
          <pre className='result'>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}
