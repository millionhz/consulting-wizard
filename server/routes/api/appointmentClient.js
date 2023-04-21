const express = require('express');
const {
  getAppointmentByConsultantAndDate,
  bookAppointmentById,
  viewPastAppointmentsClient,
  viewUpcomingAppointmentsClient,
} = require('../../models/appointment');
const onlyClient = require('../../middlewares/onlyClient');

const router = express.Router();

router.use(onlyClient);

router.get('/', (req, res, next) => {
  // INFO: Get all unbooked appointments available on a certain date
  const { id, from, to } = req.query;
  // INFO: date is in ISO format
  const { timestamp } = req;

  getAppointmentByConsultantAndDate(id, from, to)
    .then((data) => {
      const filteredData = data.filter(
        (appointment) =>
          appointment.client === undefined &&
          appointment.from > new Date(timestamp)
      );
      res.json(filteredData);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { appointmentId } = req.body;
  const { id } = req.user;
  const { timestamp } = req;

  bookAppointmentById(appointmentId, id, timestamp)
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
  const { timestamp } = req;

  viewPastAppointmentsClient(id, timestamp)
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

  viewUpcomingAppointmentsClient(id, timestamp)
    .then((data) => {
      const filteredData = data.filter(
        (appointment) => appointment.client !== undefined
      );
      res.json(filteredData);
    })
    .catch(next);
});

module.exports = router;
