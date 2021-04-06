import axios from 'axios';

const baseUrl = REACT_APP_API_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;
