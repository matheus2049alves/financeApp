import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ip:3333',
});