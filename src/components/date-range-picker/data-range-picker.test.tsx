import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DateRangePicker } from "./date-range-picker";
import { IDateRangePicker } from "./type";
import "@testing-library/jest-dom";

describe("DateRangePicker Component", () => {
  const mockHandleSubmit = jest.fn();
  const mockHandleChangeRange = jest.fn();
  const mockSetIsVisible = jest.fn();

  const mockProps: IDateRangePicker = {
    handleSubmit: mockHandleSubmit,
    range: [{ startDate: new Date(), endDate: new Date(), key: "selection" }],
    handleChangeRange: mockHandleChangeRange,
    rangeColor: ["#6359e9"],
    setIsVisible: mockSetIsVisible,
  };

  test("renders the DateRangePicker component", () => {
    render(<DateRangePicker {...mockProps} />);
    expect(screen.getByText("Apply")).toBeInTheDocument();
  });

  test("calls handleSubmit when clicking Apply button", () => {
    render(<DateRangePicker {...mockProps} />);
    fireEvent.click(screen.getByText("Apply"));
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  test("closes the picker when clicking outside", () => {
    render(<DateRangePicker {...mockProps} />);
    fireEvent.click(screen.getByTestId("date-range-overlay"));
    expect(mockSetIsVisible).toHaveBeenCalledWith(false);
  });
});
