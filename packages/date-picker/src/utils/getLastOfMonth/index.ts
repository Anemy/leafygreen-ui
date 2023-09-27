import { getDaysInUTCMonth } from '../getDaysInUTCMonth';
import { setUTCDate } from '../setUTCDate';

/** Returns the last day in a given month */
export const getLastOfMonth = (date: Date) => {
  const daysInMonth = getDaysInUTCMonth(date);
  return setUTCDate(date, daysInMonth);
};
