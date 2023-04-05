import React from 'react';
import styled from '@emotion/styled';

function TimeSlotComponent({ time, BookHandler }) {
  const onClickHandler = () => {
    BookHandler(time);
  };

  const parseTime = ({ hour, minute }) =>
    minute < 10 ? `${hour}:0${minute}` : `${hour}:${minute}`;

  const start = parseTime(time.from);
  const end = parseTime(time.to);

  return (
    <TimeSlotStyling>
      <TimeSlotText>{`${start} - ${end} Pakistan Time (UTC +5)`}</TimeSlotText>
      <BookSlot onClick={onClickHandler}>
        <BookIcon src="../../public/book_slot.png" alt="Book" />
        <BookText>Book Slot</BookText>
      </BookSlot>
    </TimeSlotStyling>
  );
}

const TimeSlotStyling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #aaaaaa;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const TimeSlotText = styled.p``;

const BookSlot = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const BookIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 0;
`;

const BookText = styled.p`
  margin-top: 0;
  font-size: 0.6rem;
  color: #2ec309;
`;

export default TimeSlotComponent;
