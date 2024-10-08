import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import EventList from '../components/EventList'
import { getEvents, voteEvent } from '../utils/api'
import WebApp from '@twa-dev/sdk'

const Home = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const response = await getEvents()
      setEvents(response.data)
    } catch (error) {
      WebApp.showAlert('Error fetching events: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVote = async (eventId, voteValue) => {
    try {
      const response = await voteEvent(eventId, voteValue)
      setEvents(events.map(event => 
        event._id === eventId ? { ...event, ...response.data } : event
      ))
      WebApp.showAlert('Vote recorded successfully!')
    } catch (error) {
      WebApp.showAlert('Error voting: ' + error.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full mx-auto"
        />
      ) : (
        <EventList events={events} onVote={handleVote} />
      )}
    </motion.div>
  )
}

export default Home