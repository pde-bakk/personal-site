import { render, screen } from "@testing-library/react";
import TechPill from "../TechPill";

describe("TechPill", () => {
  it("renders the label text", () => {
    render(<TechPill label="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    const { container } = render(<TechPill label="TypeScript" />);
    expect(container.querySelector("span")).toBeInTheDocument();
  });
});
