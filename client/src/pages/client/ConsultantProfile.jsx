import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import ProfileContent from '../../components/ProfileContent';
import { getConsultantById, getFeedback } from '../../api/backend';

function ConsultantProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [active, setActive] = useState('profile');

  useEffect(() => {
    getConsultantById(id)
      .then(({ data }) => setProfile(data))
      .catch((err) => console.log(err));
  }, [id]);
  const [feedbackList, setFeedbackList] = useState([]);
  useEffect(() => {
    getFeedback().then((data) => setFeedbackList(data.data));
  }, []);
  return (
    <div>
      <NavBar page="Book Appointment" />

      <Profile className="profile">
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
          <div>
            {' '}
            {feedbackList.map((userFeedback) => (
              <>
                <FeedbackContainer>
                  <DetailContainer>
                    {/* need user name right now user id is being displayed. */}
                    <TextReport>{userFeedback.reviewer}</TextReport>
                  </DetailContainer>

                  <DetailsContainer>
                    <FeedabckText>{userFeedback.content}</FeedabckText>
                    <br />
                  </DetailsContainer>
                </FeedbackContainer>
                <div />
                <SeparatingLine />
              </>
            ))}
          </div>
        )}
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
  padding: 0;
  color: #000000;
`;
const SeparatingLine = styled.div`
  align: center;
  display: flex;
  width: auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
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
  margin-bottom: 1rem;
  color: #0b0b45;
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
const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  felx-direction: row;
  justify-content: space-between;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;
const DetailContainer = styled.div`
  display: flex;
  flex: 0 0 15rem;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;
const TextReport = styled.p`
  display: flex;
  flex-direction: flex-start;
  align-self: stretch;
  text-align: left;
  font-weight: 500;
  font-size: 1rem;
`;
const FeedabckText = styled.p`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  text-align: left;
  font-weight: 500;
  font-size: 0.7rem;
`;
export default ConsultantProfile;
