import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

export default function App(){
  const [route, setRoute] = React.useState('home')
  return (
    <div className='app'>
      <Sidebar onNavigate={setRoute} active={route}/>
      <main className='main'>
        {route === 'home' && <Home />}
        {route === 'dashboard' && <Dashboard />}
      </main>
    </div>
  )
}
