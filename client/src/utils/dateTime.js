export const getDate = (dateTime) => {
  const date = new Date(dateTime);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const getNextDate = (dateTime) => {
  const date = new Date(dateTime);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 1);
  return date;
};
