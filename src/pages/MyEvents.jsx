import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import EventList from '../components/EventList'
import WebApp from '@twa-dev/sdk'

const dummyEvents = [
  {
    _id: '1',
    title: 'Ethereum 2.0 Launch Party',
    description: 'Join us for the celebration of Ethereum\'s transition to Proof of Stake!',
    date: '2023-06-15T18:00:00',
    location: 'Virtual Event',
    category: 'Launch',
    votes: 120
  },
  {
    _id: '2',
    title: 'Bitcoin Halving Countdown',
    description: 'Watch the live countdown to the next Bitcoin halving event.',
    date: '2024-05-01T00:00:00',
    location: 'Online Streaming',
    category: 'Network Event',
    votes: 95
  },
  {
    _id: '3',
    title: 'DeFi Summit 2023',
    description: 'Explore the latest trends and innovations in Decentralized Finance.',
    date: '2023-09-10T09:00:00',
    location: 'New York City',
    category: 'Conference',
    votes: 78
  },
  {
    _id: '4',
    title: 'NFT Art Exhibition',
    description: 'Showcase of the most valuable and innovative NFT artworks.',
    date: '2023-07-22T10:00:00',
    location: 'Los Angeles Convention Center',
    category: 'Exhibition',
    votes: 62
  },
  {
    _id: '5',
    title: 'Crypto Trading Masterclass',
    description: 'Learn advanced trading strategies from crypto experts.',
    date: '2023-08-05T14:00:00',
    location: 'Online Webinar',
    category: 'Education',
    votes: 55
  }
]

const MyEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      setEvents(dummyEvents)
      setLoading(false)
    }, 1000)
  }, [])

  const handleVote = (eventId, voteValue) => {
    setEvents(events.map(event => 
      event._id === eventId ? { ...event, votes: event.votes + voteValue } : event
    ))
    WebApp.showAlert('Vote recorded successfully!')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='max-w-2xl mx-auto pt-4 pb-28'
    >
    
    
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full mx-auto"
        />
      ) : (
        events.length > 0 ? (
          <EventList events={events} onVote={handleVote} />
        ) : (
          <p className="text-center text-gray-500">No crypto events found.</p>
        )
      )}
    </motion.div>
  )
}

export default MyEvents