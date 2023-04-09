import styled from '@emotion/styled';
import { useCallback } from 'react';
import Modal from 'react-modal';

function Confirmation({ date, slot, counselor, closeModal, isOpen }) {
  const goToHome = useCallback(() => {
    window.location.href = '/';
  }, []);

  return (
    slot && (
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
            <ConfirmIcon src="../../public/green_tick.png" alt="" />
          </Confirmed>
          <ModalText>with {counselor}</ModalText>
          <BookingTime>
            <ModalText>Date: {date.toDateString()}</ModalText>
            <ModalText>
              Time: {slot.from.toLocaleTimeString()} -{' '}
              {slot.to.toLocaleTimeString()} Pakistan Time (UTC +5)
            </ModalText>
          </BookingTime>
          <ModalButton onClick={goToHome}>OK</ModalButton>
        </Modal>
      </div>
    )
  );
}

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
  margin-top: 1.5rem;
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
  margin-bottom: 5px;
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
  margin-bottom: 1.5rem;
`;

const ModalButton = styled.button`
  background-color: #2c9612;
  border: solid 1px #2c9612;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 1.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default Confirmation;
