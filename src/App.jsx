import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import WebApp from '@twa-dev/sdk';

import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/MyEvents';
import UserProfile from './pages/UserProfile';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Coins from './pages/Coins';

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/telegram-event-mini-app/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/coins" element={<Coins />} />
        </Routes>
      </main>
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
      
    </motion.div>
  );
}

export default App;
