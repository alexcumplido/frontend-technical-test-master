import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders the button with the correct text", () => {
    render(
      <Button type="submit" className="test-class">
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("test-class");
  });

  it("applies the correct type attribute", () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
