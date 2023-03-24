const express = require('express');
const { addClient } = require('../../models/client');

const router = express.Router();

router.post('/client', (req, res, next) => {
  const { email, password, displayName, major, yearOfGraduation, bio } =
    req.body;

  addClient(email, password, displayName, major, yearOfGraduation, bio)
    .then((data) => {
      // TODO: Send 200
      // TODO: Send verification email
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
