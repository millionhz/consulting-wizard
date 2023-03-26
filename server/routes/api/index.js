const express = require('express');
const signUpRouter = require('./signUp');
const ViewProfileRouter = require('./viewProfileRouter')

const EditProfileRouter = require('./editProfileRouter')
const router = express.Router();

router.use('/signUp', signUpRouter);
router.use('/profile', ViewProfileRouter);
router.use('/profile', EditProfileRouter)
module.exports = router;
