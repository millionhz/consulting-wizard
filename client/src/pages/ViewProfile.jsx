import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function profileItem(props) {
  const [description, setDescription] = useState(props.description);
  const editHandler = (e) => {
    setDescription(e.target.value);
    props.setValue(description);
  };

  const rows = description.length / 50 + 1;

  const [isInputField, setInputField] = useState(false);

  const textToInput = () => {
    setInputField(true);
  };

  const inputToText = () => {
    setInputField(false);
    props.setValue(description);
  };

  const textField = <FieldDescription>{description}</FieldDescription>;

  const editButton = (
    <EditButton onClick={textToInput}>
      <EditIcon src="../../public/assets/edit.png" alt="edit" />
    </EditButton>
  );

  const inputField = (
    <EditField>
      <TextArea
        autoFocus
        type="textarea"
        rows={rows}
        defaultValue={description}
        onChange={editHandler}
      />
      <CommitButton onClick={inputToText}>OK</CommitButton>
    </EditField>
  );

  return (
    <FieldDiv>
      <FieldText>
        <FieldTitle>{props.title}</FieldTitle>
        {isInputField ? inputField : textField}
      </FieldText>
      <div>{isInputField || props.title === 'Email' ? null : editButton}</div>
    </FieldDiv>
  );
}

function ViewProfile() {
  const saveHandler = () => {
    console.log('save button clicked');
    console.log('fnameState: ' + fnameState);
    console.log('lnameState: ' + lnameState);
    console.log('emailState: ' + emailState);
    console.log('majorState: ' + majorState);
    console.log('yearState: ' + yearState);
    console.log('linkedinState: ' + linkedinState);
    console.log('infoState: ' + infoState);
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

  const [fnameState, setFnameState] = useState(user.firstName);
  const [lnameState, setLnameState] = useState(user.lastName);
  const [emailState, setEmailState] = useState(user.email);
  const [majorState, setMajorState] = useState(user.major);
  const [yearState, setYearState] = useState(user.yearOfGraduation);
  const [linkedinState, setLinkedinState] = useState(user.linkedIn);
  const [infoState, setInfoState] = useState(user.additionalInformation);

  return (
    <div>
      <NavBar page={'Settings'} />

      <Profile className="profile">
        <Title>Account Management</Title>
        <Subtitle>Manage your account details</Subtitle>

        <Fields>
          {profileItem({
            title: 'First Name',
            description: user.firstName,
            setValue: setFnameState,
          })}
          {profileItem({
            title: 'Last Name',
            description: user.lastName,
            setValue: setLnameState,
          })}
          {profileItem({
            title: 'Email',
            description: user.email,
            setValue: setEmailState,
          })}
          {profileItem({
            title: 'Major',
            description: user.major,
            setValue: setMajorState,
          })}
          {profileItem({
            title: 'Year of Graduation',
            description: user.yearOfGraduation,
            setValue: setYearState,
          })}
          {profileItem({
            title: 'LinkedIn',
            description: user.linkedIn,
            setValue: setLinkedinState,
          })}
          {profileItem({
            title: 'Additional Information',
            description: user.additionalInformation,
            setValue: setInfoState,
          })}
          <p>
            <ChangePassword href="#"> Change Password </ChangePassword>
          </p>
        </Fields>

        <SaveButton onClick={saveHandler}>Save Changes</SaveButton>
      </Profile>

      <Footer />
    </div>
  );
}

const Profile = styled.div`
  min-height: 30vh;
  width: 30vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 6rem;
  border-radius: 1rem;
  padding: 6rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-weight: 700;
`;

const Subtitle = styled.h4`
  margin-top: 0;
  font-weight: 400;
`;

const Fields = styled.div`
  margin-top: 5rem;
  text-align: justify;
`;

const FieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 0.5rem;
`;

const FieldText = styled.div`
  width: 100%;
`;

const FieldTitle = styled.p`
  font-size: 0.9rem;
  color: #786e6e;
  margin-bottom: 0;
  margin-top: 0;
`;

const FieldDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
`;

const EditButton = styled.button`
  background: none;
  border: none;
`;

const EditIcon = styled.img`
  width: 20px;
  height: auto;
  margin-left: 1rem;
`;

const EditField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  box-shadow: none;
  border: 2px solid;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
`;

const CommitButton = styled.button`
  background: #2c9612;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const ChangePassword = styled.a`
  color: #786e6e;
`;

const SaveButton = styled.button`
  border: none;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  width: 300px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  margin-top: 4rem;
  background: #2c9612;

  &:hover {
    background: #2c8612;
  }
`;

export default ViewProfile;
