import { render, screen } from "@testing-library/react";
import { Loader } from "./loader";
import "@testing-library/jest-dom";

describe("Loader Component", () => {
  test("renders the Loader component", () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });

  test("applies default props", () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toHaveStyle("width: 80px");
    expect(loaderElement).toHaveStyle("height: 80px");
  });

  test("accepts custom props", () => {
    render(<Loader color="red" size={100} />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toHaveStyle("width: 100px");
    expect(loaderElement).toHaveStyle("height: 100px");
  });

});
