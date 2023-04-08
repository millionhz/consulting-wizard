const { verifySessionToken } = require('../utils/firebaseAuth');
const { getUserById } = require('../models/user');
const { getConsultantById } = require('../models/consultant');
const { getClientById } = require('../models/client');
const userTypes = require('../utils/userTypes');

const getUserByToken = (token) => {
  let retObj = {};

  return verifySessionToken(token)
    .then((userObj) => {
      const { uid } = userObj;
      retObj = { ...userObj };
      return getUserById(uid);
    })
    .then((userObj) => {
      retObj = { ...retObj, ...userObj.toObject() };
      const { uid, type } = retObj;

      if (type === userTypes.ADMIN) {
        return {};
      }

      if (type === userTypes.CONSULTANT) {
        return getConsultantById(uid).then((userObj_) => userObj_.toObject());
      }

      if (type === userTypes.CLIENT) {
        return getClientById(uid).then((userObj_) => userObj_.toObject());
      }

      throw new Error('Invalid user type');
    })
    .then((userObj) => ({ ...retObj, ...userObj }));
};

const authenticate = (req, res, next) => {
  const { session } = req.cookies;

  if (!session) {
    res.sendStatus(401);
    return;
  }

  getUserByToken(session)
    .then((userObj) => {
      req.user = userObj;
      next();
    })
    .catch((err) => {
      res.sendStatus(401);
      next(err);
    });
};

module.exports = authenticate;
