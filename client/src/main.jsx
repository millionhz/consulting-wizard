/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChangePassword from './pages/ChangePassword';
import LogInPage from './pages/LogInPage';
import UserContextProvider from './context/UserContext';
import UpdatePassword from './pages/UpdatePassword';
import ViewReportedFeedback from './pages/ViewReportedFeedback';
import ViewDeactivationRequests from './pages/ViewDeactivationRequests';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      {/* <App /> */}
      {/* <LogInPage/> */}
      {/* <UpdatePassword/> */}
      {/* <ChangePassword/> */}
      {/* <ViewReportedFeedback /> */}
      <ViewDeactivationRequests />
    </UserContextProvider>
  </React.StrictMode>
);
