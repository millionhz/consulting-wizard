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
import ClientSearch from './pages/client/Search';
import ClientBookAppointment from './pages/client/BookAppointment';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<LoggedInInterceptor redirect="/login" />}>
          <Route
            index
            element={
              <RoleAwareComponent
                client={<NavBarClient page="About" />}
                consultant={<NavBarConsultant page="About" />}
                admin={<NavBarAdmin page="About" />}
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
          <Route
            path="book-appointment"
            element={<RoleAwareComponent client={<ClientSearch />} />}
          />
          <Route
            path="book-appointment/:id"
            element={<RoleAwareComponent client={<ClientBookAppointment />} />}
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
