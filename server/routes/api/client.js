const express = require('express');
const { reportClient, getClientById } = require('../../models/client');

const router = express.Router();

router.post('/:id', (req, res, next) => {
  const reportedPostId = req.params.id;
  const reportedId = { _id: reportedPostId.toString() };
  reportClient(reportedId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  getClientById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
