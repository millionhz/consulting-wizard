const express = require('express');
const { getClientById } = require('../../models/client');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  getClientById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
