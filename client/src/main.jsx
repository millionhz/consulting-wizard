import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ViewProfile from './pages/ViewProfile';
import LoginPage from './pages/LogInPage'
import UserContextProvider from './context/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      {/* <App /> */}
      <ViewProfile />
    {/* <LoginPage/> */}
    </UserContextProvider>
  </React.StrictMode>
);
