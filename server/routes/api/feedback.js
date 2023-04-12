const express = require('express');
const {
  addFeedback,
  reportFeedback,
  getReportedFeedback,
  deleteFeedback,
  getFeedback,
  falseReport,
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

router.post('/report/:id', (req, res, next) => {
  const reportedPostId = req.params.id;
  const reportedId = { _id: reportedPostId.toString() };
  reportFeedback(reportedId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

// TODO: Implement get feedback by consultant
// router.get('/consultant/:id', (req, res, next) => {
//   const consultantName = req.user;
//   getFeedbackbyConsultant(consultantName)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch(next);
// });

router.get('/', (req, res, next) => {
  getReportedFeedback()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/all-feedback', (req, res, next) => {
  getFeedback()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/view', (req, res, next) => {
  viewReportedFeedback()

router.post('/ignore/:id', (req, res, next) => {
  const feedbackId = req.params.id;
  falseReport(feedbackId)

    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.delete('/delete/:id', (req, res, next) => {
  const feedbackId = req.params.id;
  deleteFeedback(feedbackId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
