import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./Table";

describe("List component", () => {
  it("renders the table with file extensions and their counts", () => {
    const elements = { ".js": 5, ".css": 3 };
    const className = { table: "table-class", tableData: "table-data-class", tableDataContainer: "table-data-container-class" };

    render(<List elements={elements} className={className} />);

    const jsRow = screen.getByText(".js");
    const cssRow = screen.getByText(".css");
    const jsCount = screen.getByText("5");
    const cssCount = screen.getByText("3");

    expect(jsRow).toBeInTheDocument();
    expect(cssRow).toBeInTheDocument();
    expect(jsCount).toBeInTheDocument();
    expect(cssCount).toBeInTheDocument();
  });

  it("renders 'No results' when there are no elements", () => {
    const elements = {};
    const className = { table: "table-class", tableData: "table-data-class", tableDataContainer: "table-data-container-class" };

    render(<List elements={elements} className={className} />);

    const noResults = screen.getByText("No results");
    expect(noResults).toBeInTheDocument();
  });
});