const { getUserByToken } = require('../models/user');

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
