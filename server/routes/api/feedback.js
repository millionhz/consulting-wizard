const express = require('express');
const { addFeedback, reportFeedback } = require('../../models/feedback');

const router = express.Router();

router.post('/', (req, res, next) => {
    const { reviewer, respondent, content } = req.body;
    console.log(reviewer, respondent, content);
    addFeedback(reviewer, respondent, content)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  });


router.post('/report', (req, res, next) => {

  const reportedPostId = req.body;

  reportFeedback(reportedPostId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);

});

module.exports = router;