import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LoggedInInterceptor from './router/LoggedInInterceptor';
import LoggedOutInterceptor from './router/LoggedOutInterceptor';
import RoleAwareComponent from './router/RoleAwareComponent';
import NavBarClient from './components/NavBarClient';
import NavBarConsultant from './components/NavBarConsultant';
import NavBarAdmin from './components/NavBarAdmin';
import LogInPage from './pages/LogInPage';
import ConsultantManageProfilePage from './pages/consultant/ManageProfilePage';
import ClientManageProfilePage from './pages/client/ManageProfilePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<LoggedInInterceptor redirect="/login" />}>
          <Route
            index
            element={
              <RoleAwareComponent
                client={<NavBarClient />}
                consultant={<NavBarConsultant />}
                admin={<NavBarAdmin />}
              />
            }
          />
          <Route
            path="manage-profile"
            element={
              <RoleAwareComponent
                client={<ClientManageProfilePage />}
                consultant={<ConsultantManageProfilePage />}
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
