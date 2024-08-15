import React from 'react'
import { Link } from 'react-router-dom'
import WebApp from '@twa-dev/sdk'

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4" style={{ backgroundColor: WebApp.secondaryBgColor }}>
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-2">{event.description}</p>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(event.date).toLocaleString()}
      </p>
      <Link
        to={`/event/${event._id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        style={{ backgroundColor: WebApp.buttonColor, color: WebApp.buttonTextColor }}
      >
        View Details
      </Link>
    </div>
  )
}

export default EventCard