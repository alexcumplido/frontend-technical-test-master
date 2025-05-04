import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders the button with the correct text", () => {
    render(
      <Button type="button" className="test-class">
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the correct className", () => {
    render(
      <Button type="button" className="test-class">
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveClass("test-class");
  });

  it("sets the correct type attribute", () => {
    render(
      <Button type="submit" className="test-class">
        Submit
      </Button>,
    );
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
