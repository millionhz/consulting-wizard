import React from 'react';
import styled from '@emotion/styled';
import DelIcon from '@mui/icons-material/Delete';

function ReportedFeedback({
  reviewerName,
  respondentName,
  content,
  id,
  ignoreHandler,
  deleteHandler,
}) {
  return (
    <div>
      <TextReport>
        Posted by: <p>{reviewerName}</p>
      </TextReport>
      <TextReport>
        Posted to: <p>{respondentName}</p>
      </TextReport>
      <TextReport>
        Feedback: <p>{content}</p>
      </TextReport>
      <div>
        <IgnoreIcon
          onClick={() => {
            ignoreHandler(_id);
          }}
        >
          <TextReport>Ignore</TextReport>
        </IgnoreIcon>
        <DeleteIcon
          onClick={() => {
            deleteHandler(id);
          }}
        >
          <DelIcon />
        </DeleteIcon>
      </div>

      <SeparatingLine />
    </div>
  );
}

const SeparatingLine = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;
const TextReport = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 0;

  p {
    font-weight: 400;
    margin-left: 5px;
  }
`;
const DeleteIcon = styled.button`
  margin-left: 20px;
  color: #fb1e1e;
  background: #ffffff;
  border: 2px #fb1e1e;
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
`;

const IgnoreIcon = styled.button`
  color: #2ec309;
  background: #ffffff;
  border: 2px #2ec309;
  padding: 0rem 0rem 0rem 0rem;
`;

export default ReportedFeedback;
