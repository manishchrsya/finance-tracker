// import { DateTime } from "luxon";

// function formatDate(
//   date: Date | string,
//   format: string = "dd-MM-yyyy"
// ): string {
//   const dateTime =
//     typeof date === "string"
//       ? DateTime.fromISO(date)
//       : DateTime.fromJSDate(date);
//   return dateTime.toFormat(format);
// }

// // Example usage
// const date = new Date();
// console.log(formatDate(date)); // Default format: 2024-07-02
// console.log(formatDate(date, "dd/MM/yyyy")); // 02/07/2024
// console.log(formatDate(date, "yyyy/MM/dd HH:mm:ss")); // 2024/07/02 14:35:48 (example time)
// console.log(formatDate("2024-07-02T14:35:48", "yyyy/MM/dd HH:mm:ss")); // 2024/07/02 14:35:48 (example time)

export const formatDate = () => {
  // this will format the date using luxon library
};
