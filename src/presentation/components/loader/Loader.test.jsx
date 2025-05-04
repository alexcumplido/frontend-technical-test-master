import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Loader } from "./Loader";

describe("Loader component", () => {
  it("should render the loader with the provided className", () => {
    const { container } = render(<Loader className="test-class" />);

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass("test-class");
  });

  it("should render a circle element inside the SVG", () => {
    const { container } = render(<Loader className="test-class" />);

    const circleElement = container.querySelector("circle");
    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toHaveAttribute("cx", "50");
    expect(circleElement).toHaveAttribute("cy", "50");
    expect(circleElement).toHaveAttribute("r", "30");
    expect(circleElement).toHaveAttribute("fill", "transparent");
  });
});
