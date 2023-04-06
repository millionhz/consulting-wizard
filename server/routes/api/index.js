const express = require('express');
const authenticate = require('../../middlewares/authenticate');
const logInRouter = require('./logIn');
const signUpRouter = require('./signUp');
const authenticateRouter = require('./authenticate');
const profileRouter = require('./profile');
const consultantRouter = require('./consultant');
const addFeedbackRouter = require('./feedback');
const reportFeedbackRouter = require('./feedback');
const getFeedbackbyConsultantRouter = require('./feedback');
const appointmentRouter = require('./appointment');

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/logIn', logInRouter);

router.use(authenticate);

router.use('/authenticate', authenticateRouter);
router.use('/profile', profileRouter);
router.use('/consultant', consultantRouter);
router.use('/appointment', appointmentRouter);

router.use('/feedback', addFeedbackRouter);
router.use('/feedback', reportFeedbackRouter);
router.use('/feedback', getFeedbackbyConsultantRouter);

router.get('/protected', (req, res) => {
  const { uid } = req.user;
  res.json({ message: `${uid} is authenticated` });
});

module.exports = router;
