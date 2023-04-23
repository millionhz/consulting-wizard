const timestamp = (req, res, next) => {
  req.timestamp = req.get('timestamp');
  next();
};

module.exports = timestamp;
