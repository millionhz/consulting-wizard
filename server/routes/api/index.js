const express = require('express');
const signUpRouter = require('./signUp');

const router = express.Router();

router.use('/signUp', signUpRouter);

module.exports = router;
