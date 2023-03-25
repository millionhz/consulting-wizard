const express = require('express');
const { createSessionCookie } = require('../../utils/firebaseAuth');

const router = express.Router();

router.post('/', (req, res) => {
  const { token } = req.body;
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  return createSessionCookie(token, expiresIn).then((cookie) => {
    res.cookie('session', cookie, {
      httpOnly: true,
      maxAge: expiresIn,
      sameSite: true,
    });
    res.sendStatus(200);
  });
});

module.exports = router;
