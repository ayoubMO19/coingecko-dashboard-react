import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Token interceptor para enviar el token automáticamente
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (username, password) =>
  api.post("/login/login", { username, password });

export const getGlobalInfo = () =>
  api.get("/global/global");

export const getTopTenCoins = () =>
  api.get("/coins/top-ten-coins");

export const getCoinDetails = (coinId) =>
  api.get(`/coins/get-coin-details?coinId=${coinId}`);

export default api;
