import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: "http://milho.rodrigojpaiva.com.br/api"
});

export const effect = (effect: AxiosRequestConfig) => api(effect);

export default api;
