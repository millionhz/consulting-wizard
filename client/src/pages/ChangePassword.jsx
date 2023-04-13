import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import { updatePassword } from '../api/firebaseAuth';
import { UserContext } from '../context/UserContext';

function AuthForm({ onSubmit, error }) {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordFormatError, setPasswordFormatError] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (newPassword.length < 6) {
      return setPasswordFormatError('Password must be 6 characters at least');
    }
    setPasswordFormatError('');

    if (newPassword !== confirmNewPassword) {
      return setPasswordError('Passwords do not match!');
    }
    setPasswordError('');

    if (!passwordError && !passwordFormatError) {
      onSubmit(password, newPassword);
    }
  };

  return (
    <div>
      <div
        className="background"
        style={{
          minHeight: '30vh',
          width: '30vw',
          background: '#ffffff',
          margin: 'auto',
          marginTop: '15vh',
          marginBottom: '5rem',
          borderRadius: '1rem',
          padding: '6rem 3.5rem 6rem 3.5rem',
          color: '#000000',
        }}
      >
        <h1
          style={{
            marginBottom: '0',
          }}
        >
          Change Password
        </h1>
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'justify',
          }}
        >
          <form onSubmit={submitHandler}>
            <label
              style={{
                textAlign: 'left',
                marginLeft: '20px',
              }}
            >
              <strong style={{ marginLeft: '1rem' }}>Old Password:</strong>
              <br />
              <input
                id="oldPassword"
                type="password"
                placeholder="Enter Old Password"
                style={{
                  marginLeft: '20px',
                  border: 'none',
                  background: '#D9D9D9',
                  color: '#000000',
                  width: '250px',
                  description: 'Old Password',
                  padding: '12px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  marginTop: '10px',
                  marginRight: '20px',
                }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
            </label>
            <label
              style={{
                textAlign: 'left',
                marginLeft: '20px',
              }}
            >
              <strong style={{ marginLeft: '1rem' }}>New Password:</strong>
              <br />
              <input
                id="newPassword"
                type="password"
                placeholder="Enter New Password"
                style={{
                  marginLeft: '20px',
                  border: 'none',
                  background: '#D9D9D9',
                  color: '#000000',
                  width: '250px',
                  padding: '12px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  marginTop: '10px',
                  marginRight: '30px',
                }}
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </label>
            <div
              style={{
                color: 'red',
                marginLeft: '20px',
              }}
            >
              {passwordFormatError}
            </div>

            <label
              style={{
                textAlign: 'left',
                marginLeft: '20px',
              }}
            >
              <strong style={{ marginLeft: '1rem' }}>
                Confirm New Password:
              </strong>
              <br />
              <input
                id="confirmNewPassword"
                type="password"
                placeholder="Confirm New Password"
                style={{
                  marginLeft: '20px',
                  border: 'none',
                  background: '#D9D9D9',
                  color: '#000000',
                  width: '250px',
                  padding: '12px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  marginTop: '10px',
                  marginRight: '15px',
                }}
                value={confirmNewPassword}
                onChange={(event) => setConfirmNewPassword(event.target.value)}
              />
            </label>
            <div
              style={{
                color: 'red',
                marginLeft: '20px',
              }}
            >
              {passwordError}
            </div>
          </form>
        </div>

        <button
          onClick={submitHandler}
          type="button"
          style={{
            background: '#2C9612',
            border: 'none',
            padding: '0.5rem 1.5rem 0.5rem 1.5rem',
            width: '175px',
            borderRadius: '30px',
            color: '#ffffff',
            fontSize: '1rem',
            marginTop: '3.5rem',
          }}
        >
          <strong>Confirm</strong>
        </button>
      </div>
      <Footer />
    </div>
  );
}

function ChangePassword() {
  const { email } = useContext(UserContext);
  const [isError, setError] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (password, newPassword) => {
    updatePassword(email, password, newPassword)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return <AuthForm onSubmit={submitHandler} error={isError} />;
}

export default ChangePassword;
