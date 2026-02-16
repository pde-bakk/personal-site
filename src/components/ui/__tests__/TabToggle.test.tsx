import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabToggle from "../TabToggle";

const tabs = [
  { key: "work", label: "Work" },
  { key: "edu", label: "Education" },
];

describe("TabToggle", () => {
  it("renders all tabs", () => {
    render(<TabToggle tabs={tabs} activeKey="work" onTabChange={() => {}} />);
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("applies active styling to selected tab", () => {
    render(<TabToggle tabs={tabs} activeKey="work" onTabChange={() => {}} />);
    const workBtn = screen.getByText("Work");
    expect(workBtn).toHaveClass("text-white");
  });

  it("calls onTabChange when clicking a tab", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TabToggle tabs={tabs} activeKey="work" onTabChange={onChange} />);

    await user.click(screen.getByText("Education"));
    expect(onChange).toHaveBeenCalledWith("edu");
  });
});
