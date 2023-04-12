// import React, { useState } from 'react';
// import TimezoneSelect from 'react-timezone-select';

// function TimePickerComponent() {
//   const [time, setTime] = useState({ hour: 0, minute: 0, timezone: '' });

//   const handleTimezoneChange = (timezone) => {
//     setTime({ ...time, timezone });
//   };

//   const handleTimeChange = (event) => {
//     const [hour, minute] = time.split(':');
//     setTime({ ...time, hour: Number(hour), minute: Number(minute) });
//   };

//   const timeArray = Array.from({ length: 24 }, (_, i) => [i, 0]);

//   return (
//     <>
//       <input type="time" 
//       onChange={setTime} 
//       value = {time}
//     //   value={`${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`} 
//       />
//       <button type='button' onChange={handleTimeChange} > Confirm </button>
//       {/* <TimezoneSelect
//         value={time.timezone}
//         onChange={handleTimezoneChange}
//       /> */}
//       <ul>
//         {timeArray.map(([hour, minute]) => {
//           const timeString = new Date(0, 0, 0, hour, minute, 0).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//           return (
//             <li key={`${hour}:${minute}`}>
//               {timeString}
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   );
// }
// export default TimePickerComponent;




import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function TimePickerPage() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeList, setTimeList] = useState([]);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handleAddTime = () => {
    setTimeList([...timeList, selectedTime]);
    setSelectedTime(null);
  };

  return (
    <div>
      <TimePicker
        value={selectedTime}
        onChange={handleTimeChange}
      
      />
      <button type='button' onClick={handleAddTime}>Add Time</button>
      {timeList.length > 0 &&
        <ul>
          {timeList.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default TimePickerPage;

