import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: "http://144.202.70.222/api"
});

export const effect = (effect: AxiosRequestConfig) => api(effect);

export default api;
