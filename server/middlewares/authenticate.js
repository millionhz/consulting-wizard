const { validateToken } = require('../utils/firebaseAuth');
const { getUserById } = require('../models/user');
const { getConsultantById } = require('../models/consultant');
const { getClientById } = require('../models/client');
const userTypes = require('../utils/userTypes');

const getUserByToken = (token) => {
  let retObj = {};
  return validateToken(token)
    .then((userObj) => {
      const { uid } = userObj;
      retObj = { ...userObj };
      return getUserById(uid);
    })
    .then((userObj) => {
      retObj = { ...retObj, ...userObj.toObject() };
      const { uid, type } = retObj;

      if (type === userTypes.CONSULTANT) {
        return getConsultantById(uid);
      }

      if (type === userTypes.CLIENT) {
        return getClientById(uid);
      }

      throw new Error('Invalid user type');
    })
    .then((userObj) => ({ ...retObj, ...userObj.toObject() }));
};

const authenticate = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.sendStatus(401);
    return;
  }

  getUserByToken(token)
    .then((userObj) => {
      req.user = userObj;
      next();
    })
    .catch(() => {
      res.sendStatus(401);
    });
};

module.exports = authenticate;
