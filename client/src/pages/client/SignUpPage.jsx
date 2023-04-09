import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from 'styled-components';
import NavBarLogin from '../../components/NavBarLogin';
import Footer from '../../components/Footer';
import FormInputDiv from '../../components/FormInputComponent';
import { signUpClient } from '../../api/backend';

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordFormat, setPasswordFormat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [linkedInError, setlinkedInError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [major, setMajor] = useState('');
  const [yearOfGraduation, setGraduationYear] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [bio, setBio] = useState('');

  const PasswordValidate = () => {
    if (confirmPassword !== password) {
      setPasswordError('Password and confirm password do not match!');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PasswordValidate();
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!regex.test(linkedin)) {
      setlinkedInError('Please input a valid link');
    } else {
      setlinkedInError('');
    }
    if (password.length < 8) {
      setPasswordFormat('Password must be 8 characters at least');
    } else {
      setPasswordFormat('');
    }

    if (!email.includes('@lums.edu.pk')) {
      setEmailError(
        'Please enter a valid email address. You can only input your LUMS email ID'
      );
    } else {
      setEmailError('');
    }
    if (!emailError && !passwordError && !passwordFormat && !linkedInError) {
      const displayName = `${firstName} ${lastName}`;
      const data = {
        email,
        password,
        displayName,
        major,
        yearOfGraduation,
        bio,
      };

      signUpClient(data)
        .then((res) => {
          if (res.error) {
            alert(res.error);
          } else {
            alert('Account created successfully!');
            window.location.href = '/login';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <NavBarLogin page="Sign Up" />
      <Container>
        <Header>Fill in the details to join us as a Student!</Header>
        <SignUpForm>
          <FormInputDiv
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            setValue={setFirstName}
          />
          <FormInputDiv
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            setValue={setLastName}
          />
          <FormInputDiv
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your LUMS email"
            setValue={setEmail}
          />
          <ErrorDiv>{emailError}</ErrorDiv>

          <FormInputDiv
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            setValue={setPassword}
          />
          <ErrorDiv> {passwordFormat} </ErrorDiv>
          <FormInputDiv
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            setValue={setConfirmPassword}
          />
          <ErrorDiv> {passwordError} </ErrorDiv>

          <FormInputDiv
            label="Major"
            type="text"
            name="major"
            placeholder="Enter your major"
            setValue={setMajor}
          />
          <FormInputDiv
            label="Year of Graduation"
            type="number"
            name="graduationYear"
            placeholder="Enter your year of graduation"
            setValue={setGraduationYear}
          />
          <FormInputDiv
            label="LinkedIn"
            type="text"
            name="linkedin"
            placeholder="Enter the link to your LinkedIn account"
            setValue={setLinkedin}
          />
          <ErrorDiv>{linkedInError} </ErrorDiv>

          <FormInputDiv
            label="Additional Information"
            type="text"
            name="additionalInformation"
            placeholder="Enter any additional information about yourself"
            rows={5}
            setValue={setBio}
          />
          <ButtonsDiv>
            <CancelButton
              type="button"
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              Cancel
            </CancelButton>
            <SubmitButton
              type="submit"
              onClick={handleSubmit}
              disabled={
                !password ||
                !email ||
                !firstName ||
                !lastName ||
                !confirmPassword ||
                !yearOfGraduation ||
                !major ||
                !linkedin
              }
            >
              Submit
            </SubmitButton>
          </ButtonsDiv>
        </SignUpForm>
      </Container>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Header = styled.p`
  font-size: 22px;
  font-weight: 300;
  color: #ffffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const SignUpForm = styled.form`
  background-color: #ffffff;
  color: #000000;
  padding: 5rem;
  text-align: left;
  margin-bottom: 2rem;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
`;

const SubmitButton = styled.button`
  background-color: #0b0b45;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 0.3rem 1.2rem;
  border: 3px solid #0b0b45;
  border-radius: 5px;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;`}
`;

const CancelButton = styled.button`
  background-color: #ffffff;
  color: #0b0b45;
  font-size: 12px;
  font-weight: 600;
  padding: 0.3rem 1.2rem;
  border: 3px solid #0b0b45;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
export const ErrorDiv = styled.div`
  margin-left: 10rem;
  margin-bottom: 1.3rem;
  font-size: 11px;
  color: red;
`;

export default SignUpPage;
