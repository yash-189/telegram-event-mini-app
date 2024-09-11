import React from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Calendar, MapPin, ThumbsUp, ThumbsDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const EventCard = ({ event, onVote }) => {
  const navigate = useNavigate()
  const formattedDate = format(new Date(event.date), 'MMM d, yyyy h:mm a')

  const handleCardClick = () => {
    navigate(`/event/${event._id}`)
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="bg-white shadow-sm rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out border border-gray-200"
      onClick={handleCardClick}
    >
      <div className="p-3">
        <h2 className="text-base font-semibold text-gray-800 mb-1 truncate">{event.title}</h2>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{event.description}</p>
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <Calendar size={12} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <MapPin size={12} className="mr-1" />
          <span>{event.location}</span>
        </div>
      </div>
      <div className="bg-gray-50 px-3 py-2 flex justify-between items-center text-xs">
        <span className="font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-0.5">
          {event.category}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{event.votes} votes</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onVote(event._id, 1)
            }}
            className="text-green-500 hover:text-green-600"
          >
            <ThumbsUp size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onVote(event._id, -1)
            }}
            className="text-red-500 hover:text-red-600"
          >
            <ThumbsDown size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default EventCard