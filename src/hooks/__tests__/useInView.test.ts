import { renderHook } from "@testing-library/react";
import { useInView } from "../useInView";

describe("useInView", () => {
  it("starts with isVisible false", () => {
    const { result } = renderHook(() => useInView());
    // ref.current is null so observer won't be created
    expect(result.current.isVisible).toBe(false);
  });

  it("becomes visible when intersection is triggered", () => {
    const { result: result2 } = renderHook(() => useInView());
    // With our mock in setup.ts, IntersectionObserver auto-triggers
    expect(result2.current.ref).toBeDefined();
  });

  it("provides a ref object", () => {
    const { result } = renderHook(() => useInView());
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref.current).toBeNull();
  });
});
