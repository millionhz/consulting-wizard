import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarAdmin';
import Footer from '../../components/Footer';
import ProfileContent from '../../components/ProfileContent';
import { getConsultantById } from '../../api/backend';

function ConsultantProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getConsultantById(id)
      .then(({ data }) => setProfile(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <NavBar page="Reported Counselors" />

      <Profile>
        <ProfileContent {...profile} />
      </Profile>

      <Footer />
    </div>
  );
}

const Profile = styled.div`
  width: 30vw;
  min-height: 53vh;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 6rem;
  border-radius: 1rem;
  padding: 0;
  color: #000000;
`;

export default ConsultantProfile;
