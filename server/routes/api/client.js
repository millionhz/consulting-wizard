const express = require('express');
const { reportClient } = require('../../models/client');

const router = express.Router();

router.post('/report', (req, res, next) => {
  const reportedId = req.body;

  reportClient(reportedId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
