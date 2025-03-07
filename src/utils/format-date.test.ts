import { DateTime } from "luxon";
import { formatDate, getUtcMilliSecond } from "./format-date"

// test cases for the formatDate function

describe("formatDate function", () => {
    it("should format a Date object correctly", () => {
        const date = new Date(2023, 4, 15);
        expect(formatDate(date, "yyyy-MM-dd")).toBe("2023-05-15");
    });

    it("should format an ISO string correctly", () => {
        const dateString = "2023-05-15T00:00:00.000Z";
        expect(formatDate(dateString, "yyyy-MM-dd")).toBe("2023-05-15");
    });

    it("should handle leap years correctly", () => {
        const date = new Date(2024, 1, 29); // Feb 29, 2024
        expect(formatDate(date, "yyyy-MM-dd")).toBe("2024-02-29");
    });

    it("should handle different timezones correctly", () => {
        const dateString = "2023-05-15T12:00:00+05:30"; // India Standard Time
        expect(formatDate(dateString, "yyyy-MM-dd")).toBe("2023-05-15");
    });

    it("should handle a Date object at midnight", () => {
        const date = new Date("2023-05-15T00:00:00");
        expect(formatDate(date, "yyyy-MM-dd HH:mm:ss")).toBe("2023-05-15 00:00:00");
    });

    it("should handle a Date object at the end of the day", () => {
        const date = new Date("2023-05-15T23:59:59");
        expect(formatDate(date, "yyyy-MM-dd HH:mm:ss")).toBe("2023-05-15 23:59:59");
    });

    it("should throw an error if passed an empty string", () => {
        const date = new Date("2023-05-15T23:59:59");
        expect(formatDate(date, "")).toBe("Invalid date format");
    });

    it("should correctly format dates with different patterns", () => {
        const date = new Date(2023, 4, 15);
        expect(formatDate(date, "MMM dd, yyyy")).toBe("May 15, 2023");
        expect(formatDate(date, "MM/dd/yyyy")).toBe("05/15/2023");
        expect(formatDate(date, "EEEE, MMMM dd, yyyy")).toBe("Monday, May 15, 2023");
    });

    it("should handle future dates correctly", () => {
        const date = new Date(2099, 11, 31);
        expect(formatDate(date, "yyyy-MM-dd")).toBe("2099-12-31");
    });
});


describe("getUtcMilliSecond function", () => {
    it("should return UTC milliseconds for a Date object", () => {
        const date = new Date("2023-05-15T12:30:00Z");
        expect(getUtcMilliSecond(date)).toBe(date.getTime());
    });

    it("should return the start of the day in UTC when type is 'start'", () => {
        const date = "2023-05-15T12:30:00Z";
        expect(getUtcMilliSecond(date, "start")).toBe(
            DateTime.fromISO(date).startOf("day").toUTC().toMillis()
        );
    });

    it("should return the end of the day in UTC when type is 'end'", () => {
        const date = "2023-05-15T12:30:00Z";
        expect(getUtcMilliSecond(date, "end")).toBe(
            DateTime.fromISO(date).endOf("day").toUTC().toMillis()
        );
    });

    it("should return the correct UTC milliseconds for a future date", () => {
        const futureDate = "2099-12-31T23:59:59Z";
        expect(getUtcMilliSecond(futureDate)).toBe(DateTime.fromISO(futureDate).toUTC().toMillis());
    });

});
