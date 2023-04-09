const express = require('express');
const {
  getAppointmentByConsultantAndDate,
  bookAppointmentById,
  viewPastAppointmentsClient,
  viewUpcomingAppointmentsClient,
} = require('../../models/appointment');
const onlyClient = require('../../middlewares/onlyClient');
const { getDate, getNextDate } = require('../../utils/dateTime');

const router = express.Router();

router.use(onlyClient);

router.get('/', (req, res, next) => {
  // INFO: Get all unbooked appointments available on a certain date
  const { id, date } = req.query;
  // INFO: date is in ISO format

  const from = getDate(date);
  const to = getNextDate(from);

  getAppointmentByConsultantAndDate(id, from, to)
    .then((data) => {
      const filteredData = data.filter(
        (appointment) => appointment.client === undefined
      );
      res.json(filteredData);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { appointmentId } = req.body;
  const { id } = req.user;

  bookAppointmentById(appointmentId, id)
    .then((appointment) => {
      res.json(appointment);
    })
    .catch((err) => {
      res.sendStatus(500);
      next(err);
    });
});

router.get('/past', (req, res, next) => {
  const { id } = req.user;
  viewPastAppointmentsClient(id)
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
  viewUpcomingAppointmentsClient(id)
    .then((data) => {
      const filteredData = data.filter(
        (appointment) => appointment.client !== undefined
      );
      res.json(filteredData);
    })
    .catch(next);
});

module.exports = router;
