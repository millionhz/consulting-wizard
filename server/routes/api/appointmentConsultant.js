const express = require('express');
const {
  viewPastAppointmentsConsultant,
  viewUpcomingAppointmentsConsultant,
} = require('../../models/appointment');
const onlyConsultant = require('../../middlewares/onlyConsultant');

const router = express.Router();

router.use(onlyConsultant);

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

module.exports = router;
