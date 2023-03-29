import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import LoggedInInterceptor from './router/LoggedInInterceptor';
import LoggedOutInterceptor from './router/LoggedOutInterceptor';
import RoleAwareComponent from './router/RoleAwareComponent';
import NavBar from './components/NavBar';
import LogInPage from './pages/LogInPage';
import ManageProfilePage from './pages/ManageProfilePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<LoggedInInterceptor redirect="/login" />}>
          <Route
            index
            element={
              <RoleAwareComponent
                client={<NavBar />}
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
        </Route>
        <Route element={<LoggedOutInterceptor redirect="/" />}>
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<h1>Signup Page</h1>} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
