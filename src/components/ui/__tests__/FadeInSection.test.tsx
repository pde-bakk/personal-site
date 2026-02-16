import { render, screen } from "@testing-library/react";
import FadeInSection from "../FadeInSection";

describe("FadeInSection", () => {
  it("renders children", () => {
    render(<FadeInSection>Hello World</FadeInSection>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("has fade-in-section class", () => {
    const { container } = render(<FadeInSection>Content</FadeInSection>);
    expect(container.firstChild).toHaveClass("fade-in-section");
  });

  it("merges additional className", () => {
    const { container } = render(
      <FadeInSection className="extra-class">Content</FadeInSection>,
    );
    expect(container.firstChild).toHaveClass("fade-in-section");
    expect(container.firstChild).toHaveClass("extra-class");
  });

  it("becomes visible via IntersectionObserver mock", () => {
    const { container } = render(<FadeInSection>Content</FadeInSection>);
    // Setup mock auto-triggers intersection, so is-visible should be applied
    expect(container.firstChild).toHaveClass("is-visible");
  });
});
