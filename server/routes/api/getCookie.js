const express = require('express');
const { validateToken } = require('../../utils/firebaseAuth');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { token } = req.body;

  validateToken(token)
    .then(() => {
      res.cookie('token', token, { httpOnly: true, sameSite: true });
      res.sendStatus(200);
    })
    .catch(next);
});

module.exports = router;
