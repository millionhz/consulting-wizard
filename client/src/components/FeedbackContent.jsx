import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  getFeedbackByConsultant,
  // reportFeedback,
  // reportClient,
  getClientById,
} from '../api/backend';

function FeedbackContent({ id }) {
  console.log('id: ', id);
  const [feedbackList, setFeedbackList] = useState([]);

  const parseFeedback = (feedbacks) =>
    Promise.all(
      feedbacks.map(async (feedback) => {
        const { data } = await getClientById(feedback.reviewer);
        const reviewerName = data ? data.displayName : 'User unavailable';
        const major = data ? data.major : '';
        const yearOfGraduation = data
          ? `Batch of ${data.yearOfGraduation}`
          : '';
        return { ...feedback, reviewerName, major, yearOfGraduation };
      })
    );

  useEffect(() => {
    getFeedbackByConsultant(id)
      .then((data) => parseFeedback(data.data))
      .then((data) => setFeedbackList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainDiv>
      {feedbackList.map((data) => (
        <>
          <FeedbackItem>
            <ClientDiv>
              <ClientName>{data.reviewerName}</ClientName>
              <ClientDescription>{data.major}</ClientDescription>
              <ClientDescription>{data.yearOfGraduation}</ClientDescription>
            </ClientDiv>
            <Feedback>{data.content}</Feedback>
          </FeedbackItem>
          <HorizontalLine />
        </>
      ))}
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 3rem;
`;

const FeedbackItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  padding: 0 1rem;
`;

const ClientDiv = styled.div`
  height: 100%;
  width: 30%;
`;

const ClientName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0;
  text-align: left;
`;

const ClientDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
  text-align: left;
`;

const Feedback = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  text-align: justify;
  width: 70%;
  margin-left: 1rem;
  margin-bottom: 0;
`;

const HorizontalLine = styled.div`
  width: 100%;
  border-bottom: solid 2px #aaaaaa;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

export default FeedbackContent;
