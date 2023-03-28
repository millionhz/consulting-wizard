import { createBrowserRouter } from 'react-router-dom';
import LogInPage from '../pages/LogInPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home Page</h1>,
  },
  {
    path: '/login',
    element: <LogInPage />,
  },
  {
    path: '/signup',
    element: <h1>SignUp Page</h1>,
  },
]);

export default router;
