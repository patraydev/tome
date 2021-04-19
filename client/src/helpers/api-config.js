import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
