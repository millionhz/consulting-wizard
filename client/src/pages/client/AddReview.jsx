import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';

function AddReview() {
  const location = useLocation();

  const counselor = location.pathname
    .split('/')[2]
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const reviewText = e.target[0].value;
    console.log('Review Submitted:', reviewText);
  };

  return (
    <div>
      <NavBar page="View Appointments" />
      <ReviewPage>
        <ReviewDiv onSubmit={onSubmitHandler}>
          <ReviewTitle>Add Review</ReviewTitle>
          <ReviewLabel>Leave a review for {counselor}</ReviewLabel>
          <ReviewInput
            type="text"
            as="textarea"
            rows="15"
            placeholder="Type here..."
          />
          <ReviewButton type="submit">SUBMIT</ReviewButton>
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
