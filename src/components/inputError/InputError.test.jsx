import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputError } from "./InputError";

describe("InputError Component", () => {
  it("renders the error message when provided", () => {
    render(<InputError errorMessage="This is an error" />);
    const errorElement = screen.getByText("This is an error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass("error-message");
  });

  it("does not render anything when errorMessage is not provided", () => {
    const { container } = render(<InputError errorMessage="" />);
    expect(container).toBeEmptyDOMElement();
  });
});