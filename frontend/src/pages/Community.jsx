import React from 'react'

export default function Community(){
  // 🆕 Static example posts (later can be dynamic)
  const posts = [
    { user: "FarmerRavi", content: "Just harvested 200kg of organic tomatoes today! 🌱🍅" },
    { user: "AgriExpert", content: "Tip of the day: Use mulching to retain soil moisture during summer." },
    { user: "GreenFuture", content: "Anyone here experimenting with drip irrigation? Would love to exchange notes!" },
  ]

  return (
    <div className="hero">
      <h1>👩‍🌾 Community</h1>
      <p className="muted">Join the discussion and share your farming experiences</p>

      <div style={{marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px"}}>
        {posts.map((post, i) => (
          <div key={i} className="post-card">
            <div className="post-header">
              <strong>@{post.user}</strong>
            </div>
            <div className="post-content">
              {post.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
