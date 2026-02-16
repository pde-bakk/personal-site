import { render, screen } from "@testing-library/react";
import MetricCard from "../MetricCard";

describe("MetricCard", () => {
  it("renders value and label", () => {
    render(<MetricCard value="42" label="Projects" />);
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("applies stagger class based on index", () => {
    const { container } = render(
      <MetricCard value="10" label="Skills" index={2} />,
    );
    expect(container.firstChild).toHaveClass("stagger-3");
  });

  it("defaults to stagger-1 when no index provided", () => {
    const { container } = render(<MetricCard value="5" label="Years" />);
    expect(container.firstChild).toHaveClass("stagger-1");
  });
});
