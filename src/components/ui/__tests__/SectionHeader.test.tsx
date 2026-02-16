import { render, screen } from "@testing-library/react";
import SectionHeader from "../SectionHeader";

describe("SectionHeader", () => {
  it("renders title in an h2 element", () => {
    render(<SectionHeader title="About Me" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("About Me");
  });

  it("renders gradient bar", () => {
    const { container } = render(<SectionHeader title="Test" />);
    const bar = container.querySelector(".bg-gradient-to-r");
    expect(bar).toBeInTheDocument();
  });
});
