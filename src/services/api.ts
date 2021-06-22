import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ig-news-gubiar.vercel.app/api',
})