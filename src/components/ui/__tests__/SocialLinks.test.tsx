import { render, screen } from "@testing-library/react";
import SocialLinks from "../SocialLinks";

describe("SocialLinks", () => {
  it("renders links for all social platforms", () => {
    render(<SocialLinks />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.queryByLabelText("Email")).not.toBeInTheDocument();
  });

  it("sets target=_blank on external links", () => {
    render(<SocialLinks />);
    const github = screen.getByLabelText("GitHub");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("shows labels when showLabels is true", () => {
    render(<SocialLinks showLabels />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("hides labels by default", () => {
    render(<SocialLinks />);
    expect(screen.queryByText("GitHub")).not.toBeInTheDocument();
  });
});
