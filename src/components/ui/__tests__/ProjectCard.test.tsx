import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectCard from "../ProjectCard";

const baseProps = {
  name: "Test Project",
  problem: "A problem",
  approach: "An approach",
  tech: ["React", "TypeScript"],
  link: "https://github.com/test/repo",
};

describe("ProjectCard", () => {
  it("renders project name", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders problem and approach", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByText("A problem")).toBeInTheDocument();
    expect(screen.getByText("An approach")).toBeInTheDocument();
  });

  it("renders tech pills", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("shows GitHub icon for github links", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByText("View Code")).toBeInTheDocument();
  });

  it("shows external link icon for non-github links", () => {
    render(<ProjectCard {...baseProps} link="https://example.com" />);
    expect(screen.getByText("Visit Site")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(<ProjectCard {...baseProps} icon="🚀" />);
    expect(screen.getByText("🚀")).toBeInTheDocument();
  });

  it("opens modal when media button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <ProjectCard
        {...baseProps}
        media={{ type: "image", src: "/test.png" }}
      />,
    );

    const mediaBtn = screen.getByLabelText("View project media");
    await user.click(mediaBtn);

    // Modal should now render with the close button
    expect(screen.getByLabelText("Close")).toBeInTheDocument();
  });
});
