import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const sessionLogIn = (token) => api.post('/logIn', { token });

export const signUpClient = (client) => api.post('/signUp/client', client);

export const signUpConsultant = (consultant) =>
  api.post('/signUp/consultant', consultant);

export const authenticate = () => api.get('/authenticate');

export const getProfileInfo = () => api.get('/profile');

export const setProfileInfo = (attr) => api.patch('/profile', attr);

export const getConsultants = () => api.get('/consultant');

export const getConsultantById = (id) => api.get(`/consultant/${id}`);

export const getClientById = (id) => api.get(`/client/${id}`);

export const setClientReview = (review) => api.post('/feedback', review);

export const getAvailableAppointments = (consultant, year, month, date) =>
  api.get(`/appointment/client`, { params: { consultant, year, month, date } });

export const bookAppointment = (appointmentId) =>
  api.post(`/appointment/client`, { appointmentId });

export const viewPastAppointmentsClient = () =>
  api.get('/appointment/client/past');

export const viewUpcomingAppointmentsClient = () =>
  api.get('/appointment/client/upcoming');

export const viewPastAppointmentsConsultant = () =>
  api.get('/appointment/consultant/past');

export const viewUpcomingAppointmentsConsultant = () =>
  api.get('/appointment/consultant/upcoming');
export const viewReportedFeedback = () => api.get('/feedback');

export const deleteFeedback = (id) => api.delete(`/feedback/delete/${id}`);

export const falseReport = (id) => api.post(`/feedback/ignore/${id}`);

export default api;
