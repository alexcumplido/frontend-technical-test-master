import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./List";

describe("List Component", () => {
  it("renders the table with file extensions and repetitions", () => {
    const elements = {
      ".js": 5,
      ".css": 3,
    };

    render(<List elements={elements} className="test-list" />);

    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();

    const jsRow = screen.getByText(".js");
    const cssRow = screen.getByText(".css");
    expect(jsRow).toBeInTheDocument();
    expect(cssRow).toBeInTheDocument();

    const jsCount = screen.getByText("5");
    const cssCount = screen.getByText("3");
    expect(jsCount).toBeInTheDocument();
    expect(cssCount).toBeInTheDocument();
  });

  it("renders 'No results' when elements are empty", () => {
    render(<List elements={{}} className="test-list" />);

    const noResults = screen.getByText("No results");
    expect(noResults).toBeInTheDocument();
  });
});