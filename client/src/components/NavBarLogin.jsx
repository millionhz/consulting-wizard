import React from 'react';
import styled from '@emotion/styled';
import NavLink from './NavbarLinks';

function NavBarLogin({ page }) {
  return (
    <NavbarDiv className="navbar">
      <div className="navbar__logo">
        <Logo src="/logo.png" alt="logo" />
      </div>
      <NavbarLinks>
        <NavLink title="Login" page={page} link="/login" />
        <NavLink title="Sign Up" page={page} link="/signup" />
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

export default NavBarLogin;
