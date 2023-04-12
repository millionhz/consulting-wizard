// import styled from '@emotion/styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
// import dayjs from 'dayjs';
import Modal from 'react-modal';

function TimePickerModal({ isOpen, handleAddTime, handleClose }) {
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '35vw',
            height: '45vh',
            margin: 'auto',
            color: '#000000',
            padding: '1rem',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticTimePicker
            orientation="landscape"
            onAccept={handleAddTime}
            onClose={handleClose}
          />
        </LocalizationProvider>
      </Modal>
    </div>
  );
}

export default TimePickerModal;
