const express = require('express');
const { getReportedConsultants, falseReportOfConsultant, deactivateConsultant} = require('../../models/consultant');
const { getReportedClients, falseReportOfClient, deactivateClient} = require('../../models/client');

const { getDeactivatedUsers } = require('../../models/user');

const router = express.Router();

router.get('/reportedConsultants', (req, res, next) => {
  getReportedConsultants()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.get('/reportedClients', (req, res, next) => {
  getReportedClients()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

// TODO: Segregate to deactivatedConsultants and deactivatedClients
router.get('/deactivatedUsers', (req, res, next) => {
  getDeactivatedUsers()
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});


router.post('/ignoreClient/:id', (req,res,next) => {
  const requiredId = req.params.id
  falseReportOfClient(requiredId)
  .then((data) => {
    res.json(data);
  })
  .catch(next);
});


router.post('/ignoreConsultant/:id', (req,res,next) => {
  const requiredId = req.params.id
  falseReportOfConsultant(requiredId)
  .then((data) => {
    res.json(data);
  })
  .catch(next);
});


router.post('/deactivateClient/:id', (req,res,next) => {
  const requiredId = req.params.id
  deactivateClient(requiredId)
  .then((data) => {
    res.json(data);
  })
  .catch(next);
});


router.post('/deactivateConsultant/:id', (req,res,next) => {
  const requiredId = req.params.id
  deactivateConsultant(requiredId)
  .then((data) => {
    res.json(data);
  })
  .catch(next);
});

module.exports = router;
