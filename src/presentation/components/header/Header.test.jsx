import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders the header with the correct title and description", () => {
    const content = { title: "Test Title", description: "Test Description" };
    const className = { header: "header-class", title: "title-class" };

    render(<Header className={className} content={content} />);

    const titleElement = screen.getByText("Test Title");
    const descriptionElement = screen.getByText("Test Description");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("title-class");
    expect(descriptionElement).toBeInTheDocument();
  });

  it("applies the correct header class", () => {
    const content = { title: "Test Title", description: "Test Description" };
    const className = { header: "header-class", title: "title-class" };

    render(<Header className={className} content={content} />);

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("header-class");
  });
});