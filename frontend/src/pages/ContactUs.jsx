import React from 'react'

export default function ContactUs(){
  // 🆕 Example contact details
  const contacts = [
    { title: "📞 Helpline", content: "Call us at 1800-123-456 for 24/7 farmer support." },
    { title: "✉️ Email", content: "Reach us at support@georesolve.org for queries and assistance." },
    { title: "🏢 Office", content: "Agri Support Center, Block 4, Krishi Bhavan, New Delhi, India." },
    { title: "🌐 Website", content: "Visit our official portal at www.georesolve.org for more resources." }
  ]

  return (
    <div className="hero">
      <h1>📬 Contact Us</h1>
      <p className="muted">We’re here to help! Reach out through any of the following channels</p>

      <div style={{marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px"}}>
        {contacts.map((c, i) => (
          <div key={i} className="post-card">
            <div className="post-header">
              <strong>{c.title}</strong>
            </div>
            <div className="post-content">
              {c.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
