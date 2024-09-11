import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { ArrowUpDown, DollarSign, TrendingUp, Activity } from 'lucide-react'
import WebApp from '@twa-dev/sdk'

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCoins()
  }, [])

  const fetchCoins = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      setCoins(response.data)
    } catch (error) {
      WebApp.showAlert('Error fetching coins: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='max-w-2xl mx-auto pt-4 pb-28'
    >
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Top Coins</h1> */}
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full mx-auto"
        />
      ) : (
        coins.length > 0 ? (
          <div className="space-y-3">
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm">No coins found.</p>
        )
      )}
    </motion.div>
  )
}

const CoinCard = ({ coin }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white shadow-sm rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out border border-gray-200"
      >
        <div className="p-3">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
              <h2 className="text-base font-semibold text-gray-800">{coin.name}</h2>
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
              {coin.symbol.toUpperCase()}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs mb-2">
            <div className="flex items-center text-gray-500">
              <DollarSign size={12} className="mr-1" />
              <span>${coin.current_price.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <ArrowUpDown size={12} className="mr-1" />
              <span>Rank: {coin.market_cap_rank}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-500 text-xs">
              <TrendingUp size={12} className="mr-1" />
              <span>${(coin.market_cap / 1e9).toFixed(2)}B</span>
            </div>
            <div className={`flex items-center text-xs ${coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <Activity size={12} className="mr-1" />
              <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

export default Coins