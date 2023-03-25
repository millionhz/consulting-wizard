import React, { useState, useContext } from 'react';
import styled from 'styled-components';

function navLink(props) {
  const [isHover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!isHover);
  };

  return (
    <NavLink
      href="#"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        color: props.title === props.page ? '#bfab25' : '',
      }}
    >
      {props.title}
    </NavLink>
  );
}

function NavBar(props) {
  return (
    <NavbarDiv className="navbar">
      <div className="navbar__logo">
        <Logo src="../../public/assets/logo.png" alt="logo" />
      </div>
      <div className="navbar__links" style={{ padding: '20px' }}>
        {navLink({ title: 'About', page: props.page })}
        {navLink({ title: 'Book Appointment', page: props.page })}
        {navLink({ title: 'View Appointments', page: props.page })}
        {navLink({ title: 'Settings', page: props.page })}
        {navLink({ title: 'Logout', page: props.page })}
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

const NavLink = styled.a`
  margin: 0 25px 0 25px;
  text-decoration: none;
  font-size: 0.85rem;
  color: #ffffff;

  &:hover {
    color: #bfab25;
  }
`;

export default NavBar;
