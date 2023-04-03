/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavBarConsultant from './NavBarConsultant';
import Footer from './Footer';

function ViewFeedbackCounselor() {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      feedbackBy: 'Ayesha Fazal Lashkarwala',
      major: 'BS Computer Science',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      yrOfGraduation: '2023',
      linktoUserProfile: 'http://127.0.0.1:5173',
    },
    {
      id: 2,
      feedbackBy: 'Ayesha Fazal Lashkarwala',
      major: 'BS Computer Science',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      yrOfGraduation: '2023',
      linktoUserProfile: 'http://127.0.0.1:5173',
    },
    {
      id: 3,
      feedbackBy: 'Ayesha Fazal Lashkarwala',
      major: 'BS Computer Science',
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      yrOfGraduation: '2023',
      linktoUserProfile: 'http://127.0.0.1:5173',
    },
  ]);
  function removeFeedback(id) {
    const newList = feedbackList.filter((user) => user.id !== id);
    setFeedbackList(newList);
  }
  function reportUserHandler(id) {
    // send report request to backend.Need the format in which the request needs to be sent
    removeFeedback(id);
  }
  function reportFeedbackHandler(id) {
    // send report request to backend. Need the format in which the request needs to be sent
    removeFeedback(id);
  }
  return (
    <div>
      <NavBarConsultant page="View Feedback" />
      <Background>
        {feedbackList.map((userFeedback) => (
          <>
            <FeedbackContainer>
              <DetailContainer>
                <TextReport>{userFeedback.feedbackBy}</TextReport>
                <TextSmall>
                  {userFeedback.major} <br />
                  Graduating in {userFeedback.yrOfGraduation}
                </TextSmall>
                <ProfileLink href={userFeedback.linktoUserProfile}>
                  <ButtonText>View Profile</ButtonText>
                </ProfileLink>
                <br />
                <ReportButton
                  onClick={() => {
                    removeFeedback(userFeedback.id);
                    reportUserHandler(userFeedback.id);
                  }}
                >
                  <ButtonText>Report User</ButtonText>
                </ReportButton>
              </DetailContainer>

              <DetailsContainer>
                <FeedabckText>{userFeedback.feedback}</FeedabckText>
                <br />
                <ReportButton
                  onClick={() => {
                    removeFeedback(userFeedback.id);
                    reportFeedbackHandler(userFeedback.id);
                  }}
                >
                  <ButtonText>Report Feedback</ButtonText>
                </ReportButton>
              </DetailsContainer>
            </FeedbackContainer>
            <div align="center" />
            <SeparatingLine />
          </>
        ))}
      </Background>
      <Footer />
    </div>
  );
}

const Background = styled.div`
  min-height: 100vh;
  width: 50vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 5rem;
  border-radius: 0rem;
  padding: 6rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;
const SeparatingLine = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
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
const ProfileLink = styled.a`
  color: #2ec309;
  text-align: left;
  font-weight: 0.5rem;
  padding: 0rem 0rem 0rem 0rem;
`;
const TextReport = styled.p`
  display: flex;
  flex-direction: flex-start;
  align-self: stretch;
  text-align: left;
  font-weight: 500;
  font-size: 1rem;
`;
const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-weight: 600;
  font-size: 0.8rem;
`;
const TextSmall = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 0.8rem;
`;
const FeedabckText = styled.p`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  text-align: left;
  font-weight: 500;
  font-size: 0.7rem;
`;
const ReportButton = styled.button`
  text-align: left;
  color: #fb1e1e;
  background: #ffffff;
  border: 2px #2ec309;
  font-weight: 1000;
  padding: 0rem 0rem 0rem 0rem;
`;

export default ViewFeedbackCounselor;
