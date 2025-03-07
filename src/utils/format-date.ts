import { DateTime } from "luxon";

export const formatDate = (
  date: Date | string,
  format: string = "dd-MM-yyyy"
): string => {
  if (format === "") {
    return "Invalid date format"
  }
  const dateTime =
    typeof date === "string"
      ? DateTime.fromISO(date)
      : DateTime.fromJSDate(date);
  return dateTime.toFormat(format);
};

export const getUtcMilliSecond = (
  userDate: Date | string,
  type?: "start" | "end"
) => {
  let date = userDate;
  if (typeof date === "object") {
    date = (userDate as Date).toISOString();
  }

  if (type === "start") {
    return DateTime.fromISO(date).startOf("day").toUTC().toMillis();
  } else if (type === "end") {
    return DateTime.fromISO(date).endOf("day").toUTC().toMillis();
  }

  return DateTime.fromISO(date).toUTC().toMillis();
};

