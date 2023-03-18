const express = require('express');
const authenticateRouter = require('./authenticate');
const signUpRouter = require('./signUp');

const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/authenticate', authenticateRouter);

module.exports = router;
