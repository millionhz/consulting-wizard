import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import {
  getConsultantById,
  getProfileInfo,
  setClientReview,
  reportConsultant,
} from '../../api/backend';



function AddReview() {
  const location = useLocation();
  const [profile, setProfile] = useState({});
  const id = location.pathname.split('/')[2];
  const [reviewer, setReviewer] = useState({});

  useEffect(() => { 
    getConsultantById(id)
      .then(({ data }) => setProfile(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getProfileInfo()
      .then(({ data }) => setReviewer(data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const reviewText = e.target[0].value;
    const reviewData = {
      reviewer: reviewer._id,
      respondent: profile._id,
      content: reviewText,
    };

    setClientReview(reviewData)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  function reportCounsellorHandler(rid) {
    reportConsultant(rid);
  }

  return (
    <div>
      <NavBar page="View Appointments" />

      <ReviewPage>
        <ReviewDiv onSubmit={onSubmitHandler}>
          <ReviewTitle>Add Review</ReviewTitle>
          <ReviewLabel>Leave a review for {profile.displayName}</ReviewLabel>
          <ReviewInput
            type="text"
            as="textarea"
            rows="15"
            placeholder="Type here..."
          />
          <ReviewButton type="submit">SUBMIT</ReviewButton>

          <ReportButton
            onClick={() => {
              reportCounsellorHandler(profile.id);
              alert('Counsellor has been reported to admin!');
              window.location.href = '/view-appointments'
            }}
          >
            <ButtonText>Report Counsellor</ButtonText>
          </ReportButton>
        </ReviewDiv>
      </ReviewPage>
      <Footer />
    </div>
  );
}

const ReviewPage = styled.div`
  min-height: 69vh;
`;

const ReviewDiv = styled.form`
  width: 50%;
  height: 50vh;
  margin: 10vh auto;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #000000;
  padding: 2rem;
`;

const ReviewTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;
const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-weight: 600;
  font-size: 0.8rem;
`;

const ReportButton = styled.button`
  text-align: left;
  color: #fb1e1e;
  background: #ffffff;
  border: 2px #2ec309;
  font-weight: 1000;
  margin-top:1rem;
  text-decoration: underline;
  padding: 0rem 0rem 0rem 0rem;
  &:hover {
    color: #8b0000;
  }
`;

const ReviewLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const ReviewInput = styled.input`
  width: 90%;
  margin: 1.2rem 0;
  font-family: inherit;
  font-size: 0.9rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: solid 1px #000000;

  &:focus {
    border: none;
    outline: solid 2px #58b6ea;
    border-radius: 5px;
  }
`;

const ReviewButton = styled.button`
  background-color: #2c9612;
  color: #ffffff;
  font-size: 0.8rem;
  border: solid 1px #2c9612;
  border-radius: 5px;
  padding: 0.2rem 1rem;
  width: 8rem;

  &:hover {
    background-color: #2c8612;
  }
`;

export default AddReview;
