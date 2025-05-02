import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders the header with the correct title and text", () => {
    render(<Header className="test-header" title="Test Title" text="Test Text" />);
    const titleElement = screen.getByText("Test Title");
    const textElement = screen.getByText("Test Text");

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(textElement.tagName).toBe("P");
  });

  it("applies the correct className", () => {
    render(<Header className="test-header" title="Test Title" text="Test Text" />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("test-header");
  });
});