import { createBrowserRouter } from 'react-router-dom';

const BaseRouter = createBrowserRouter([
  {
    path: '*',
    element: <h1>Loading...</h1>,
    index: true,
  },
]);

export default BaseRouter;
