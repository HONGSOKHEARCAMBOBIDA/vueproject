// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiService = {
  getPosts() {
    return axios.get(`${API_BASE_URL}/photos`);
  }
};
