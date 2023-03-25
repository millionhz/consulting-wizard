const express = require('express');
const authenticate = require('../../middlewares/authenticate');
const logInRouter = require('./logIn');
const signUpRouter = require('./signUp');
const authenticateRouter = require('./authenticate');
const profileRouter = require('./profile');

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/logIn', logInRouter);

router.use(authenticate);

router.use('/authenticate', authenticateRouter);
router.use('/profile', profileRouter);

router.get('/protected', (req, res) => {
  const { uid } = req.user;
  res.json({ message: `${uid} is authenticated` });
});

module.exports = router;
