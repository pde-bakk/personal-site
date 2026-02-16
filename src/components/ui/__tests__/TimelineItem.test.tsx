import { render, screen } from "@testing-library/react";
import TimelineItem from "../TimelineItem";

const props = {
  company: "Acme Corp",
  role: "Engineer",
  dates: "2023 - Present",
  bullets: ["Built features", "Improved performance"],
  tech: ["React", "Node.js"],
};

describe("TimelineItem", () => {
  it("renders company name", () => {
    render(<TimelineItem {...props} />);
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
  });

  it("renders role", () => {
    render(<TimelineItem {...props} />);
    expect(screen.getByText("Engineer")).toBeInTheDocument();
  });

  it("renders dates", () => {
    render(<TimelineItem {...props} />);
    expect(screen.getByText("2023 - Present")).toBeInTheDocument();
  });

  it("renders all bullet points", () => {
    render(<TimelineItem {...props} />);
    expect(screen.getByText("Built features")).toBeInTheDocument();
    expect(screen.getByText("Improved performance")).toBeInTheDocument();
  });

  it("renders tech pills", () => {
    render(<TimelineItem {...props} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });
});
