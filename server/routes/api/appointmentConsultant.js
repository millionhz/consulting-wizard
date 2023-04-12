const express = require('express');
const {
  createAppointment,
  getAppointmentByConsultantAndDate,
  viewPastAppointmentsConsultant,
  viewUpcomingAppointmentsConsultant,
  deleteAppointment,
} = require('../../models/appointment');
const onlyConsultant = require('../../middlewares/onlyConsultant');
const { getDate, getNextDate } = require('../../utils/dateTime');

const router = express.Router();

router.use(onlyConsultant);

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
  viewPastAppointmentsConsultant(id)
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
  viewUpcomingAppointmentsConsultant(id)
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

router.get('/:date', (req, res, next) => {
  // INFO: Get all appointments available on a certain date
  const { id } = req.user;
  const { date } = req.params;
  // INFO: date is in ISO format

  const from = getDate(date);
  const to = getNextDate(from);

  getAppointmentByConsultantAndDate(id, from, to)
    .then((appointments) => {
      res.json(appointments);
    })
    .catch(next);
});

module.exports = router;
