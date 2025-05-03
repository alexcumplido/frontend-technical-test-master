import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputError } from "./InputError";

describe("InputError component", () => {
  it("renders the error message with the correct text", () => {
    render(<InputError text="Error message" className="error-class" />);
    const errorElement = screen.getByText("Error message");
    expect(errorElement).toBeInTheDocument();
  });

  it("applies the correct className", () => {
    render(<InputError text="Error message" className="error-class" />);
    const errorElement = screen.getByText("Error message");
    expect(errorElement).toHaveClass("error-class");
  });
});