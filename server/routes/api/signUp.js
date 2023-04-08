const express = require('express');
const { addClient } = require('../../models/client');
const { addConsultant } = require('../../models/consultant');
const { sendVerificationEmail } = require('../../utils/mailer');

const router = express.Router();

router.post('/client', (req, res, next) => {
  const { email, password, displayName, major, yearOfGraduation, bio } =
    req.body;

  addClient(email, password, displayName, major, yearOfGraduation, bio)
    .then(() => {
      res.sendStatus(200);
    })
    .then(() => sendVerificationEmail(email))
    .catch(next);
});

router.post('/consultant', (req, res, next) => {
  const {
    email,
    password,
    displayName,
    major,
    yearOfGraduation,
    currentPlacement,
    bio,
  } = req.body;

  addConsultant(
    email,
    password,
    displayName,
    major,
    yearOfGraduation,
    currentPlacement,
    bio
  )
    .then(() => {
      res.sendStatus(200);
    })
    .then(() => sendVerificationEmail(email))
    .catch(next);
});

module.exports = router;
