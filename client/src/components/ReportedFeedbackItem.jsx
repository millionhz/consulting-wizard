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
    <ReportedItem>
      <Icons>
        <IgnoreIcon
          onClick={() => {
            ignoreHandler(id);
          }}
        >
          Ignore
        </IgnoreIcon>
        <DeleteIcon
          onClick={() => {
            deleteHandler(id);
          }}
        >
          <DelIconStyled />
        </DeleteIcon>
      </Icons>
      <TextReport>{reviewerName}</TextReport>
      <TextReport>{content}</TextReport>

      <SeparatingLine />
      <TextReport>Reported By: {respondentName}</TextReport>
    </ReportedItem>
  );
}

const ReportedItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 2rem 1.5rem 2rem;
  background: #f2f2f2;
  margin-top: 3rem;
  border-radius: 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 0;
`;

const SeparatingLine = styled.div`
  width: 100%;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;
const TextReport = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0 5px 15px;
`;
const DeleteIcon = styled.button`
  margin-left: 15px;
  color: #fb1e1e;
  background: transparent;
  border: none;
`;

const DelIconStyled = styled(DelIcon)`
  width: 18px;
  height: auto;
`;

const IgnoreIcon = styled.button`
  color: #2ec309;
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.8rem;
`;

export default ReportedFeedback;
