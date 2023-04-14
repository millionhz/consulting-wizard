const now = () =>
  new Date(
    new Date().toLocaleString('en', {
      timeZone: 'Asia/Karachi',
    })
  );

const getDate = (dateTime) => {
  const date = new Date(
    new Date(dateTime).toLocaleString('en', {
      timeZone: 'Asia/Karachi',
    })
  );
  date.setHours(0, 0, 0, 0);
  return date;
};

const getNextDate = (dateTime) => {
  const date = new Date(
    new Date(dateTime).toLocaleString('en', {
      timeZone: 'Asia/Karachi',
    })
  );
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = {
  getNextDate,
  getDate,
  now,
};
