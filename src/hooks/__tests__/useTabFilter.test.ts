import { renderHook, act } from "@testing-library/react";
import { useTabFilter } from "../useTabFilter";
import type { Tab } from "../useTabFilter";

const tabs: Tab[] = [
  { key: "work", label: "Work" },
  { key: "education", label: "Education" },
];

const items = [
  { category: "work", name: "Job A" },
  { category: "education", name: "School B" },
  { category: "work", name: "Job C" },
];

describe("useTabFilter", () => {
  it("defaults to first tab", () => {
    const { result } = renderHook(() => useTabFilter(items, tabs));
    expect(result.current.activeKey).toBe("work");
  });

  it("filters items by active tab", () => {
    const { result } = renderHook(() => useTabFilter(items, tabs));
    expect(result.current.filteredItems).toHaveLength(2);
    expect(
      result.current.filteredItems.every((i) => i.category === "work"),
    ).toBe(true);
  });

  it("switches tab and re-filters", () => {
    const { result } = renderHook(() => useTabFilter(items, tabs));
    act(() => result.current.setActiveKey("education"));
    expect(result.current.activeKey).toBe("education");
    expect(result.current.filteredItems).toHaveLength(1);
    expect(result.current.filteredItems[0].name).toBe("School B");
  });

  it("returns empty array when no items match", () => {
    const { result } = renderHook(() =>
      useTabFilter(items, [{ key: "none", label: "None" }]),
    );
    expect(result.current.filteredItems).toHaveLength(0);
  });
});
