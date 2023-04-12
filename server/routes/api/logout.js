const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.clearCookie('session');
  res.sendStatus(200);
});

module.exports = router;
