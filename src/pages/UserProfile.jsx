import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, AtSign, Hash } from 'lucide-react'
import WebApp from '@twa-dev/sdk'

const UserProfile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const initData = WebApp.initDataUnsafe
    if (initData?.user) {
      setUser(initData.user)
    }
  }, [])

  if (!user) {
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
        <h2 className="text-xl font-semibold mb-4">User Data</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4" style={{ backgroundColor: WebApp.secondary_bg_color }}>
        <div className="flex items-center mb-4">
          <User size={24} className="mr-2" />
          <h2 className="text-xl font-semibold">{user?.first_name} {user?.last_name}</h2>
        </div>
        {user?.username && (
          <div className="flex items-center mb-2">
            <AtSign size={20} className="mr-2" />
            <p>@{user.username}</p>
          </div>
        )}
        <div className="flex items-center mb-2">
          <Hash size={20} className="mr-2" />
          <p>ID: {user?.id}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default UserProfile