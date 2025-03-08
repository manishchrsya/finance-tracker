import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputField } from "./input";

describe("InputField Component", () => {
  test("renders the input field", () => {
    render(<InputField name="test-input" placeholder="" handleChange={() => ({})} value={""} type="text" id="" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("displays correct placeholder text", () => {
    render(<InputField name="test-input" placeholder="Enter text" handleChange={() => ({})} value={""} type="text" id="" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  test("handles input change event", () => {
    const handleChange = jest.fn();
    render(<InputField name="test-input" placeholder="" handleChange={handleChange} value={""} type="text" id="" />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("handles blur event", () => {
    const handleBlur = jest.fn();
    const handleChange = jest.fn();
    render(<InputField name="test-input" placeholder=""  onBlur={handleBlur} handleChange={handleChange} value={""} type="text" id="" />);
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test("applies autofocus when autoFocus is true", () => {
    render(<InputField name="test-input" placeholder="" autoFocus handleChange={() => ({})} value={""} type="text" id="" />);
    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  test("displays error message when isError is true", () => {
    render(<InputField errorMessage="Required field" isError={true} name="test-input" placeholder="" handleChange={() => ({})} value={""} type="text" id="" />);
    const element = screen.getByText("Required field")
    expect(element).toBeInTheDocument();
  });

  test("does not display error message when isError is false", () => {
    render(<InputField errorMessage="Required field" isError={false} name="test-input" placeholder="" handleChange={() => ({})} value={""} type="text" id="" />);
    expect(screen.queryByText("Required field")).not.toBeInTheDocument();
  });

});
