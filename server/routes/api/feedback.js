const express = require('express');
const {
  addFeedback,
  reportFeedback,
  getFeedbackbyConsultant,
  viewReportedFeedback,
  deleteFeedback,
  falseReport
} = require('../../models/feedback');

const router = express.Router();

router.post('/', (req, res, next) => {
  const reviewer = req.user;
  const { respondent, content } = req.body;
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

router.get('/', (req, res, next) => {
  const consultantName = req.user;
  getFeedbackbyConsultant(consultantName)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/view', (req, res, next) => {
  viewReportedFeedback()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/ignore/:id', (req,res,next) => {
  const feedbackId = req.params.id;
  falseReport(feedbackId)
  .then((data) => {
    res.json(data);
  })
  .catch(next);
})


router.delete('/delete/:id', (req, res, next) => {
  const feedbackId = req.params.id;
  deleteFeedback(feedbackId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
