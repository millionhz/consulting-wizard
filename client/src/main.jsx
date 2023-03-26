import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './context/UserContext';
import './index.css';
import FeedbackList from './components/Feedback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
      <FeedbackList/>
    </UserContextProvider>
  </React.StrictMode>
);
