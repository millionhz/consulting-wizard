import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import Modal from 'react-modal';

function Timeslot({ timeslot, BookHandler }) {
  const onClickHandler = () => {
    BookHandler(timeslot);
  };

  return (
    <TimeSlot>
      <p>{timeslot.start + ' ' + timeslot.end + ' Pakistan Time (UTC +5)'}</p>
      <BookSlot onClick={onClickHandler}>
        <BookIcon src="../../public/assets/book_slot.png" alt="Book" />
        <BookText>Book Slot</BookText>
      </BookSlot>
    </TimeSlot>
  );
}

function Confirmation({ date, timeslot, counselor, closeModal, isOpen }) {
  function goToHome() {
    window.location.href = '/';
  }

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            width: '25%',
            height: '35%',
            margin: 'auto',
            textAlign: 'left',
            color: '#000000',
            padding: '1rem 2rem',
            borderRadius: '10px',
          },
        }}
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <Confirmed>
          <ModalHeading>Booking Confirmed</ModalHeading>
          <ConfirmIcon src="../../public/assets/green_tick.png" alt="" />
        </Confirmed>
        <ModalText>with {counselor}</ModalText>
        <BookingTime>
          <ModalText>Date: {date.toDateString()}</ModalText>
          <ModalText>
            Time: {timeslot.start} - {timeslot.end} Pakistan Time (UTC +5)
          </ModalText>
        </BookingTime>
        <ModalText>Please check your email for meeting details</ModalText>

        <ModalButton onClick={goToHome}>OK</ModalButton>
      </Modal>
    </div>
  );
}

function BookAppointment() {
  const counselor = 'Umama Nasir Abbasi';

  const viewProfileHandler = () => {
    console.log('View Profile');
  };

  const [date, setDate] = useState(new Date());
  const [timeslots, setTimeslots] = useState([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const BookSlot = (slot) => {
    setSelectedTimeslot(slot);
    console.log('Booked:' + slot.start + ' - ' + slot.end);
    openModal();
  };

  useEffect(() => {
    // axios
    //   .get('http://localhost:5000/api/timeslots', {
    //     params: {
    //       date: date,
    //     },
    //   })
    //   .then((res) => {
    //     setTimeslots(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setTimeslots([
      { start: '10:00:00', end: '11:00:00' },
      { start: '15:00:00', end: '16:00:00' },
      { start: '17:00:00', end: '18:00:00' },
    ]);
  }, [date]);

  return (
    <div>
      <NavBar page="Book Appointment" />
      <AppointmentDiv>
        <Counselor>
          <CounselorName>Counselor: {counselor}</CounselorName>
          <ViewProfile onClick={viewProfileHandler}>View Profile</ViewProfile>
        </Counselor>

        <Dates>
          <Steps>1. Pick a date to view the time slots</Steps>
          <Calendar onChange={setDate} value={date} />
        </Dates>

        <TimeSlots>
          <Steps>2. Choose an available time slot</Steps>
          <TimeSlotsDiv>
            {timeslots.map((timeslot) => (
              <Timeslot
                timeslot={timeslot}
                BookHandler={BookSlot}
                key={timeslot.start}
              />
            ))}
          </TimeSlotsDiv>
        </TimeSlots>
      </AppointmentDiv>
      <Confirmation
        date={date}
        timeslot={selectedTimeslot}
        counselor={counselor}
        closeModal={closeModal}
        isOpen={modalIsOpen}
      />

      <Footer />
    </div>
  );
}

const AppointmentDiv = styled.div`
  padding: 1rem 5rem 1rem 5rem;
  text-align: left;
  color: #ffffff;
  width: 75%;
  margin: 0 auto;
`;

const Counselor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flec-start;
  align-items: center;
`;

const CounselorName = styled.h2`
  font-weight: 300;
`;

const ViewProfile = styled.button`
  background-color: #0047ff;
  border: solid 1px #0047ff;
  border-radius: 10px;
  padding: 0.1rem 1rem 0.1rem 1rem;
  margin-left: 2rem;
  font-size: 1rem;
  color: #ffffff;

  &:hover {
    background-color: #0000ff;
  }
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

const TimeSlot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #aaaaaa;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

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

const Confirmed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #000000;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0;
  margin-bottom: 0;
`;

const CloseButton = styled.button`
  background-color: #ffffff;
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 20px;
`;

const ConfirmIcon = styled.img`
  width: 20px;
  height: auto;
  margin-left: 1.1rem;
  margin-bottom: 0;
`;

const ModalHeading = styled.p`
  margin-bottom: 0;
`;

const ModalText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.7rem;
  font-weight: 500;
`;

const BookingTime = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ModalButton = styled.button`
  background-color: #2c9612;
  border: solid 1px #2c9612;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default BookAppointment;
