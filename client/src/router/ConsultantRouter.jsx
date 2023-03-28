import { createBrowserRouter } from 'react-router-dom';

const ConsultantRouter = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <h1>Consultant Home Page</h1>,
  },
]);

export default ConsultantRouter;
