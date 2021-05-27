export const gigasecond = (currentDate) => {
  let currentTime = currentDate.getTime();
  let newDate = new Date(currentTime + (10 ** 12));
  return newDate;
};
