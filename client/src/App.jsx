import { useContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { UserContext } from './context/UserContext';
import LogInPage from './pages/LogInPage';
import ManageProfilePage from './pages/ManageProfilePage';
import userTypes from './utils/userTypes';

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

function RoleAwareComponent({ client, consultant, admin }) {
  const { type } = useContext(UserContext);

  if (type === userTypes.CLIENT) {
    return client;
  }

  if (type === userTypes.CONSULTANT) {
    return consultant;
  }

  if (type === userTypes.ADMIN) {
    return admin;
  }
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<LoggedInInterceptor redirect="/login" />}>
          <Route
            index
            element={
              <RoleAwareComponent
                client={<h1>Client</h1>}
                consultant={<h1>Consultant</h1>}
                admin={<h1>Admin</h1>}
              />
            }
          />
          <Route
            path="manage-profile"
            element={
              <RoleAwareComponent
                client={<ManageProfilePage />}
                consultant={<ManageProfilePage />}
                admin={<Navigate to="/" />}
              />
            }
          />
          <Route path="dashboard" element={<h1>dashboard</h1>} />
          <Route path="about" element={<h1>about</h1>} />
        </Route>
        <Route element={<LoggedOutInterceptor redirect="/" />}>
          <Route path="login" element={<LogInPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
