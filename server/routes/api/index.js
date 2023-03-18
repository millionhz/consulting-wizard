const express = require('express');
const authenticate = require('../../middlewares/authenticate');
const authenticateRouter = require('./authenticate');
const signUpRouter = require('./signUp');

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/authenticate', authenticateRouter);

router.use(authenticate);

router.get('/protected', (req, res) => {
  const { uid } = req.user;
  res.json({ message: `${uid} is authenticated` });
});

module.exports = router;
