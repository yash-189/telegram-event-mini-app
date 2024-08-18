import axios from 'axios';
import WebApp from '@twa-dev/sdk';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-api-base-url.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Telegram-Data': WebApp.initData
  }
});

// Interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      WebApp.showAlert(`Error ${error.response.status}: ${error.response.data.message}`);
    } else if (error.request) {
      // The request was made but no response was received
      WebApp.showAlert('No response received from server. Please check your connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      WebApp.showAlert('Error: ' + error.message);
    }
    return Promise.reject(error);
  }
);

// Event related API calls
export const getEvents = () => api.get('/events');
export const getEventById = (id) => api.get(`/events/${id}`);
export const createEvent = (eventData) => api.post('/events', eventData);
export const updateEvent = (id, eventData) => api.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => api.delete(`/events/${id}`);
export const voteEvent = (id, voteValue) => api.post(`/events/${id}/vote`, { value: voteValue });

// User related API calls
export const getUserProfile = () => api.get('/user/profile');
export const updateUserProfile = (profileData) => api.put('/user/profile', profileData);
export const getUserEvents = () => api.get('/user/events');

// Authentication related API calls (if needed)
export const login = (credentials) => api.post('/auth/login', credentials);
export const logout = () => api.post('/auth/logout');
export const register = (userData) => api.post('/auth/register', userData);

// Category related API calls (if you have event categories)
export const getCategories = () => api.get('/categories');
export const getCategoryById = (id) => api.get(`/categories/${id}`);

// Comment related API calls (if you allow comments on events)
export const getEventComments = (eventId) => api.get(`/events/${eventId}/comments`);
export const addComment = (eventId, commentData) => api.post(`/events/${eventId}/comments`, commentData);
export const deleteComment = (eventId, commentId) => api.delete(`/events/${eventId}/comments/${commentId}`);

// Search related API call
export const searchEvents = (query) => api.get(`/events/search?q=${query}`);

// RSVP related API calls (if you allow RSVPs for events)
export const rsvpToEvent = (eventId, status) => api.post(`/events/${eventId}/rsvp`, { status });
export const getRsvpStatus = (eventId) => api.get(`/events/${eventId}/rsvp`);

// Notification related API calls (if you have a notification system)
export const getNotifications = () => api.get('/notifications');
export const markNotificationAsRead = (notificationId) => api.put(`/notifications/${notificationId}/read`);


export const getTelegramUser = () => {
  return WebApp.initDataUnsafe?.user || null;
};

export default api;