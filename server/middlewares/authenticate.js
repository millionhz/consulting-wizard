const { getUserByToken } = require('../models/user');

const authenticate = (req, res, next) => {
  const { token } = req.cookies;
  getUserByToken(token)
    .then((userObj) => {
      req.user = userObj;
      next();
    })
    .catch(next);
};

module.exports = authenticate;
