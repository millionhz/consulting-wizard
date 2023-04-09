import styled from '@emotion/styled';
import NavLink from './NavbarLinks';

function NavBarClient({ page }) {
  return (
    <NavbarDiv className="navbar">
      <div className="navbar__logo">
        <Logo src="/logo.png" alt="logo" />
      </div>
      <NavbarLinks>
        <NavLink title="About" page={page} link="/" />
        <NavLink
          title="Book Appointment"
          page={page}
          link="/book-appointment"
        />
        <NavLink
          title="View Appointments"
          page={page}
          link="/view-appointments"
        />
        <NavLink title="Settings" page={page} link="/manage-profile" />
        <NavLink title="Logout" page={page} />
      </NavbarLinks>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.005rem solid #938d8d;
  position: sticky;
  top: 0;
  background-color: #0b0b45;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  padding: 0px 20px 0px 20px;
`;

const NavbarLinks = styled.div`
  padding: 20px;
`;

export default NavBarClient;
