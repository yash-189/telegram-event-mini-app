import React from 'react'
import { Link } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, Calendar, MapPin } from 'lucide-react'
import WebApp from '@twa-dev/sdk'

const EventCard = ({ event, onVote }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4" style={{ backgroundColor: WebApp.secondaryBgColor }}>
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-2">{event.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar size={16} className="mr-1" />
        {new Date(event.date).toLocaleString()}
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <MapPin size={16} className="mr-1" />
        {event.location}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          <button
            onClick={() => onVote(event._id, 1)}
            className="flex items-center text-green-500"
          >
            <ThumbsUp size={20} className="mr-1" />
            <span>{event.upvotes || 0}</span>
          </button>
          <button
            onClick={() => onVote(event._id, -1)}
            className="flex items-center text-red-500"
          >
            <ThumbsDown size={20} className="mr-1" />
            <span>{event.downvotes || 0}</span>
          </button>
        </div>
        <Link
          to={`/event/${event._id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          style={{ backgroundColor: WebApp.buttonColor, color: WebApp.buttonTextColor }}
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default EventCard