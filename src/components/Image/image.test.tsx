import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageComponent } from "./image";
import "@testing-library/jest-dom";


describe("Image component Component", () => {
    test("Render th img tag in the dom", () => {
        render(<ImageComponent src="" alt="" role="img"/>);
        expect(screen.getByRole("img")).toBeInTheDocument()
    });
    
    test("if src is not passed in the image", () => {
        render(<ImageComponent style={{width: "100px", border: "1px solid black"}} src="" alt="" role="img"/>);
        expect(screen.getByRole("img")).toHaveStyle("width: 100px")
        expect(screen.getByRole("img")).toHaveStyle("border: 1px solid black")
    })

    test("Ensure that the alt is passed", () => {
        render(<ImageComponent src="" alt="user image" role="img"/>);
        expect(screen.getByRole("img")).toHaveAttribute("alt")
    })

});