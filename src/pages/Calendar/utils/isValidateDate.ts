export const isValidDate = (date: any): Date => {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date) && date;
};
