const userTypes = require('../utils/userTypes');

const onlyConsultant = (req, res, next) => {
  const { type } = req.user;

  if (type !== userTypes.CONSULTANT) {
    res.sendStatus(403);
    return;
  }

  next();
};

module.exports = onlyConsultant;
