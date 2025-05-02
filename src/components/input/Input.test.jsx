import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders the input with the correct placeholder and value", () => {
    render(
      <Input
        value="Test Value"
        placeholder="Test Placeholder"
        onChange={() => {}}
        className="test-input"
      />
    );

    const inputElement = screen.getByPlaceholderText("Test Placeholder");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("Test Value");
    expect(inputElement).toHaveClass("test-input");
  });

  it("calls onChange when the value changes", () => {
    const handleChange = jest.fn();
    render(
      <Input
        value=""
        placeholder="Test Placeholder"
        onChange={handleChange}
        className="test-input"
      />
    );

    const inputElement = screen.getByPlaceholderText("Test Placeholder");
    fireEvent.change(inputElement, { target: { value: "New Value" } });
    expect(handleChange).toHaveBeenCalledWith("New Value");
  });
});