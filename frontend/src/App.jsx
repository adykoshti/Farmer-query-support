import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

// 🆕 Import new pages
import Community from './pages/Community'
import Finance from './pages/Finance'
import ContactUs from './pages/ContactUs'

export default function App(){
  const [route, setRoute] = React.useState('home')

  return (
    <div className='app'>
      <Sidebar onNavigate={setRoute} active={route}/>
      <main className='main'>
        {route === 'home' && <Home />}
        {route === 'dashboard' && <Dashboard />}
        
        {/* 🆕 New routes */}
        {route === 'community' && <Community />}
        {route === 'finance' && <Finance />}
        {route === 'contact' && <ContactUs />}
      </main>
    </div>
  )
}

