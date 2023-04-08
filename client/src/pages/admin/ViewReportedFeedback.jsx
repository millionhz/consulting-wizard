import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DelIcon from '@mui/icons-material/Delete';
import NavBarAdmin from '../../components/NavBarAdmin';
import Footer from '../../components/Footer';
import {
  viewReportedFeedback,
  deleteFeedback,
  falseReport,
} from '../../api/backend';

function ViewReportedFeedback() {
  const [reportList, setReportList] = useState([]);
  useEffect(() => {
    viewReportedFeedback().then((data) => setReportList(data.data));
  }, []);
  function removeFeedback(id) {
    const newReportList = reportList.filter((review) => review._id !== id);
    setReportList(newReportList);
  }
  function deleteHandler(id) {
    deleteFeedback(id);
    removeFeedback(id);
  }
  function ignoreHandler(id) {
    falseReport(id);
    removeFeedback(id);
  }
  return (
    <div>
      {console.log(reportList)}
      <NavBarAdmin page="Reported Feedback" />
      <Background>
        {reportList.map((reportFeedback) => (
          <>
            <TextReport>Posted by: {reportFeedback.respondent}</TextReport>
            <TextReport>{reportFeedback.content}</TextReport>
            <TextReport>Reported by: {reportFeedback.reviewer}</TextReport>
            <div>
              <IgnoreIcon
                onClick={() => {
                  removeFeedback(reportFeedback._id);
                  ignoreHandler(reportFeedback._id);
                }}
              >
                <TextReport>Ignore</TextReport>
              </IgnoreIcon>
              <DeleteIcon
                onClick={() => {
                  removeFeedback(reportFeedback._id);
                  deleteHandler(reportFeedback._id);
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
