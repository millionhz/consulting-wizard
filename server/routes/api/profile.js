const express = require('express');
const { updateClient, getClientById } = require('../../models/client');
const {
  updateConsultant,
  getConsultantById,
} = require('../../models/consultant');
const userTypes = require('../../utils/userTypes');

const router = express.Router();

router.get('/', (req, res) => {
  const { id, type, email } = req.user;
  let retObj = { type, email };

  const packageAndSend = (userObj) => {
    retObj = { ...userObj.toObject(), ...retObj };
    res.json(retObj);
  };

  if (type === userTypes.CLIENT) {
    return getClientById(id).then(packageAndSend);
  }

  if (type === userTypes.CONSULTANT) {
    return getConsultantById(id).then(packageAndSend);
  }

  return res.sendStatus(403);
});

router.patch('/', (req, res) => {
  const { id, type, email } = req.user;
  const { body } = req;
  let retObj = { type, email };

  const packageAndSend = (userObj) => {
    retObj = { ...userObj.toObject(), ...retObj };
    res.json(retObj);
  };

  if (type === userTypes.CLIENT) {
    return updateClient(id, body).then(packageAndSend);
  }

  if (type === userTypes.CONSULTANT) {
    return updateConsultant(id, body).then(packageAndSend);
  }

  return res.sendStatus(403);
});

module.exports = router;
