import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './context/UserContext';
import './index.css';
import Login from './pages/LogInPage';
import CounsellorSignUp from './pages/CounsellorSignUp';
import StudentSignUp from './pages/StudentSignUp';
import LandingPage from './pages/landingPageStudent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <LandingPage/>
    </UserContextProvider>
  </React.StrictMode>
);
