const express = require('express');
const {
  getConsultants,
  getConsultantById,
  getReportedConsultants,
  reportConsultants,
} = require('../../models/consultant');

const router = express.Router();

router.get('/', (req, res, next) => {
  getConsultants()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  getConsultantById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/reported', (req, res, next) => {
  getReportedConsultants()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.post('/reportConsultant', (req, res, next) => {
  const reportedId = req.body;

  reportConsultants(reportedId).then((data) => {
    res.json(data);
  }).catch(next);
})

module.exports = router;
