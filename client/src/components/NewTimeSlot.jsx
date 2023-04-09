import React from 'react';
import styled from '@emotion/styled';
import remove from '../assets/remove-icon.png';

function TimeSlotComponent({ slot, removeHandler }) {
  const onClickHandler = () => {
    removeHandler(slot);
  };

  const parseTime = (dt) => dt.toLocaleTimeString();

  const start = parseTime(slot.from);
  const end = parseTime(slot.to);

  return (
    <TimeSlotStyling>
      <TimeSlotText>{`${start} - ${end} Pakistan Time (UTC +5)`}</TimeSlotText>
      <RemoveSlot onClick={onClickHandler}>
        <RemoveIcon src={remove} alt="remove" />
        <RemoveText>Remove Slot</RemoveText>
      </RemoveSlot>
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

const RemoveSlot = styled.button`
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

const RemoveIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 0;
`;

const RemoveText = styled.p`
  margin-top: 0;
  font-size: 0.5rem;
  color: #fb1e1e;
`;

export default TimeSlotComponent;
