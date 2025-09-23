import React from 'react'

export default function Sidebar({onNavigate, active}){
  return (
    <aside className='sidebar'>
      <div className='brand'>GeoResolve</div>
      <button className={`nav-btn ${active==='home'?'active':''}`} onClick={()=>onNavigate('home')}>Home</button>
      <button className={`nav-btn ${active==='dashboard'?'active':''}`} onClick={()=>onNavigate('dashboard')}>Dashboard</button>
      <div style={{flex:1}} />
      <div className='profile'>
        <div className='avatar'>U</div>
        <div>User Profile</div>
      </div>
    </aside>
  )
}
