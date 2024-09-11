import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, AtSign, Hash, Calendar, MapPin, Mail, Phone, Edit, ExternalLink, } from 'lucide-react'
import WebApp from '@twa-dev/sdk'

const dummyUser = {
  id: '12345678',
  first_name: 'John',
  last_name: 'Doe',
  username: 'johndoe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, USA',
  joinDate: '2023-01-15',
  bio: 'Crypto enthusiast and blockchain developer',
  interests: ['Bitcoin', 'Ethereum', 'DeFi', 'NFTs'],
  socialLinks: {
    twitter: '@johndoe',
    github: 'johndoe',
    linkedin: 'john-doe'
  }
}

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [showBio, setShowBio] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setUser(dummyUser)
    }, 1000)
  }, [])

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white rounded-lg overflow-hidden pb-28"
    >
      <div className="p-6">
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <User size={32} className="text-blue-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.first_name} {user.last_name}</h1>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-500 hover:text-blue-600"
          >
            <Edit size={20} />
          </motion.button>
        </motion.div>

        <motion.div 
          className="bg-gray-100 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <InfoItem icon={<AtSign size={16} />} label="Email" value={user.email} />
          <InfoItem icon={<Phone size={16} />} label="Phone" value={user.phone} />
          <InfoItem icon={<MapPin size={16} />} label="Location" value={user.location} />
          <InfoItem icon={<Calendar size={16} />} label="Joined" value={user.joinDate} />
          <InfoItem icon={<Hash size={16} />} label="User ID" value={user.id} />
        </motion.div>

      
      
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest, index) => (
              <span key={index} className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        
      </div>
    </motion.div>
  )
}

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center text-sm text-gray-600 mb-2">
    {React.cloneElement(icon, { className: 'mr-2 text-blue-500' })}
    <span className="font-medium mr-2">{label}:</span>
    <span>{value}</span>
  </div>
)

const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
    {icon}
  </a>
)

export default UserProfile