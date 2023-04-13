import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBarConsultant from './NavBarConsultant';
import Footer from './Footer';
import {
  getFeedback,
  reportFeedback,
  reportClient,
  getClientById,
} from '../api/backend';

function ViewFeedbackCounselor() {
  const [feedbackList, setFeedbackList] = useState([]);

  const parseFeedback = (feedbacks) =>
    Promise.all(
      feedbacks.map(async (feedback) => {
        const { data } = await getClientById(feedback.reviewer);
        const name = data ? data.displayName : 'User unavailable';
        return { ...feedback, reviewerName: name };
      })
    );

  useEffect(() => {
    getFeedback()
      .then((data) => parseFeedback(data.data))
      .then((data) => setFeedbackList(data));
  }, []);

  function reportUserHandler(id) {
    reportClient(id);
  }

  function reportFeedbackHandler(id) {
    reportFeedback(id);
  }

  return (
    <div>
      <NavBarConsultant page="View Feedback" />
      <Background>
        {feedbackList.map((userFeedback) => (
          <>
            <FeedbackContainer>
              <UserDetailsContainer>
                <TextReport>{userFeedback.reviewerName}</TextReport>
              </UserDetailsContainer>

              <FeedbackDetailsContainer>
                <FeedabckText>{userFeedback.content}</FeedabckText>
                <br />
                <ButtonsDiv>
                  <ReportButton
                    onClick={() => {
                      reportUserHandler(userFeedback.reviewer);
                    }}
                  >
                    Report User
                  </ReportButton>
                  <ReportButton
                    onClick={() => {
                      reportFeedbackHandler(userFeedback._id);
                      window.location.reload(true);
                    }}
                  >
                    Report Feedback
                  </ReportButton>
                </ButtonsDiv>
              </FeedbackDetailsContainer>
            </FeedbackContainer>
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
  padding: 4rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;
const SeparatingLine = styled.div`
  width: 100%;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 1rem;
`;
const FeedbackContainer = styled.div`
  display: flex;
  felx-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0rem 0.2rem 0rem;
`;
const UserDetailsContainer = styled.div`
  margin-right: 40px;
  margin-left: 10px;
  margin-bottom: 0;
  width: 30%;
  height: 100%;
`;
const FeedbackDetailsContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: 0;
  margin-right: 10px;
`;
const TextReport = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
`;
const FeedabckText = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 0.7rem;
  margin-bottom: 0;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ReportButton = styled.button`
  text-align: center;
  font-weight: 600;
  font-size: 0.7rem;
  color: #ffffff;
  background: #f48686;
  border: none;
  border-radius: 5px;
  padding: 0.2rem 1rem;
  margin-top: 0;
  margin-right: 10px;
  width: 120px;

  &:hover {
    background: #f47a86;
    cursor: pointer;
  }
`;

export default ViewFeedbackCounselor;
