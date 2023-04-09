import { useState } from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Calendar from '../../components/Calendar';
import TimePickerModal from '../../components/TimePickerModal';
import TimeSlot from '../../components/NewTimeSlot';
import NavBar from '../../components/NavBarConsultant';
import Footer from '../../components/Footer';

function SetTimeSlots() {
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timeList, setTimeList] = useState([]);

  const removeHandler = (index) => {
    setTimeList(newTimes);
  };

  const handleClick = () => {
    setTimePickerOpen(true);
  };

  const handleAddTime = (slot) => {
    slot.$d.setDate(date.getDate());
    slot.$d.setMonth(date.getMonth());
    slot.$d.setFullYear(date.getFullYear());

    const end = new Date(slot.$d);
    if (end.getHours() > 22) {
      end.setDate(end.getDate() + 1);
    }
    end.setHours(end.getHours() < 22 ? end.getHours() + 1 : 0);
    setTimeList([...timeList, { from: slot.$d, to: end }]);
    setTimePickerOpen(false);
  };

  const handleClose = () => {
    setTimePickerOpen(false);
  };

  return (
    <Div className="app">
      <NavBar page="Mark Available Slots" />
      <AppointmentsDiv>
        <Dates>
          <Steps>1. Pick a date to view the time slots</Steps>
          <Calendar setDate={setDate} date={date} />
        </Dates>

        <TimeSlots>
          <Steps>2. Add or remove time slots</Steps>
          <AddSlotButtonDiv>
            <AddSlotButton onClick={handleClick}>
              choose a new time slot
            </AddSlotButton>
          </AddSlotButtonDiv>
          <TimeSlotsDiv>
            {timeList.length
              ? timeList.map((slot, idx) => (
                  <TimeSlot
                    slot={slot}
                    removeHandler={removeHandler}
                    key={idx}
                  />
                ))
              : 'No Available Time Slots'}
          </TimeSlotsDiv>
        </TimeSlots>
      </AppointmentsDiv>
      <TimePickerModal
        isOpen={timePickerOpen}
        handleAddTime={handleAddTime}
        handleClose={handleClose}
      />
      <Footer />
    </Div>
  );
}

const Div = styled.div`
  margin: auto;
  align: left;
  text-align: center;
`;

const AppointmentsDiv = styled.div`
  padding: 1rem 5rem 1rem 5rem;
  text-align: left;
  color: #ffffff;
  width: 75%;
  margin: 0 auto;
`;

const Dates = styled.div`
  margin-top: 2.5rem;
`;

const Steps = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
`;

const TimeSlots = styled.div`
  margin-top: 3.5rem;
`;

const TimeSlotsDiv = styled.div`
  background-color: #ffffff;
  color: #000000;
  width: 50%;
  margin: 2rem auto;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 10px;
  min-height: 300px;
`;

const AddSlotButtonDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const AddSlotButton = styled.button`
  margin: auto;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: #bfab25;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9rem;

  &:hover {
    cursor: pointer;
    background-color: #b0a020;
  }
`;

export default SetTimeSlots;
