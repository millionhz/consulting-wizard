import styled from '@emotion/styled';
import NavLink from './NavbarLinks';

function NavBarAdmin({ page }) {
  return (
    <NavbarDiv className="navbar">
      <div className="navbar__logo">
        <Logo src="/logo.png" alt="logo" />
      </div>
      <NavbarLinks>
        <NavLinksRow>
          <NavLink title="About" page={page} />
          <NavLink title="Settings" page={page} />
          <NavLink title="Logout" page={page} />
        </NavLinksRow>
        <NavLinksRow>
          <NavLink title="Reported Accounts" page={page} />
          <NavLink title="Reported Feedback" page={page} />
          <NavLink title="Deactivation Requests" page={page} />
          <NavLink title="Reactivation Requests" page={page} />
        </NavLinksRow>
      </NavbarLinks>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.005rem solid #938d8d;
  position: sticky;
  top: 0;
  background-color: #0b0b45;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  padding: 0px 20px 0px 20px;
`;

const NavbarLinks = styled.div`
  padding: 20px;
`;

const NavLinksRow = styled.div`
  text-align: right;
`;

export default NavBarAdmin;
