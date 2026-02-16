import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../test/i18n-mock";

vi.mock("react-scroll", () => ({
  Link: ({
    children,
    to,
    onClick,
  }: {
    children: React.ReactNode;
    to: string;
    onClick?: () => void;
  }) => (
    <a href={`#${to}`} onClick={onClick}>
      {children}
    </a>
  ),
}));

vi.mock("../languageDropdown", () => ({
  default: () => <div data-testid="language-dropdown" />,
}));

// Import after mocks
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders brand text", () => {
    render(<Navbar />);
    expect(screen.getByText("PdB")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    // i18n mock returns keys as-is
    expect(screen.getAllByText("about").length).toBeGreaterThan(0);
    expect(screen.getAllByText("experience").length).toBeGreaterThan(0);
    expect(screen.getAllByText("projects").length).toBeGreaterThan(0);
    expect(screen.getAllByText("skills").length).toBeGreaterThan(0);
    expect(screen.getAllByText("contact").length).toBeGreaterThan(0);
  });

  it("toggles mobile menu on hamburger click", async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar />);

    // Mobile menu is initially hidden
    const mobileMenu = container.querySelector("ul.hidden");
    expect(mobileMenu).toBeInTheDocument();

    // Click hamburger (the md:hidden div)
    const hamburger = container.querySelector(".md\\:hidden.z-10");
    expect(hamburger).toBeInTheDocument();
    await user.click(hamburger!);

    // After click, the mobile menu should be visible (no 'hidden' class)
    const visibleMenu = container.querySelector("ul.absolute");
    expect(visibleMenu).toBeInTheDocument();
  });

  it("renders social links with target=_blank", () => {
    render(<Navbar />);
    const linkedIn = screen.getAllByLabelText("LinkedIn")[0];
    expect(linkedIn).toHaveAttribute("target", "_blank");
    const github = screen.getAllByLabelText("GitHub")[0];
    expect(github).toHaveAttribute("target", "_blank");
  });
});
