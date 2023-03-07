const express = require('express');
const { addUser } = require('../../models/user');

const router = express.Router();

router.post('/client', (req, res, next) => {
  const { email, password, displayName } = req.body;
  addUser(email, password, displayName)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
