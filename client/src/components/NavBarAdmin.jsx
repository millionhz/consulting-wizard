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
          <NavLink title="Reported Clients" page={page} />
          <NavLink title="Reported Counselors" page={page} />
          <NavLink
            title="Reported Feedback"
            page={page}
            link="/reported-feedback"
          />
          <NavLink title="Logout" page={page} link="/logout" />
        </NavLinksRow>
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

const NavLinksRow = styled.div`
  text-align: right;
`;

export default NavBarAdmin;
