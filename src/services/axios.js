// src/services/axios.js
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080', // your Go backend URL
  headers: {
    'Content-Type': 'application/json',
  },
})
