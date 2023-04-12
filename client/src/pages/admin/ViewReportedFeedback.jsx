import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBarAdmin from '../../components/NavBarAdmin';
import Footer from '../../components/Footer';
import {
  viewReportedFeedback,
  deleteFeedback,
  falseReport,
} from '../../api/backend';
import ReportedFeedbackItem from '../../components/ReportedFeedbackItem';

function ViewReportedFeedback() {
  const [reportList, setReportList] = useState([]);
  useEffect(() => {
    viewReportedFeedback().then(({ data }) => setReportList(data));
  }, []);

  function removeFeedback(id) {
    const newReportList = reportList.filter((review) => review._id !== id);
    setReportList(newReportList);
  }

  const deleteHandler = (id) => {
    deleteFeedback(id);
    removeFeedback(id);
  };

  const ignoreHandler = (id) => {
    falseReport(id);
    removeFeedback(id);
  };

  return (
    <div>
      <NavBarAdmin page="Reported Feedback" />
      <Background>
        {reportList.map((reportFeedback, idx) => (
          <ReportedFeedbackItem
            key={idx}
            reviewerName={reportFeedback.reviewer.displayName}
            respondentName={reportFeedback.respondent.displayName}
            content={reportFeedback.content}
            id={reportFeedback._id}
            ignoreHandler={ignoreHandler}
            deleteHandler={deleteHandler}
          />

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

export default ViewReportedFeedback;
