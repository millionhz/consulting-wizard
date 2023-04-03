import { useState } from 'react';
import Calendar from 'react-calendar';
// eslint-disable-next-line import/no-extraneous-dependencies
import TimePicker from 'react-time-picker';
import { Background, Input, Label, Div, Button} from '../components/StyledComponents.styles';

// import axios from 'axios';

// import './App.css';
function TimeConversion({ time }) {
  return <div>{time.toString()}</div>;
}

function TimeSlots() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('10:00');
  const [t, setT] = useState(['10-11', '11-12', '12-1']);
  const removeElement = (index) => {
    const newFruits = t.filter((_, i) => i !== index);
    setT(newFruits);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const handleTimeChange = (e) => {
    const tempTime = e.target.time;
    setTime([...setTime, tempTime]);
  };

  return (
    <div className="app">
      <div>
        <h4>1. Pick a date to view the timeslots</h4>
      </div>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>
        <h4>2. Add or remove timeslots</h4>
      </div>
      <div>
        <h4>Choose a new timeslot </h4>
        <TimePicker onChange={setTime} value={time} />
      </div>
      <p>{time} Pakistan Time (UTC+5)</p>
      <div>
        {t.map((ti, index) => (
          <div key={index}>
            {ti}
            <button type="button" onClick={() => removeElement(index)}>
              Delete
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
      {/* {time.map((value, index) => (
        <p key={index}>{value.toString()}</p>
      ))} */}
      {/* {time.map((t) => (
        <TimeConversion time={t} />
      ))}
      <p> The time is: {time}</p> */}
      <Button variant='cancel' type="submit" onChange={onSubmitHandler}>
        Save Changes
      </Button>
    </div>
  );
}

export default TimeSlots;
