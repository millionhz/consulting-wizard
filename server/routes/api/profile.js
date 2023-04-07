const express = require('express');
const { updateClient, getClientById } = require('../../models/client');
const {
  updateConsultant,
  getConsultantById,
} = require('../../models/consultant');
const userTypes = require('../../utils/userTypes');

const router = express.Router();

router.get('/', (req, res, next) => {
  const { id, type, email } = req.user;
  let retObj = { type, email };

  const packageAndSend = (userObj) => {
    retObj = { ...userObj.toObject(), ...retObj };
    res.json(retObj);
  };

  const send404 = (err) => {
    res.sendStatus(404);
    next(err);
  };

  if (type === userTypes.CLIENT) {
    return getClientById(id).then(packageAndSend).catch(send404);
  }

  if (type === userTypes.CONSULTANT) {
    return getConsultantById(id).then(packageAndSend).catch(send404);
  }

  return res.sendStatus(403);
});

router.patch('/', (req, res, next) => {
  const { id, type, email } = req.user;
  const { body } = req;
  let retObj = { type, email };

  const packageAndSend = (userObj) => {
    retObj = { ...userObj.toObject(), ...retObj };
    res.json(retObj);
  };

  const send500 = (err) => {
    res.sendStatus(500);
    next(err);
  };

  if (type === userTypes.CLIENT) {
    return updateClient(id, body).then(packageAndSend).catch(send500);
  }

  if (type === userTypes.CONSULTANT) {
    delete body.appointmentTimes;
    return updateConsultant(id, body).then(packageAndSend).catch(send500);
  }

  return res.sendStatus(403);
});

module.exports = router;
