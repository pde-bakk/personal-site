import { renderHook, act } from "@testing-library/react";
import { useTilt } from "../useTilt";

describe("useTilt", () => {
  it("returns ref and handlers", () => {
    const { result } = renderHook(() => useTilt());
    expect(result.current.ref).toBeDefined();
    expect(typeof result.current.handleMouseMove).toBe("function");
    expect(typeof result.current.handleMouseLeave).toBe("function");
  });

  it("applies transform on mouse move", () => {
    const div = document.createElement("div");
    div.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 100, height: 100 }) as DOMRect;

    const { result } = renderHook(() => useTilt<HTMLDivElement>());
    Object.defineProperty(result.current.ref, "current", {
      value: div,
      writable: true,
    });

    act(() => {
      result.current.handleMouseMove({
        clientX: 75,
        clientY: 25,
      } as React.MouseEvent);
    });

    expect(div.style.transform).toContain("perspective(600px)");
    expect(div.style.transform).toContain("rotateX");
    expect(div.style.transform).toContain("rotateY");
    expect(div.style.transform).toContain("scale3d(1.03, 1.03, 1.03)");
  });

  it("resets transform on mouse leave", () => {
    const div = document.createElement("div");
    const { result } = renderHook(() => useTilt<HTMLDivElement>());
    Object.defineProperty(result.current.ref, "current", {
      value: div,
      writable: true,
    });

    act(() => {
      result.current.handleMouseLeave();
    });

    expect(div.style.transform).toBe(
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
  });

  it("respects custom maxTilt parameter", () => {
    const div = document.createElement("div");
    div.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 100, height: 100 }) as DOMRect;

    const { result } = renderHook(() => useTilt<HTMLDivElement>(16));
    Object.defineProperty(result.current.ref, "current", {
      value: div,
      writable: true,
    });

    act(() => {
      // Mouse at center-right, center-top: x=100, y=0
      result.current.handleMouseMove({
        clientX: 100,
        clientY: 0,
      } as React.MouseEvent);
    });

    // rotateX = (0.5 - 0) * 16 = 8, rotateY = (1 - 0.5) * 16 = 8
    expect(div.style.transform).toContain("rotateX(8deg)");
    expect(div.style.transform).toContain("rotateY(8deg)");
  });
});
