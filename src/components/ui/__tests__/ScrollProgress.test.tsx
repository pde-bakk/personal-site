import { render } from "@testing-library/react";
import ScrollProgress from "../ScrollProgress";

describe("ScrollProgress", () => {
  it("renders progress bar", () => {
    const { container } = render(<ScrollProgress />);
    const bar = container.querySelector(".bg-gradient-to-r");
    expect(bar).toBeInTheDocument();
  });

  it("starts with 0% width", () => {
    const { container } = render(<ScrollProgress />);
    const bar = container.querySelector(".bg-gradient-to-r") as HTMLElement;
    expect(bar.style.width).toBe("0%");
  });
});
