const express = require('express');
const { searchConsultant } = require('../../models/consultant');

const router = express.Router();

router.post('/consultant', (req, res, next) => {
  const searchInput = req.body;

  searchConsultant(searchInput)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
