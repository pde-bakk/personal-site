import { render, screen } from "@testing-library/react";
import SocialLinks from "../SocialLinks";

describe("SocialLinks", () => {
  it("renders links for all social platforms", () => {
    render(<SocialLinks />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("sets target=_blank on external links", () => {
    render(<SocialLinks />);
    const github = screen.getByLabelText("GitHub");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not set target=_blank on mailto links", () => {
    render(<SocialLinks />);
    const email = screen.getByLabelText("Email");
    expect(email).not.toHaveAttribute("target");
  });

  it("shows labels when showLabels is true", () => {
    render(<SocialLinks showLabels />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("hides labels by default", () => {
    render(<SocialLinks />);
    expect(screen.queryByText("GitHub")).not.toBeInTheDocument();
  });
});
