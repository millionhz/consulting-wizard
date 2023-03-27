import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import App from './App';
import UserContextProvider from './context/UserContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </RouterProvider>
  </React.StrictMode>
);
