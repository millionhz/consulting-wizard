import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import ProfileContent from '../../components/ProfileContent';
import FeedbackContent from '../../components/FeedbackContent';
import { getConsultantById } from '../../api/backend';

function ConsultantProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [active, setActive] = useState('profile');

  useEffect(() => {
    getConsultantById(id)
      .then(({ data }) => setProfile(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <NavBar page="Book Appointment" />

      <Profile className={active === 'profile' ? 'profile' : 'feedback'}>
        <TagsDiv>
          <MenuTag
            className={active === 'profile' ? 'active first' : 'first'}
            onClick={() => setActive('profile')}
          >
            Profile Details
          </MenuTag>
          <MenuTag
            className={active === 'feedback' ? 'active last' : 'last'}
            onClick={() => setActive('feedback')}
          >
            Client Feedback
          </MenuTag>
        </TagsDiv>
        {active === 'profile' ? (
          <ProfileContent {...profile} />
        ) : (
          <FeedbackContent id={profile._id} />
        )}
      </Profile>

      <Footer />
    </div>
  );
}

const Profile = styled.div`
  min-height: 53vh;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 6rem;
  border-radius: 1rem;
  padding: 0;
  color: #000000;

  &.feedback {
    width: 45vw;
  }

  &.profile {
    width: 30vw;
  }
`;

const TagsDiv = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MenuTag = styled.button`
  width: 50%;
  border: none;
  background: #d9d9d9;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.7rem 0;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;

  &.first {
    border-radius: 1rem 0 0 0;
  }

  &.last {
    border-radius: 0 1rem 0 0;
    border-right-color: transparent;
  }

  &.active {
    background: #ffffff;
  }
`;

export default ConsultantProfile;
