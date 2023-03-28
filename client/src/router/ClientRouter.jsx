import { createBrowserRouter } from 'react-router-dom';
import ManageProfilePage from '../pages/ManageProfilePage';

const ClientRouter = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <h1>Client Home Page</h1>,
  },
  {
    path: '/profile',
    element: <ManageProfilePage />,
    index: true,
  },
]);

export default ClientRouter;
