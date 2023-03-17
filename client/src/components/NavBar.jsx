import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function navLink(props) {
  const [isHover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!isHover);
  };

  return (
    <a
      href="#"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        margin: '0 25px 0 25px',
        color: props.title === 'Settings' || isHover ? '#bfab25' : '#ffffff',
        textDecoration: 'none',
        fontSize: '0.85rem',
      }}
    >
      {props.title}
    </a>
  );
}

function NavBar() {
  return (
    <div
      className="navbar"
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '0.005rem solid #938D8D',
        position: 'sticky',
        top: '0',
        backgroundColor: '#0b0b45',
      }}
    >
      <div className="navbar__logo">
        <img
          src="../../public/assets/logo.png"
          alt="logo"
          style={{
            width: '200px',
            height: 'auto',
            padding: '0px 20px 0px 20px',
          }}
        />
      </div>
      <div className="navbar__links" style={{ padding: '20px' }}>
        {navLink({ title: 'About' })}
        {navLink({ title: 'Book Appointment' })}
        {navLink({ title: 'View Appointments' })}
        {navLink({ title: 'Settings' })}
        {navLink({ title: 'Logout' })}
      </div>
    </div>
  );
}

export default NavBar;
