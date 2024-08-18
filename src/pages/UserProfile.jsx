import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, AtSign, Hash } from 'lucide-react'
import { getUserProfile, getTelegramUser } from '../utils/api'
import WebApp from '@twa-dev/sdk'

const UserProfile = () => {
  const [profile, setProfile] = useState(null)
  const [telegramUser, setTelegramUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      setLoading(true)
      const [profileResponse, telegramUserData] = await Promise.all([
        getUserProfile(),
        getTelegramUser()
      ])
      setProfile(profileResponse.data)
      setTelegramUser(telegramUserData)
    } catch (error) {
      WebApp.showAlert('Error fetching user data: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full mx-auto"
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">User Profile</h1>
  
        <div className="bg-white shadow-md rounded-lg p-6 mb-4" style={{ backgroundColor: WebApp.secondary_bg_color }}>
          <h2 className="text-xl font-semibold mb-4">Telegram User Data (JSON)</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(telegramUser, null, 2)}
          </pre>
        </div>

      {telegramUser && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4" style={{ backgroundColor: WebApp.secondary_bg_color }}>
          <div className="flex items-center mb-4">
            <User size={24} className="mr-2" />
            <h2 className="text-xl font-semibold">{telegramUser?.first_name} {telegramUser?.last_name}</h2>
          </div>
          {telegramUser?.username && (
            <div className="flex items-center mb-2">
              <AtSign size={20} className="mr-2" />
              <p>@{telegramUser?.username}</p>
            </div>
          )}
          <div className="flex items-center mb-2">
            <Hash size={20} className="mr-2" />
            <p>ID: {telegramUser?.id}</p>
          </div>
        </div>
      )}
      {/* {profile && (
        <div className="bg-white shadow-md rounded-lg p-6" style={{ backgroundColor: WebApp.secondaryBgColor }}>
          <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
          {/* Add any additional profile information here */}
          {profile?.email && (
            <div className="flex items-center mb-2">
              <AtSign size={20} className="mr-2" />
              <p>{profile?.email}</p>
            </div>
          )}
          {/* Add more profile fields as needed */}
        </div>
      )} */}
    </motion.div>
  )
}

export default UserProfile