const express = require('express');
const authenticate = require('../../middlewares/authenticate');
const logInRouter = require('./logIn');
const signUpRouter = require('./signUp');
const authenticateRouter = require('./authenticate');
const profileRouter = require('./profile');
const consultantRouter = require('./consultant');
const feedbackRouter = require('./feedback');
const appointmentRouter = require('./appointment');
const adminRouter = require('./admin');

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/logIn', logInRouter);

router.use(authenticate);
router.use('/authenticate', authenticateRouter);
router.use('/profile', profileRouter);
router.use('/consultant', consultantRouter);
router.use('/appointment', appointmentRouter);
router.use('/feedback', feedbackRouter);
router.use('/admin', adminRouter);

router.get('/protected', (req, res) => {
  const { uid } = req.user;
  res.json({ message: `${uid} is authenticated` });
});

module.exports = router;
