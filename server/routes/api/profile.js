const express = require('express');
const { updateClient } = require('../../models/client');
const { updateConsultant } = require('../../models/consultant');
const userTypes = require('../../utils/userTypes');

const router = express.Router();

router.get('/', (req, res) => {
  const { user } = req;
  res.json(user);
});

router.patch('/', (req, res) => {
  const { uid, type } = req.user;
  const { body } = req;

  if (type === userTypes.CLIENT) {
    return updateClient(uid, body).then((userObj) => {
      res.json(userObj.toObject());
    });
  }

  if (type === userTypes.CONSULTANT) {
    return updateConsultant(uid, body).then((userObj) => {
      res.json(userObj.toObject());
    });
  }

  return res.sendStatus(403);
});

module.exports = router;
