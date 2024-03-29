import React, { useState, useContext } from 'react';
// import NavBarLogin from '../components/NavBar_Login';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { updatePassword } from '../api/firebaseAuth';
import { UserContext } from '../context/UserContext';

function AuthForm({ onSubmit, error }) {
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordFormatError, setPasswordFormatError] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (newPassword.length < 8) {
      setPasswordFormatError('Password must be 8 characters at least');
    } else {
      setPasswordFormatError('');
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError('Passwords do not match!');
    } else {
      setPasswordError('');
    }
    if (!passwordError && !passwordFormatError) {
      onSubmit(newPassword);
    }
  };

  return (
    <div>
      {/* <NavBarLogin /> */}
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
        <h1 style={{ marginBottom: '0' }}>Forgot Password</h1>

        <div
          style={{
            marginTop: '4rem',
            textAlign: 'justify',
          }}
        >
          <form onSubmit={submitHandler}>
            <label
              style={{
                textAlign: 'justify',
                marginLeft: '20px',
              }}
            >
              <strong>New Password:</strong>
              <br />
              <input
                id="newPassword"
                type="password"
                placeholder="Enter new Password"
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
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <br />
            </label>

            <label
              style={{
                textAlign: 'justify',
                marginLeft: '20px',
              }}
            >
              <strong>Confirm New Password:</strong>
              <br />
              <input
                id="confirmNewPassword"
                type="password"
                placeholder="Re-enter New Password"
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
          </form>
        </div>

        <button
          type="submit"
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
function ForgotPassword() {
  const [isError, setError] = useState(false);
  const navigate = useNavigate();
  const { email, password } = useContext(UserContext);
  const submitHandler = (newPassword) => {
    updatePassword(email, password, newPassword)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setError(true);
      });
  };

  return <AuthForm onSubmit={submitHandler} error={isError} />;
}

export default ForgotPassword;
