export const getDate = (dateTime) => {
  const date = new Date(dateTime);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const getNextDate = (dateTime) => {
  const date = new Date(dateTime);
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
};
