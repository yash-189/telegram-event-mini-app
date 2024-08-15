import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EventList from '../components/EventList'
import { getEvents } from '../utils/api'
import WebApp from '@twa-dev/sdk'

const Home = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents()
        setEvents(response.data)
      } catch (error) {
        WebApp.showAlert('Error fetching events: ' + error.message)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <Link
        to="/create-event"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 inline-block"
        style={{ backgroundColor: WebApp.buttonColor, color: WebApp.buttonTextColor }}
      >
        Create Event
      </Link>
      <EventList events={events} />
    </div>
  )
}

export default Home