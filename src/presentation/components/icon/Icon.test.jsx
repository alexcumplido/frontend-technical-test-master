import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Icon } from "./Icon";

describe("Icon component", () => {
  it("renders the icon with the correct src, sizes, and alt text", () => {
    render(<Icon src="test-src.svg" sizes={50} text="Test Icon" />);

    const imgElement = screen.getByAltText("Test Icon");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "test-src.svg");
    expect(imgElement).toHaveAttribute("width", "50");
    expect(imgElement).toHaveAttribute("height", "50");
  });
});