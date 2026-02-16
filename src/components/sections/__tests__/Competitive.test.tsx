import { render, screen } from "@testing-library/react";
import Competitive from "../Competitive";
import { botChallenges } from "../../../data/competitive";

describe("Competitive", () => {
  it("renders the section heading", () => {
    render(<Competitive />);
    expect(
      screen.getByRole("heading", { name: /competitive programming/i }),
    ).toBeInTheDocument();
  });

  it("renders all bot challenges", () => {
    render(<Competitive />);
    for (const ch of botChallenges) {
      expect(screen.getByText(ch.title)).toBeInTheDocument();
    }
  });

  it("renders rankings with formatting", () => {
    render(<Competitive />);
    // Check that at least some rankings are visible
    const first = botChallenges[0];
    expect(
      screen.getByText(
        `#${first.ranking.toLocaleString()} / ${first.total.toLocaleString()}`,
      ),
    ).toBeInTheDocument();
  });

  it("renders percentiles", () => {
    render(<Competitive />);
    // Check for "Top X%" text pattern
    const topElements = screen.getAllByText(/^Top \d/);
    expect(topElements.length).toBeGreaterThan(0);
  });

  it("renders Codingame profile link", () => {
    render(<Competitive />);
    expect(screen.getByText("Codingame Profile")).toHaveAttribute(
      "href",
      expect.stringContaining("codingame.com"),
    );
  });
});
