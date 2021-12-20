import { default as axios } from 'axios';

// Instantiate axios client
export const httpClient = axios.create({
  baseURL: 'http://localhost:4200/api',
  headers: { 'Content-Type': 'application/json' },
});
