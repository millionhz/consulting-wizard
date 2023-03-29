import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function LoggedOutInterceptor({ redirect }) {
  const { isAuthenticated } = useContext(UserContext);

  if (isAuthenticated === false) {
    return <Outlet />;
  }

  if (isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  return <div>Loading...</div>;
}

export default LoggedOutInterceptor;
