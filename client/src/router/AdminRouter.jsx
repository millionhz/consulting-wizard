import { createBrowserRouter } from 'react-router-dom';

const AdminRouter = createBrowserRouter([
  {
    path: '/',
    element: <h1>Admin Homepage</h1>,
    index: true,
  },
]);

export default AdminRouter;
