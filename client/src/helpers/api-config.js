import axios from 'axios';

const baseUrl = 'tome-api.herokuapp.com' 

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;
