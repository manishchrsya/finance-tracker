import { getFirstName } from "./format-name"

describe("testing for the getFirstname function", () => {

    test("when sent a fullname", () => {
        expect(getFirstName("Manish Kumar")).toBe("Manish")
    })

    test("When only sent the first name", () => {
        expect(getFirstName("Manish")).toBe("Manish")
    })

    test("When sent the empty string", () => {
        expect(getFirstName("")).toBe("")
    })

})
