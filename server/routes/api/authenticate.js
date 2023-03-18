const express = require('express');
const { getUserByToken } = require('../../models/user');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { token } = req.body;

  getUserByToken(token)
    .then((userObj) => {
      res.cookie('token', token, { httpOnly: true, sameSite: true });
      res.json(userObj);
    })
    .catch(next);
});

module.exports = router;
