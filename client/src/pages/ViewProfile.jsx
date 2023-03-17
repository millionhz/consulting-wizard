import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function profileItem(props) {
  const editHandler = () => {
    console.log('edit button clicked');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        marginBottom: '0.5rem',
      }}
    >
      <div>
        <p
          style={{
            fontSize: '0.9rem',
            color: '#786E6E',
            marginBottom: '0',
            marginTop: '0',
          }}
        >
          {props.title}
        </p>
        <p style={{ fontSize: '1.2rem', marginTop: '0' }}>
          {props.description}
        </p>
      </div>
      <div>
        <button
          onClick={editHandler}
          style={{ background: 'none', border: 'none' }}
        >
          <img
            src="../../public/assets/edit.png"
            alt="edit"
            style={{ width: '20px', height: 'auto', marginLeft: '1rem' }}
          />
        </button>
      </div>
    </div>
  );
}

function ViewProfile() {
  const [isHover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!isHover);
  };

  const saveHandler = () => {
    console.log('save button clicked');
  };

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    major: 'Computer Science',
    yearOfGraduation: '2024',
    linkedIn: 'linkedin.com/johndoe',
    additionalInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  };

  return (
    <div>
      <NavBar />

      <div
        className="profile"
        style={{
          minHeight: '30vh',
          width: '30vw',
          background: '#ffffff',
          margin: 'auto',
          marginTop: '15vh',
          marginBottom: '6rem',
          borderRadius: '1rem',
          padding: '6rem 3.5rem 6rem 3.5rem',
          color: '#000000',
        }}
      >
        <h1 style={{ marginBottom: '0' }}>Account Management</h1>
        <h5 style={{ marginTop: '0' }}>Manage your account details</h5>

        <div
          style={{
            marginTop: '5rem',
            textAlign: 'justify',
          }}
        >
          {profileItem({
            title: 'First Name',
            description: user.firstName,
          })}
          {profileItem({
            title: 'Last Name',
            description: user.lastName,
          })}
          {profileItem({
            title: 'Email',
            description: user.email,
          })}
          {profileItem({
            title: 'Major',
            description: user.major,
          })}
          {profileItem({
            title: 'Year of Graduation',
            description: user.yearOfGraduation,
          })}
          {profileItem({
            title: 'LinkedIn',
            description: user.linkedIn,
          })}
          {profileItem({
            title: 'Additional Information',
            description: user.additionalInformation,
          })}
        </div>

        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={saveHandler}
          style={{
            background: isHover ? '#2C8612' : '#2C9612',
            border: 'none',
            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
            width: '300px',
            borderRadius: '10px',
            color: '#ffffff',
            fontSize: '1rem',
            marginTop: '4rem',
          }}
        >
          Save Changes
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default ViewProfile;
