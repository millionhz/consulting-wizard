const express = require('express');
const {
  getConsultants,
  getConsultantById,
  setAppointmentTimes,
} = require('../../models/consultant');

const router = express.Router();

router.get('/', (req, res, next) => {
  getConsultants()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  getConsultantById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.patch('/appointmentTimes', (req, res, next) => {
  const { id } = req.user;
  const { appointmentTimes } = req.body;
  setAppointmentTimes(id, appointmentTimes)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
