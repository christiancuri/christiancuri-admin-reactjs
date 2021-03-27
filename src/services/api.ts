import axios from 'axios';

import * as Session from './Session';

const baseURL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(config => {
  const nConfig = { ...config };
  if (Session.isAuthenticated()) {
    nConfig.headers.Authorization = Session.getToken();
  }
  return nConfig;
});

api.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status;
    if (error && status === 401 && Session.isAuthenticated()) {
      Session.logout();
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);
