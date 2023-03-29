import React, { useState } from 'react';
import styled from '@emotion/styled';

function NavLink({ title, page }) {
  const [isHover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!isHover);
  };

  return (
    <StyledNavLink
      href="#"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        color: title === page ? '#bfab25' : '',
      }}
    >
      {title}
    </StyledNavLink>
  );
}

function NavBar({ page }) {
  return (
    <NavbarDiv className="navbar">
      <div className="navbar__logo">
        <Logo src="/logo.png" alt="logo" />
      </div>
      <div className="navbar__links" style={{ padding: '20px' }}>
        {NavLink({ title: 'About', page })}
        {NavLink({ title: 'Book Appointment', page })}
        {NavLink({ title: 'View Appointments', page })}
        {NavLink({ title: 'Settings', page })}
        {NavLink({ title: 'Logout', page })}
      </div>
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

const StyledNavLink = styled.a`
  margin: 0 25px 0 25px;
  text-decoration: none;
  font-size: 0.85rem;
  color: #ffffff;
  &:hover {
    color: #bfab25;
  }
`;

export default NavBar;
