import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import TimeSlot from '../../components/TimeSlotComponent';
import Confirmation from '../../components/ConfirmationModal';
import Calendar from '../../components/Calendar';
import { getConsultantById } from '../../api/backend';

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [appointmentTimes, setAppointmentTimes] = useState([]);

  useEffect(() => {
    getConsultantById(id)
      .then(({ data }) => {
        setDisplayName(data.displayName);
        setAppointmentTimes(data.appointmentTimes);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const viewProfileHandler = () => {
    navigate(`/consultant/${id}`);
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
    const index = timeslots.indexOf(slot);
    timeslots.splice(index, 1);
    setTimeslots(timeslots);
    openModal();
  };

  return (
    <div>
      <NavBar page="Book Appointment" />
      <AppointmentDiv>
        <Counselor>
          <CounselorName>Counselor: {displayName}</CounselorName>
          <ViewProfile onClick={viewProfileHandler}>View Profile</ViewProfile>
        </Counselor>

        <Dates>
          <Steps>1. Pick a date to view the time slots</Steps>
          <Calendar setDate={setDate} date={date} />
        </Dates>

        <TimeSlots>
          <Steps>2. Choose an available time slot</Steps>
          <TimeSlotsDiv>
            {appointmentTimes.map((time, idx) => (
              <TimeSlot time={time} BookHandler={BookSlot} key={idx} />
            ))}
          </TimeSlotsDiv>
        </TimeSlots>
      </AppointmentDiv>
      <Confirmation
        date={date}
        timeslot={selectedTimeslot}
        counselor={displayName}
        closeModal={() => closeModal()}
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

export default BookAppointment;
