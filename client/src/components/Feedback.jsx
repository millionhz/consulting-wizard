import React, { useState, useEffect } from 'react';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('/api/feedback/dummy-feedbacks')
      .then(res => res.json())
      .then(data => setFeedbacks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Feedbacks</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            <h3>{feedback.title}</h3>
            <p>{feedback.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
