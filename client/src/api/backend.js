import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getCookie = (token) => api.post('/getCookie', { token });

export const authenticate = () => api.get('/authenticate');

export const updatePassword = (password, newPassword) =>
api.patch(`/server/routes/api/user/password`, {password, newPassword});


export default api;
