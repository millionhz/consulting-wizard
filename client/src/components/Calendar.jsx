import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar({ setDate, date }) {
  return (
    <CalendarContainer>
      <Calendar onChange={setDate} value={date} />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  .react-calendar {
    width: 370px;
    border-radius: 10px;
    padding: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }

  .react-calendar__navigation button {
    font-size: 1.1rem;
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays {
    color: #000000;
  }

  .react-calendar__navigation button,
  .react-calendar__month-view__weekdays,
  .react-calendar__tile {
    font-family: 'Lexend', 'Roboto', Arial, Helvetica, sans-serif;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--now,
  .react-calendar__tile--active {
    border-radius: 7px;
  }

  .react-calendar__tile--active {
    background: #0047ff;
  }
`;

export default CustomCalendar;
