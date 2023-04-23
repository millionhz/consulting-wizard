const express = require('express');
const {
  createAppointment,
  getAppointmentByConsultantAndDate,
  viewPastAppointmentsConsultant,
  viewUpcomingAppointmentsConsultant,
  deleteAppointment,
} = require('../../models/appointment');
const onlyConsultant = require('../../middlewares/onlyConsultant');

const router = express.Router();

router.use(onlyConsultant);

router.get('/', (req, res, next) => {
  // INFO: Get all appointments available on a certain date
  const { id } = req.user;
  const { from, to } = req.query;
  // INFO: date is in ISO format

  getAppointmentByConsultantAndDate(id, from, to)
    .then((appointments) => {
      res.json(appointments);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { id } = req.user;
  const { from, to } = req.body;
  // INFO: from and to are in ISO format

  createAppointment(id, from, to)
    .then((appointment) => {
      res.json(appointment);
    })
    .catch(next);
});

router.get('/past', (req, res, next) => {
  const { id } = req.user;
  const { timestamp } = req;

  viewPastAppointmentsConsultant(id, timestamp)
    .then((data) => {
      const filteredData = data.filter(
        (appointment) => appointment.client !== undefined
      );
      res.json(filteredData);
    })
    .catch(next);
});

router.get('/upcoming', (req, res, next) => {
  const { id } = req.user;
  const { timestamp } = req;

  viewUpcomingAppointmentsConsultant(id, timestamp)
    .then((data) => {
      const filteredData = data.filter(
        (appointment) => appointment.client !== undefined
      );
      res.json(filteredData);
    })
    .catch(next);
});

router.delete('/:appointmentId', (req, res, next) => {
  const { id: consultantId } = req.user;
  const { appointmentId } = req.params;

  deleteAppointment(consultantId, appointmentId)
    .then((out) => {
      res.json(out);
    })
    .catch(next);
});

module.exports = router;
