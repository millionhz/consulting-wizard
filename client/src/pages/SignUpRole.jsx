import React from 'react';
import styled from '@emotion/styled';
import NavBarLogin from '../components/NavBarLogin';
import Footer from '../components/Footer';

function SignUpRole() {
  return (
    <div>
      <NavBarLogin page="Sign Up" />
      <SignUpDiv>
        <Header>Choose a Role to Sign Up:</Header>
        <ButtonsDiv>
          <RoleButton
            onClick={() => {
              window.location.href = '/signup/client';
            }}
          >
            Student
          </RoleButton>
          <RoleButton
            onClick={() => {
              window.location.href = '/signup/consultant';
            }}
          >
            Counselor
          </RoleButton>
        </ButtonsDiv>
      </SignUpDiv>
      <Footer />
    </div>
  );
}

const SignUpDiv = styled.div`
  margin: 11% auto;
  background-color: #ffffff;
  padding: 4rem;
  width: 500px;
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #000000;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const RoleButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: #bfab25;
  background-color: #0b0b45;
  border: solid 1px #0b0b45;
  padding: 1.5rem 0;
  border-radius: 10px;
  width: 180px;

  &:hover {
    cursor: pointer;
  }
`;

export default SignUpRole;
