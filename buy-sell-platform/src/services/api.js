import axios from "axios";

const api = axios.create({
  baseURL: "https://ads.planetmedia.app",
  headers: {
    "x-api-key": "4a23647b-f3b7-4cf0-b7e7-f11b703dc29b", 
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
