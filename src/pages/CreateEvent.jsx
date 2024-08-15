import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateEventForm from '../components/CreateEventForm'
import WebApp from '@twa-dev/sdk'

const CreateEvent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    WebApp.BackButton.show()
    WebApp.BackButton.onClick(() => navigate(-1))

    return () => {
      WebApp.BackButton.hide()
      WebApp.BackButton.offClick()
    }
  }, [navigate])

  const handleEventCreated = (newEvent) => {
    navigate(`/event/${newEvent._id}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Create New Event</h1>
      <CreateEventForm onEventCreated={handleEventCreated} />
    </div>
  )
}

export default CreateEvent