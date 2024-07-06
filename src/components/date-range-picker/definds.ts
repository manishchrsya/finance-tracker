import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  addYears,
  startOfYear,
  endOfYear,
} from "date-fns";

export const defineds = {
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),

  startOfLastWeek: startOfDay(addDays(new Date(), -6)),
  endOfLastWeek: endOfDay(new Date()),

  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),

  startOfLastQuarter: startOfMonth(addMonths(new Date(), -3)),
  endOfLastQuarter: endOfMonth(addMonths(new Date(), -1)),

  startOfLastYear: startOfYear(addYears(new Date(), -1)),
  endOfLastYear: endOfYear(addYears(new Date(), -1)),

  startOfYear: startOfYear(new Date()),
  tillDate: endOfDay(new Date()),
};
