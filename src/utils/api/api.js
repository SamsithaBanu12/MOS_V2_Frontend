import axios from 'axios'
import { refreshAccessToken } from '../api'

export const API = axios.create({
  baseURL: 'http://localhost:8001/api/bridge', // change if your backend runs elsewhere
  timeout: 10000,
})

// Request interceptor: add Bearer token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401 and refresh token
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        // Retry with new token
        return API(originalRequest);
      } catch (refreshError) {
        // Refresh failed, let the app handle redirection if needed
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// ---------- Stations ----------
export async function getStations() {
  const { data } = await API.get('/stations')
  // Normalize minimal shape + pass-thru meta so App can display topics per station
  return (data || []).map(s => ({
    id: s.id,
    name: s.name,
    broker_b_host: s.broker_b_host,
    broker_b_port: s.broker_b_port,
    broker_b_username: s.broker_b_username || '',
    topic_uplink: s.topic_uplink,
    topic_downlink: s.topic_downlink,
    // health meta (per-station)
    health_host: s.health_host,
    health_port: s.health_port,
    health_sband_topic: s.health_sband_topic,
    health_xband_topic: s.health_xband_topic,
  }))
}

// ---------- Bridge control / status ----------
export async function getStatus(station) {
  const { data } = await API.get('/status', { params: { station } })
  return data
}

export async function connectBridge(station) {
  const { data } = await API.post('/connect', null, { params: { station } })
  return data
}

export async function disconnectBridge(station) {
  const { data } = await API.post('/disconnect', null, { params: { station } })
  return data
}

// ---------- Topic messages ----------
export async function fetchMessages(station, topic, limit = 200, offset = 0) {
  const { data } = await API.get('/messages', {
    params: { station, topic, limit, offset }
  })
  return data
}

// ---------- Health streams ----------
export async function fetchHealth(stationId, band, limit = 200, offset = 0) {
  const { data } = await API.get('/health/messages', {
    params: { station: stationId, band, limit, offset }
  })
  return data?.items || []
}
