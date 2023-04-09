const express = require('express');
const appointmentRouterClient = require('./appointmentClient');
const appointmentRouterConsultant = require('./appointmentConsultant');

const router = express.Router();

router.use('/client', appointmentRouterClient);
router.use('/consultant', appointmentRouterConsultant);

module.exports = router;
