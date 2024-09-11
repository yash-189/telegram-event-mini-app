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
    <div className='max-w-xl mx-auto  h-full min-h-[80vh] flex justify-center items-center '>

      <CreateEventForm onEventCreated={handleEventCreated} />
    </div>
  )
}

export default CreateEvent