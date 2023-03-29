import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function LoggedInInterceptor({ redirect }) {
  const { isAuthenticated } = useContext(UserContext);

  if (isAuthenticated === false) {
    return <Navigate to={redirect} />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <div>Loading...</div>;
}

export default LoggedInInterceptor;
