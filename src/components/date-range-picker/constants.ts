import type { IDefaultStaticRanges } from "./type";

import { isSameDay } from "date-fns";

import { defineds } from "./definds";
import { Preview, Range } from "react-date-range";

export const SelectionLabel: { [key: string]: string } = {
  TODAY: "Today",
  LAST_7_DAYS: "Last 7 days",
  LAST_MONTH: "Last month",
  LAST_QUARTER: "Last quarter",
  THIS_YEAR: "This year",
  LAST_YEAR: "Last Year",
  CUSTOM: "Custom",
};

const staticRangeHandler = {
  range: {},
  isSelected: ({ startDate, endDate }: Range) => {
    if (startDate && endDate) {
      return isSameDay(startDate, endDate);
    }
    return false;
  },
};

export const createStaticRanges = (
  ranges: { label: string; range: () => Preview }[]
) => {
  return ranges.map((range) => {
    return { ...staticRangeHandler, ...range };
  });
};

const { TODAY, LAST_7_DAYS, LAST_MONTH, LAST_QUARTER, THIS_YEAR, LAST_YEAR } =
  SelectionLabel;

const {
  endOfLastMonth,
  endOfLastQuarter,
  endOfLastWeek,
  endOfLastYear,
  endOfToday,
  startOfLastMonth,
  startOfLastQuarter,
  startOfLastWeek,
  startOfLastYear,
  startOfToday,
  startOfYear,
  tillDate,
} = defineds;

export const defaultStaticRanges: IDefaultStaticRanges[] = createStaticRanges([
  {
    label: TODAY,
    range: () => ({
      startDate: startOfToday,
      endDate: endOfToday,
    }),
  },
  {
    label: LAST_7_DAYS,
    range: () => ({
      startDate: startOfLastWeek,
      endDate: endOfLastWeek,
    }),
  },
  {
    label: LAST_MONTH,
    range: () => ({
      startDate: startOfLastMonth,
      endDate: endOfLastMonth,
    }),
  },
  {
    label: LAST_QUARTER,
    range: () => ({
      startDate: startOfLastQuarter,
      endDate: endOfLastQuarter,
    }),
  },
  {
    label: LAST_YEAR,
    range: () => ({
      startDate: startOfLastYear,
      endDate: endOfLastYear,
    }),
  },
  {
    label: THIS_YEAR,
    range: () => ({
      startDate: startOfYear,
      endDate: tillDate,
    }),
  },
]);
