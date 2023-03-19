const express = require('express');
const signUpRouter = require('./signUp');
const ViewProfileRouter = require('./viewProfileRouter')
const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/profile', ViewProfileRouter);

module.exports = router;
