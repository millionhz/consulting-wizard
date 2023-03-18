const { getUserByToken } = require('../models/user');

const authenticate = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).end();
    return;
  }

  getUserByToken(token)
    .then((userObj) => {
      req.user = userObj;
      next();
    })
    .catch(() => {
      res.status(401).end();
    });
};

module.exports = authenticate;
