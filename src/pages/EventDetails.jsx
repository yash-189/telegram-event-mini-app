import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventById, voteEvent } from '../utils/api'
import WebApp from '@twa-dev/sdk'

const EventDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    WebApp.BackButton.show()
    WebApp.BackButton.onClick(() => navigate(-1))

    const fetchEvent = async () => {
      try {
        const response = await getEventById(id)
        setEvent(response.data)
      } catch (error) {
        WebApp.showAlert('Error fetching event: ' + error.message)
      }
    }
    fetchEvent()

    return () => {
      WebApp.BackButton.hide()
      WebApp.BackButton.offClick()
    }
  }, [id, navigate])

  const handleVote = async (voteValue) => {
    try {
      const response = await voteEvent(id, voteValue)
      setEvent(response.data)
      WebApp.showAlert('Vote recorded successfully!')
    } catch (error) {
      WebApp.showAlert('Error voting: ' + error.message)
    }
  }

  if (!event) return <div>Loading...</div>

  return (
    <div className="bg-white shadow-md rounded-lg p-4" style={{ backgroundColor: WebApp.secondaryBgColor }}>
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <p className="text-sm text-gray-500 mb-2">Date: {new Date(event.date).toLocaleString()}</p>
      <p className="text-sm text-gray-500 mb-2">Location: {event.location}</p>
      <p className="text-sm text-gray-500 mb-2">Category: {event.category}</p>
      <p className="text-sm text-gray-500 mb-4">Organizer: {event.organizer}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => handleVote(1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          style={{ backgroundColor: WebApp.buttonColor, color: WebApp.buttonTextColor }}
        >
          Upvote
        </button>
        <button
          onClick={() => handleVote(-1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          style={{ backgroundColor: WebApp.buttonColor, color: WebApp.buttonTextColor }}
        >
          Downvote
        </button>
      </div>
      <p className="mt-4">Votes: {event.votes}</p>
    </div>
  )
}

export default EventDetails