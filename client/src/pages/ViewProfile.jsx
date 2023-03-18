import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function profileItem(props) {
  const [description, setDescription] = useState(props.description);
  const editHandler = (e) => {
    setDescription(e.target.value);
  };

  const rows = description.length / 50 + 1;

  const [isInputField, setInputField] = useState(false);

  const textToInput = () => {
    setInputField(true);
  };

  const inputToText = () => {
    setInputField(false);
  };

  const textField = (
    <p style={{ fontSize: '1.2rem', marginTop: '0' }}>{description}</p>
  );

  const editButton = (
    <button
      onClick={textToInput}
      style={{ background: 'none', border: 'none' }}
    >
      <img
        src="../../public/assets/edit.png"
        alt="edit"
        style={{ width: '20px', height: 'auto', marginLeft: '1rem' }}
      />
    </button>
  );

  const inputField = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.5rem',
      }}
    >
      <textarea
        autoFocus
        type="textarea"
        rows={rows}
        defaultValue={description}
        onChange={editHandler}
        style={{
          width: '100%',
          boxShadow: 'none',
          border: '2px solid',
          borderRadius: '5px',
          fontSize: '1rem',
          fontFamily: 'inherit',
        }}
      />
      <button
        onClick={inputToText}
        style={{
          background: '#2C9612',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          marginLeft: '0.5rem',
          fontSize: '1rem',
        }}
      >
        OK
      </button>
    </div>
  );

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
      <div style={{ width: '100%' }}>
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
        {isInputField ? inputField : textField}
      </div>
      <div>{isInputField || props.title === 'Email' ? null : editButton}</div>
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
          <p>
            <a href="#" style={{ color: '#786E6E' }}>
              {' '}
              Change Password{' '}
            </a>
          </p>
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
