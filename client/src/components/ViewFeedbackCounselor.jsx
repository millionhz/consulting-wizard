import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBarConsultant from './NavBarConsultant';
import Footer from './Footer';
import { getFeedback, reportFeedback, reportClient } from '../api/backend';

function ViewFeedbackCounselor() {
  const [feedbackList, setFeedbackList] = useState([]);
  useEffect(() => {
    getFeedback().then((data) => setFeedbackList(data.data));
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
              <DetailContainer>
                {/* need user name right now user id is being displayed. */}
                <TextReport>{userFeedback.reviewer}</TextReport>
                <ReportButton
                  onClick={() => {
                    reportUserHandler(userFeedback.reviewer);
                  }}
                >
                  <ButtonText>Report User</ButtonText>
                </ReportButton>
              </DetailContainer>

              <DetailsContainer>
                <FeedabckText>{userFeedback.content}</FeedabckText>
                <br />
                <ReportButton
                  onClick={() => {
                    reportFeedbackHandler(userFeedback._id);
                    window.location.reload(true)
                  }}
                >
                  <ButtonText>Report Feedback</ButtonText>
                </ReportButton>
              </DetailsContainer>
            </FeedbackContainer>
            <div />
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
  align: center;
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
