import { renderHook, act } from "@testing-library/react";
import { useTypewriter } from "../useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts with empty text", () => {
    const { result } = renderHook(() =>
      useTypewriter({ words: ["Hello"], typeSpeed: 50 }),
    );
    expect(result.current).toBe("");
  });

  it("types characters one by one", () => {
    const { result } = renderHook(() =>
      useTypewriter({ words: ["Hi"], typeSpeed: 50, deleteSpeed: 50 }),
    );

    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("H");

    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("Hi");
  });

  it("deletes after delay and cycles to next word", () => {
    const { result } = renderHook(() =>
      useTypewriter({
        words: ["Hi", "Go"],
        typeSpeed: 50,
        deleteSpeed: 50,
        delayBetween: 100,
      }),
    );

    // Type "Hi"
    act(() => vi.advanceTimersByTime(50));
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("Hi");

    // Wait for delay, then delete
    act(() => vi.advanceTimersByTime(100));
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("H");

    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("");

    // Type "Go"
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("G");

    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("Go");
  });

  it("does nothing with empty words array", () => {
    const { result } = renderHook(() =>
      useTypewriter({ words: [], typeSpeed: 50 }),
    );
    act(() => vi.advanceTimersByTime(500));
    expect(result.current).toBe("");
  });
});
