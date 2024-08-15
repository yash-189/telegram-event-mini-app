import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import CreateEvent from './pages/CreateEvent'
import WebApp from '@twa-dev/sdk'

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = WebApp.backgroundColor;
    document.body.style.color = WebApp.textColor;
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </div>
  )
}

export default App