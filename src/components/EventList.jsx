import React from 'react'
import EventCard from './EventCard'

const EventList = ({ events, onVote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event._id} event={event} onVote={onVote} />
      ))}
    </div>
  )
}

export default EventList