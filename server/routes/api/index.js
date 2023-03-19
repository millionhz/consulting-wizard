const express = require('express');
const authenticate = require('../../middlewares/authenticate');
const getCookieRouter = require('./getCookie');
const signUpRouter = require('./signUp');
const authenticateRouter = require('./authenticate');

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/getCookie', getCookieRouter);

router.use(authenticate);

router.use('/authenticate', authenticateRouter);

router.get('/protected', (req, res) => {
  const { uid } = req.user;
  res.json({ message: `${uid} is authenticated` });
});

module.exports = router;
