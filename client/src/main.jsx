import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UserContextProvider from './context/UserContext';
import Landing from './pages/client/LandingPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <Landing />
    </UserContextProvider>
  </React.StrictMode>
);
