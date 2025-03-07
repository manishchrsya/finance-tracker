import { formatPrice } from "./format-price"

describe("testing the format price function", () => {

    test("testing for more than 2 numbers after the decimal", () => {
        expect(formatPrice(2.324)).toBe("$2.32")
    })

    test("testing for less than 2 numbers after the decimal", () => {
        expect(formatPrice(2.3)).toBe("$2.30")
    })

    test("testing for no numbers after the decimal", () => {
        expect(formatPrice(2)).toBe("$2.00")
    })

})