import { DateTime } from "luxon";

export const formatDate = (
  date: Date | string,
  format: string = "dd-MM-yyyy"
): string => {
  const dateTime =
    typeof date === "string"
      ? DateTime.fromISO(date)
      : DateTime.fromJSDate(date);
  return dateTime.toFormat(format);
};
