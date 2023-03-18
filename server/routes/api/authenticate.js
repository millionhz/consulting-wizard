const express = require('express');
const { validateToken } = require('../../utils/firebaseAuth');
const { getUserById } = require('../../models/user');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { token } = req.body;
  let retObj = {};

  validateToken(token)
    .then((userObj) => {
      const { uid } = userObj;
      retObj = { ...userObj };
      return getUserById(uid);
    })
    .then((userObj) => {
      res.cookie('token', token, { httpOnly: true, sameSite: true });
      res.json({ ...retObj, ...userObj.toObject() });
    })
    .catch(next);
});

module.exports = router;
