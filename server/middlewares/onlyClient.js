const userTypes = require('../utils/userTypes');

const onlyClient = (req, res, next) => {
  const { type } = req.user;

  if (type !== userTypes.CLIENT) {
    res.sendStatus(403);
    return;
  }

  next();
};

module.exports = onlyClient;
