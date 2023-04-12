const getDate = (dateTime) => {
  const date = new Date(dateTime);
  date.setHours(0, 0, 0, 0);
  return date;
};

const getNextDate = (dateTime) => {
  const date = new Date(dateTime);
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = {
  getNextDate,
  getDate,
};
