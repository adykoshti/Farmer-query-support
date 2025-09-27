import React from 'react'

export default function Finance(){
  // 🆕 Example finance updates
  const financeTips = [
    { title: "Crop Loan Scheme", content: "Avail low-interest crop loans up to ₹3 lakh with government subsidy support." },
    { title: "PM-Kisan Yojana", content: "Eligible farmers receive ₹6000 annually in three installments directly to their account." },
    { title: "Insurance Reminder", content: "Don't forget to register for PMFBY crop insurance before the sowing season." },
    { title: "Agri Credit Card", content: "Apply for a Kisan Credit Card to get instant access to working capital for your farming needs." }
  ]

  return (
    <div className="hero">
      <h1>💰 Finance</h1>
      <p className="muted">Stay updated on schemes, loans, and financial support for farmers</p>

      <div style={{marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px"}}>
        {financeTips.map((tip, i) => (
          <div key={i} className="post-card">
            <div className="post-header">
              <strong>{tip.title}</strong>
            </div>
            <div className="post-content">
              {tip.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
