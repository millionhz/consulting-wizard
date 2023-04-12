import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import NavBarClient from '../../components/NavBarClient';
import Footer from '../../components/Footer';
import AppointmentItem from '../../components/AppointmentItem';
import {
  viewPastAppointmentsClient,
  viewUpcomingAppointmentsClient,
} from '../../api/backend';

function ViewAppointments() {
  const [active, setActive] = useState('future');
  const [pastAppointments, setPastAppointments] = useState([]);
  const [futureAppointments, setFutureAppointments] = useState([]);

  const parseAppointment = (appointment) => {
    const data = appointment.consultant;
    return {
      name: data.displayName,
      major: data.major,
      year: data.yearOfGraduation,
      consultantID: data.id,
      from: appointment.from,
      to: appointment.to,
      _id: appointment._id,
    };
  };

  useEffect(() => {
    viewPastAppointmentsClient()
      .then(({ data }) => data.map(parseAppointment))
      .then((processedDataPast) => {
        const dataPast = processedDataPast.map((slot) => ({
          ...slot,
          from: new Date(slot.from),
          to: new Date(slot.to),
        }));
        setPastAppointments(dataPast);
      });

    viewUpcomingAppointmentsClient()
      .then(({ data }) => data.map(parseAppointment))
      .then((processedDataFuture) => {
        const dataFuture = processedDataFuture.map((slot) => ({
          ...slot,
          from: new Date(slot.from),
          to: new Date(slot.to),
        }));
        setFutureAppointments(dataFuture);
      });
  }, []);

  return (
    <div>
      <NavBarClient page="View Appointments" />

      <Appointments className="appointments">
        <TagsDiv>
          <MenuTag
            className={active === 'past' ? 'active first' : 'first'}
            onClick={() => setActive('past')}
          >
            Past Appointments
          </MenuTag>
          <MenuTag
            className={active === 'future' ? 'active last' : 'last'}
            onClick={() => setActive('future')}
          >
            Future Appointments
          </MenuTag>
        </TagsDiv>
        <ContentDiv>
          {active === 'past'
            ? pastAppointments.map((appointment) => (
                <AppointmentItem
                  {...appointment}
                  reviewButton
                  key={appointment._id}
                />
              ))
            : futureAppointments.map((appointment) => (
                <AppointmentItem {...appointment} key={appointment._id} />
              ))}
        </ContentDiv>
      </Appointments>

      <Footer />
    </div>
  );
}

const Appointments = styled.div`
  min-height: 50vh;
  width: 50vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 6rem;
  padding: 0;
  color: #000000;
`;

const TagsDiv = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MenuTag = styled.button`
  width: 50%;
  border: none;
  background: #d9d9d9;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 0;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
  color: #0b0b45;

  &.last {
    border-right-color: transparent;
  }

  &.active {
    background: #ffffff;
  }
`;

const ContentDiv = styled.div`
  padding: 0 2.5rem;
`;

export default ViewAppointments;
