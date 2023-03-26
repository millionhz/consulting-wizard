import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProfileItem from '../components/ProfileItem';
import { getProfileInfo, setProfileInfo } from '../api/backend';

function ViewProfile() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [yearOfGraduation, setYearOfGraduation] = useState('');
  const [bio, setBio] = useState('');

  const setProfileData = (data) => {
    setDisplayName(data.displayName);
    setEmail(data.email);
    setMajor(data.major);
    setYearOfGraduation(data.yearOfGraduation.toString());
    setBio(data.bio);
  };

  useEffect(() => {
    getProfileInfo()
      .then(({ data }) => data)
      .then(setProfileData);
  }, []);

  const saveHandler = () => {
    const userData = {
      displayName,
      email,
      major,
      yearOfGraduation,
      bio,
    };

    setProfileInfo(userData)
      .then(({ data }) => data)
      .then(setProfileData);
  };

  return (
    <div>
      <NavBar page="Settings" />

      <Profile className="profile">
        <Title>Account Management</Title>
        <Subtitle>Manage your account details</Subtitle>

        <Fields key={email}>
          <ProfileItem
            title="Name"
            description={displayName}
            setValue={setDisplayName}
          />
          <ProfileItem
            title="Email"
            description={email}
            setValue={setEmail}
            disabled
          />
          <ProfileItem title="Major" description={major} setValue={setMajor} />
          <ProfileItem
            title="Year of Graduation"
            description={yearOfGraduation}
            setValue={setYearOfGraduation}
          />
          <ProfileItem
            title="Additional Information"
            description={bio}
            setValue={setBio}
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
