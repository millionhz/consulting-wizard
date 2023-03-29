import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './context/UserContext';
import './index.css';
// import Login from './pages/LogInPage';
// import CounsellorSignUp from './pages/CounsellorSignUp';
// import StudentSignUp from './pages/StudentSignUp';
// import LandingPage from './pages/landingPageStudent';
import Header from './components/NavBarAdmin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <Header/>
    </UserContextProvider>
  </React.StrictMode>
);
