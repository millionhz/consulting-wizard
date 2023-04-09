import React, { useContext, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../api/firebaseAuth';
import { UserContext } from '../context/UserContext';
import NavBarLogin from '../components/NavBarLogin';
import Footer from '../components/Footer';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  const { authenticate } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@lums.edu.pk')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    logIn(email, password)
      .then(authenticate)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid>
      <NavBarLogin page="Login" />
      <Grid
        container
        direction="column"
        bgcolor="white"
        width={700}
        height={500}
        borderRadius="20px"
        alignContent
        padding={5}
        margin="auto"
        marginTop={6}
        marginBottom={7}
      >
        <Grid
          container
          direction="column"
          bgcolor="white"
          width={200}
          height={500}
          borderRadius="20px"
          alignContent
          padding={5}
        >
          <Triangle />
          <Square />
          <Circle />
        </Grid>
        <Grid
          container
          direction="column"
          bgcolor="#E9D6EC"
          width={400}
          height={500}
          borderRadius="20px"
          alignContent
          padding={5}
        >
          <Grid item xl={3} md={3} sm={3} xs={3}>
            <br />
            <Title> Welcome Back!</Title>
            <Subtitle>Welcome Back. Please enter your details.</Subtitle>
          </Grid>
          <Grid item xl={3} md={3} sm={3} xs={3} marginBottom={-4}>
            {/* <Grid item xl={3} md={3} sm={3} xs={3} alignContent={true}>

        </Grid> */}
            <Grid
              item
              xl={3}
              md={3}
              sm={3}
              xs={3}
              paddingLeft={8.3}
              fontSize={11}
              color="#786E6E"
              fontWeight={500}
            >
              Email:
            </Grid>
            <TextField
              style={{
                backgroundColor: 'white',
                borderRadius: '4px',
              }}
              InputProps={{
                style: {
                  width: '190px',
                  height: '25px',
                  fontSize: '11px',
                },
              }}
              required
              className="inputbox"
              id="outlined-input"
              name="email"
              type="email"
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? 'Invalid email address' : ''}
            />
          </Grid>
          <Grid item xl={3} md={3} sm={3} xs={3}>
            <Grid
              item
              xl={3}
              md={3}
              sm={3}
              xs={3}
              paddingLeft={8.3}
              fontSize={11}
              color="#786E6E"
              fontWeight={500}
            >
              Password:
            </Grid>
            <TextField
              style={{
                backgroundColor: 'white',
                borderRadius: '4px',
              }}
              InputProps={{
                style: {
                  width: '190px',
                  height: '25px',
                  fontSize: '11px',
                },
                autoComplete: 'new-password',
              }}
              InputLabelProps={
                {
                  // shrink: false,
                }
              }
              required
              id="password"
              name="password"
              type="password"
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xl={3} md={3} sm={3} xs={3}>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                backgroundColor: '#0b0b45',
                borderColor: '#0b0b45',
                '&:hover': {
                  color: '#0b0b45',
                  borderColor: '#0b0b45',
                },
              }}

              onClick={handleSubmit}
              // disabled={!password || !email}
              style={{
                height: 25,
                width: 190,
                fontSize: 10,
                paddingTop: 6,
                fontWeight: 400,
                textTransform: 'none',
              }}
            >
              Log In
            </Button>

            <Grid
              item
              display="flex"
              direction="row"
              justifyContent="center"
              alignItems="left"
              marginTop={2}
              fontSize={9}
              color="#5E5858"
              fontWeight={600}
            >
              <a
                href="#"
                style={{
                  textDecoration: 'none',
                  color: '#0b0b45',
                  paddingLeft: 5,
                  marginRight: 15,
                }}
              >
                Forgot Password
              </a>
              <a
                href="#"
                style={{
                  textDecoration: 'none',
                  color: '#0b0b45',
                  paddingLeft: 5,
                  marginLeft: 15,
                }}
              >
                Change Password
              </a>
            </Grid>

            <Grid
              item
              display="flex"
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginTop={2}
              fontSize={10}
              color="#5E5858"
              fontWeight={600}
            >
              <signUpPrompt>Don't have an account?</signUpPrompt>
              <a
                href="/signup/"
                style={{
                  textDecoration: 'none',
                  color: '#0b0b45',
                  paddingLeft: 5,
                }}
              >
                Sign Up
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

const Title = styled.div`
  font-weight: 800;
  color: #000000;
  font-size: 20px;
`;

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 2rem;
`;

const Square = styled.div`
  background-color: #96bdc6;
  height: 60px;
  width: 60px;
  position: relative;
  top: 50px;
  right: -50px;
`;

const Circle = styled.div`
  background-color: #0b0b45;
  height: 60px;
  width: 60px;
  position: relative;
  top: 30px;
  right: -25px;
  border-radius: 30px;
`;

const Triangle = styled.div`
  background-color: white;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid #e9d6ec;
  position: relative;
  top: 110px;
  right: 20px;
`;

export default LogInPage;
