import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';

function ProfileItem({ description: description_, title, setValue }) {
  const [description, setDescription] = useState(description_);
  const editHandler = (e) => {
    setDescription(e.target.value);
  };

  const rows = description.length / 50 + 1;

  const [isInputField, setInputField] = useState(false);

  const textToInput = () => {
    setInputField(true);
  };

  const inputToText = () => {
    setValue(description);
    setInputField(false);
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
        <FieldTitle>{title}</FieldTitle>
        {isInputField ? inputField : textField}
      </FieldText>
      <div>{isInputField || title === 'Email' ? null : editButton}</div>
    </FieldDiv>
  );
}

function ViewProfile() {
  const [fnameState, setFnameState] = useState('-');
  const [lnameState, setLnameState] = useState('-');
  const [emailState, setEmailState] = useState('-');
  const [majorState, setMajorState] = useState('-');
  const [yearState, setYearState] = useState('-');
  const [linkedinState, setLinkedinState] = useState('-');
  const [infoState, setInfoState] = useState('-');

  useEffect(() => {
    console.log('Fetching user data...');
    axios.get('/api/profile').then((res) => {
      setFnameState(res.data.displayName);
      // setLnameState(res.data.displayName);
      setEmailState(res.data.email);
      setMajorState(res.data.major);
      setYearState(res.data.yearOfGraduation);
      // setLinkedinState(res.data.linkedIn);
      setInfoState(res.data.bio);
    });
  }, []);

  const saveHandler = () => {
    console.log('save button clicked');
    const userData = {
      displayName: fnameState,
      email: emailState,
      major: majorState,
      yearOfGraduation: yearState,
      bio: infoState,
    };
    axios.patch('/api/profile', userData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <NavBar page="Settings" />

      <Profile className="profile">
        <Title>Account Management</Title>
        <Subtitle>Manage your account details</Subtitle>

        <Fields key={emailState}>
          <ProfileItem
            title={'First Name'}
            description={fnameState}
            setValue={setFnameState}
          />
          <ProfileItem
            title={'Last Name'}
            description={lnameState}
            setValue={setLnameState}
          />
          <ProfileItem
            title={'Email'}
            description={emailState}
            setValue={setEmailState}
          />
          <ProfileItem
            title={'Major'}
            description={majorState}
            setValue={setMajorState}
          />
          <ProfileItem
            title={'Year of Graduation'}
            description={yearState}
            setValue={setYearState}
          />
          <ProfileItem
            title={'LinkedIn'}
            description={linkedinState}
            setValue={setLinkedinState}
          />
          <ProfileItem
            title={'Additional Information'}
            description={infoState}
            setValue={setInfoState}
          />
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
