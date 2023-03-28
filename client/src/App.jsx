import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { UserContext } from './context/UserContext';

function App() {
  const { router } = useContext(UserContext);

  return <RouterProvider router={router} />;
}

export default App;
