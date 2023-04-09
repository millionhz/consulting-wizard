const express = require('express');
const { reportClient } = require('../../models/client');

const router = express.Router();

router.post('/:id', (req, res, next) => {
  const reportedPostId = req.params.id;
  console.log(reportedPostId)
  const reportedId = { _id: reportedPostId.toString() };
  reportClient(reportedId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
