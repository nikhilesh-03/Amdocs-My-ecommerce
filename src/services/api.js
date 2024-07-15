// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/'
});

export const getProducts = () => api.get('/products');
export const createOrder = (order) => api.post('/orders', order);
