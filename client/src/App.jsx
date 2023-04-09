import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LoggedInInterceptor from './router/LoggedInInterceptor';
import LoggedOutInterceptor from './router/LoggedOutInterceptor';
import RoleAwareComponent from './router/RoleAwareComponent';
import LogInPage from './pages/LogInPage';
import SignUpRole from './pages/SignUpRole';
import SignUpPageConsultant from './pages/consultant/SignUpPage';
import SignUpPageClient from './pages/client/SignUpPage';
import ConsultantManageProfilePage from './pages/consultant/ManageProfilePage';
import ClientManageProfilePage from './pages/client/ManageProfilePage';
import ClientSearch from './pages/client/Search';
import ClientBookAppointment from './pages/client/BookAppointment';
import AddReview from './pages/client/AddReview';
import ConsultantProfile from './pages/client/ConsultantProfile';
import ClientProfile from './pages/consultant/ClientProfile';
import ClientViewAppointments from './pages/client/ViewAppointments';
import ConsultantViewAppointments from './pages/consultant/ViewAppointments';
import ConsultantLanding from './pages/consultant/LandingPage';
import AdminLanding from './pages/admin/LandingPage';
import ClientLanding from './pages/client/LandingPage';
import ViewReportedFeedback from './pages/admin/ViewReportedFeedback';
import ChangePassword from './pages/ChangePassword';
import LogoutPage from './pages/LogoutPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<LoggedInInterceptor redirect="/login" />}>
          <Route
            index
            element={
              <RoleAwareComponent
                client={<ClientLanding />}
                consultant={<ConsultantLanding />}
                admin={<AdminLanding />}
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

          <Route path="change-password" element={<ChangePassword />} />

          <Route
            path="book-appointment"
            element={<RoleAwareComponent client={<ClientSearch />} />}
          />
          <Route
            path="book-appointment/:id"
            element={<RoleAwareComponent client={<ClientBookAppointment />} />}
          />
          <Route
            path="view-appointments/"
            element={
              <RoleAwareComponent
                client={<ClientViewAppointments />}
                consultant={<ConsultantViewAppointments />}
              />
            }
          />
          <Route
            path="add-review/:id"
            element={<RoleAwareComponent client={<AddReview />} />}
          />
          <Route
            path="consultant/:id"
            element={<RoleAwareComponent client={<ConsultantProfile />} />}
          />
          <Route
            path="client/:id"
            element={<RoleAwareComponent consultant={<ClientProfile />} />}
          />
          <Route
            path="reported-feedback"
            element={<RoleAwareComponent admin={<ViewReportedFeedback />} />}
          />
          <Route path="logout" element={<LogoutPage />} />
        </Route>

        <Route element={<LoggedOutInterceptor redirect="/" />}>
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpRole />} />
          <Route path="signup/client" element={<SignUpPageClient />} />
          <Route path="signup/consultant" element={<SignUpPageConsultant />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
