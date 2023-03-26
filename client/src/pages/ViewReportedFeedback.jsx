/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import DelIcon from '@mui/icons-material/Delete';
import NavBarAdmin from '../components/NavBarAdmin';
import Footer from '../components/Footer';

function ViewReportedFeedback() {
  const [reportList, setReportList] = useState([
    {
      id: 1,
      reportedUser: 'Ayesha Fazal Lashkarwala',
      feedback: 'This is stupidd',
      reportedBy: 'Umama Nasir Abbasi',
    },
    {
      id: 2,
      reportedUser: 'Ayesha Fazal Lashkarwala',
      feedback: 'This is stupidd',
      reportedBy: 'Umama Nasir Abbasi',
    },
    {
      id: 3,
      reportedUser: 'Ayesha Fazal Lashkarwala',
      feedback: 'This is stupidd',
      reportedBy: 'Umama Nasir Abbasi',
    },
  ]);
  function removeFeedback(id) {
    const newReportList = reportList.filter((review) => review.id !== id);
    setReportList(newReportList);
  }
  function deleteHandler(id) {
    // send delete request to backend.Need the format in which the request needs to be sent
    removeFeedback(id);
  }
  function ignoreHandler(id) {
    // send unflag request to backend. Need the format in which the request needs to be sent
    removeFeedback(id);
  }
  return (
    <div>
      <NavBarAdmin page="Reported Feedback" />
      <Background>
        {reportList.map((reportFeedback) => (
          <>
            <TextReport>Posted by: {reportFeedback.reportedUser}</TextReport>
            <TextReport>{reportFeedback.feedback}</TextReport>
            <TextReport>Reported by: {reportFeedback.reportedBy}</TextReport>
            <div align="right">
              <IgnoreIcon
                onClick={() => {
                  removeFeedback(reportFeedback.id);
                  ignoreHandler(reportFeedback.id);
                }}
              >
                <TextReport>Ignore</TextReport>
              </IgnoreIcon>
              <DeleteIcon
                onClick={() => {
                  removeFeedback(reportFeedback.id);
                  deleteHandler(reportFeedback.id);
                }}
              >
                <DelIcon />
              </DeleteIcon>
            </div>

            <SeparatingLine />
          </>
        ))}
      </Background>
      <Footer />
    </div>
  );
}

const Background = styled.div`
  min-height: 100vh;
  width: 50vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 5rem;
  border-radius: 0rem;
  padding: 6rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;
const SeparatingLine = styled.div`
  display: flex;
  width: 50vw;
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
  text-align: left;
  font-weight: 500;
  font-size: 0.8rem;
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

export default ViewReportedFeedback;
