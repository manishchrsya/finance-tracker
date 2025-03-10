// Here we are mocking the `matchMedia` function so that it can be available in the Node.js environment.
// `window.matchMedia` is normally available in browsers, but Jest runs in a Node.js environment where it is not defined.
import "../../jest.setup"

describe("window.matchMedia mock tests", () => {

  test("should detect mobile screen", () => {
    // Overriding `window.matchMedia` to simulate a mobile screen (max-width: 450px).
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true, // Simulates a mobile screen where the condition is met
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const mediaQuery = window.matchMedia("(max-width: 450px)"); // Query for mobile screen

    // Expectation: Since we mocked `matches: true`, the test should pass.
    expect(mediaQuery.matches).toBe(true); // ✅ Test passes!
  });

  test("should detect non-mobile screen (falsy condition)", () => {
    // Overriding `window.matchMedia` again to simulate a non-mobile screen (desktop view).
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false, // Simulates a screen wider than 450px
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const mediaQuery = window.matchMedia("(max-width: 450px)"); // Query for mobile screen

    // Expectation: Since we mocked `matches: false`, the test should pass.
    expect(mediaQuery.matches).toBe(false); // ✅ Test passes!
  });

});

export { }