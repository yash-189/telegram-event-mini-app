import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home as HomeIcon, Calendar, PlusCircle, User } from 'lucide-react'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import CreateEvent from './pages/CreateEvent'
import MyEvents from './pages/MyEvents'
import UserProfile from './pages/UserProfile'
import WebApp from '@twa-dev/sdk'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    document.body.style.backgroundColor = WebApp.backgroundColor;
    document.body.style.color = WebApp.textColor;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 min-h-screen flex flex-col "
    >
      <header className="py-4 mb-8">
        <h1 className="text-3xl font-bold text-center">Event Mini App</h1>
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/telegram-event-mini-app/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <footer className="py-4 mt-8">
        <nav className="flex justify-around">
          <Link 
            to="/telegram-event-mini-app/" 
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-blue-500' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <HomeIcon size={24} />
            <span>Home</span>
          </Link>
          <Link 
            to="/my-events" 
            className={`flex flex-col items-center ${activeTab === 'myEvents' ? 'text-blue-500' : ''}`}
            onClick={() => setActiveTab('myEvents')}
          >
            <Calendar size={24} />
            <span>My Events</span>
          </Link>
          <Link 
            to="/create-event" 
            className={`flex flex-col items-center ${activeTab === 'create' ? 'text-blue-500' : ''}`}
            onClick={() => setActiveTab('create')}
          >
            <PlusCircle size={24} />
            <span>Create</span>
          </Link>
          <Link 
            to="/profile" 
            className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-blue-500' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={24} />
            <span>Profile</span>
          </Link>
        </nav>
      </footer>
    </motion.div>
  )
}

export default App