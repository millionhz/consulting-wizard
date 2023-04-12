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

export const getFeedback = () => api.get('/feedback/all-feedback');

export const reportFeedback = (id) => api.post(`/feedback/report/${id}`);

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
export const viewReportedFeedback = () => api.get('/feedback/view');

export const deleteFeedback = (id) => api.delete(`/feedback/delete/${id}`);

export const falseReport = (id) => api.post(`/feedback/ignore/${id}`);

export const getReportedClients = () => api.get('/admin/reportedClients');

export const getReportedCounsultants = () =>
  api.get('/admin/reportedConsultants');

export const falseReportOfClient = (id) =>
  api.post(`/admin/ignoreClient/${id}`);

export const falseReportOfConsultant = (id) =>
  api.post(`/admin/ignoreConsultant/${id}`);

export const deactivateClient = (id) =>
  api.post(`/admin/deactivateClient/${id}`);

export const deactivateConsultant = (id) =>
  api.post(`/admin/deactivateConsultant/${id}`);

export const logout = () => api.post('/logout');

export const addAppointmentTime = (from, to) =>
  api.post('/appointment/consultant', { from, to });

export const getAppointmentsByDate = (date) =>
  api.get(`/appointment/consultant/${date}`);

export const getAvailableAppointments = (id, date) =>
  api.get(`/appointment/client`, { params: { id, date } });

export const deleteAppointment = (id) =>
  api.delete(`/appointment/consultant/${id}`);

export const reportClient = (id) => api.post(`/client/${id}`);

export default api;
