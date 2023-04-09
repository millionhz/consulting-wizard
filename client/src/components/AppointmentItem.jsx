import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

function AppointmentItem({
  name,
  major,
  year,
  consultantID,
  clientID,
  from,
  to,
  reviewButton,
}) {
  const navigate = useNavigate();
  const onClickReview = () => {
    navigate(`/add-review/${consultantID}`);
  };
  const onClickProfile = () => {
    consultantID
      ? navigate(`/consultant/${consultantID}`)
      : navigate(`/client/${clientID}`);
  };

  const parseTime = (dt) => dt.toLocaleTimeString();
  const parseDate = (dt) => dt.toDateString();

  const start = parseTime(from);
  const end = parseTime(to);
  const date = parseDate(from);

  return (
    <AppointmentItemDiv>
      <CounselorName>
        {name}
        <br />
        <AppointmentTime>
          {date}
          <br />
          {start} - {end}
        </AppointmentTime>
      </CounselorName>
      <CounselorDetails>
        {major}
        <br />
        Graduated in {year}
      </CounselorDetails>
      <ButtonsDiv>
        <ViewProfileButton onClick={onClickProfile}>
          View Profile
        </ViewProfileButton>
        {reviewButton && (
          <AddReviewButton onClick={onClickReview}>Add Review</AddReviewButton>
        )}
      </ButtonsDiv>
    </AppointmentItemDiv>
  );
}

const AppointmentItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid #aaaaaa;
  color: #000000;
`;

const CounselorName = styled.div`
  font-weight: 500;
  width: 45%;
  text-align: left;
  margin-right: 10px;
`;

const AppointmentTime = styled.div`
  font-size: 0.7rem;
  text-align: left;
  font-weight: 400;
  margin: 0;
`;

const CounselorDetails = styled.p`
  font-size: 0.7rem;
  text-align: left;
  width: 30%;
  margin-right: 10px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const ViewProfileButton = styled.button`
  background-color: #2c9612;
  color: #ffffff;
  border: solid 1px #2c9612;
  border-radius: 5px;
  font-size: 0.7rem;
  padding: 0.5rem 1.5rem;
  width: 100%;

  &:hover {
    background-color: #2c8612;
  }
`;

const AddReviewButton = styled.button`
  background-color: #bfab25;
  color: #ffffff;
  border: solid 1px #bfab25;
  border-radius: 5px;
  font-size: 0.7rem;
  padding: 0.5rem 1.5rem;
  width: 100%;
  margin-top: 0.5rem;

  &:hover {
    background-color: #bf9b25;
  }
`;

export default AppointmentItem;
