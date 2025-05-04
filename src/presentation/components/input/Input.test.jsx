import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input component", () => {
  it("renders the input with the correct placeholder", () => {
    render(<Input value="" placeholder="Enter text" onChange={() => {}} className="input-class" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies the correct className", () => {
    render(<Input value="" placeholder="Enter text" onChange={() => {}} className="input-class" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveClass("input-class");
  });

  it("calls onChange when the value changes", () => {
    const handleChange = jest.fn();
    render(<Input value="" placeholder="Enter text" onChange={handleChange} className="input-class" />);
    const inputElement = screen.getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(handleChange).toHaveBeenCalledWith("New value");
  });
});