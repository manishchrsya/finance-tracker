import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";
import "@testing-library/jest-dom";


describe("Button Component", () => {
    test("renders the button with children text", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    test("triggers onClick when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={ handleClick } > Click Me </Button>);
        fireEvent.click(screen.getByText("Click Me"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("has disabled styles when disabled", () => {
        render(<Button disabled > Click Me </Button>);
        const button = screen.getByText("Click Me");
        expect(button).toHaveStyle("cursor: not-allowed");
        expect(button).toHaveStyle("opacity: 0.3");
    });
});