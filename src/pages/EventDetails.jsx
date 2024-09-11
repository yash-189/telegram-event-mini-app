import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { Calendar, MapPin, User, ThumbsUp, ThumbsDown, Link, Clock, Camera, Share2, Tag, Users, ExternalLink } from 'lucide-react'
import WebApp from '@twa-dev/sdk'

const dummyEvent = {
  _id: '1',
  title: 'Ethereum 2.0 Launch Party',
  description: 'Join us for the celebration of Ethereum\'s transition to Proof of Stake! This event will feature keynote speakers, panel discussions, and networking opportunities with industry leaders.',
  date: '2023-06-15T18:00:00',
  location: 'Virtual Event',
  category: 'Launch',
  votes: 120,
  organizer: 'Ethereum Foundation',
  postedBy: {
    name: 'Vitalik Buterin',
    avatar: 'https://example.com/vitalik-avatar.jpg'
  },
  postedOn: '2023-05-01T10:30:00',
  sourceUrl: 'https://ethereum.org/en/eth2/launch/',
  screenshotProof: 'https://assets.newatlas.com/dims4/default/3c0034f/2147483647/strip/true/crop/2612x1741+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F06%2F13%2F0afcd4bc415c8a189d095d5c23c2%2Funtitled-1.png',
  tags: ['Ethereum', 'Proof of Stake', 'Blockchain'],
  attendees: 1500,
  speakers: ['Vitalik Buterin', 'Gavin Wood', 'Joseph Lubin'],
  agenda: [
    { time: '18:00', description: 'Opening Ceremony' },
    { time: '18:30', description: 'Keynote: The Future of Ethereum' },
    { time: '19:30', description: 'Panel Discussion: Implications of PoS' },
    { time: '20:30', description: 'Networking Session' }
  ]
}

const EventDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [showScreenshot, setShowScreenshot] = useState(false)
  const [showAgenda, setShowAgenda] = useState(false)

  useEffect(() => {
    WebApp.BackButton.show()
    WebApp.BackButton.onClick(() => navigate(-1))

    // Simulate API call with setTimeout
    setTimeout(() => {
      setEvent(dummyEvent)
    }, 1000)

    return () => {
      WebApp.BackButton.hide()
      WebApp.BackButton.offClick()
    }
  }, [id, navigate])

  const handleVote = (voteValue) => {
    setEvent(prevEvent => ({
      ...prevEvent,
      votes: prevEvent.votes + voteValue
    }))
    WebApp.showAlert('Vote recorded successfully!')
  }

  const handleShare = () => {
    WebApp.showAlert('Sharing functionality to be implemented')
  }

  if (!event) return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full"
      />
    </div>
  )

  const formattedDate = format(new Date(event.date), 'MMM d, yyyy h:mm a')
  const formattedPostedDate = format(new Date(event.postedOn), 'MMM d, yyyy h:mm a')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white  rounded-lg overflow-hidden pb-28"
    >
      <div className="p-6">
        <motion.h1 
          className="text-2xl font-bold text-gray-800 mb-4"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {event.title}
        </motion.h1>
        <p className="text-sm text-gray-600 mb-6">{event.description}</p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {event.tags.map((tag, index) => (
            <span key={index} className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1 flex items-center">
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gray-100 rounded-lg p-4 mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex items-center text-xs text-gray-600 mb-2">
            <Calendar size={14} className="mr-2 text-blue-500" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600 mb-2">
            <MapPin size={14} className="mr-2 text-blue-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <User size={14} className="mr-2 text-blue-500" />
            <span>{event.organizer}</span>
          </div>
        </motion.div>
        <div className='flex justify-between items-center'>
          
        <motion.div 
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img src={event.postedBy.avatar} alt={event.postedBy.name} className="w-10 h-10 rounded-full mr-3 border-2 border-gray-200" />
          <div>
            <p className="text-sm font-medium text-gray-800">{event.postedBy.name}</p>
            <p className="text-xs text-gray-500">Posted on {formattedPostedDate}</p>
          </div>
        </motion.div>
        <motion.div 
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full transition-colors duration-300">
            <Link size={12} className="inline mr-1" />
            Source
          </a>
          
          
        </motion.div>


        </div>
        
       
        
        <AnimatePresence>
          
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <img src={event.screenshotProof} alt="Event Screenshot" className="w-full rounded-lg  border" />
            </motion.div>
          
        </AnimatePresence>
        
       
       

        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
             <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          
          
          <div className="flex items-center space-x-3 px-3 py-2 rounded-full transition-colors duration-300 ">
            <span className="text-gray-600 text-sm">{event.votes} votes</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleVote(1)}
              className="text-green-500 hover:text-green-600"
            >
              <ThumbsUp size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleVote(-1)}
              className="text-red-500 hover:text-red-600"
            >
              <ThumbsDown size={20} />
            </motion.button>
          </div>
        </motion.div>
          <button 
            onClick={handleShare}
            className="text-xs text-gray-900 bg-gray-200 hover:bg-purple-600 px-3 py-2 rounded-full transition-colors duration-300"
          >
            <Share2 size={12} className="inline mr-1" />
            Share Event
          </button>


        </motion.div>

       

      
      
        
     
      </div>
    </motion.div>
  )
}

export default EventDetails