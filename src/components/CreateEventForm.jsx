import React, { useState } from 'react'
import { createEvent } from '../utils/api'
import WebApp from '@twa-dev/sdk'

const CreateEventForm = ({ onEventCreated }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newEvent = await createEvent({ title, description, date, location, category })
      onEventCreated(newEvent)
      WebApp.showAlert('Event created successfully!')
    } catch (error) {
      WebApp.showAlert('Error creating event: ' + error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Event Location"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Event Category"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
        style={{ backgroundColor: WebApp.buttonColor, color: WebApp.buttonTextColor }}
      >
        Create Event
      </button>
    </form>
  )
}

export default CreateEventForm