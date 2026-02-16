import { render, screen, fireEvent } from "@testing-library/react";
import MediaModal from "../MediaModal";

describe("MediaModal", () => {
  const onClose = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
    document.body.style.overflow = "";
  });

  it("renders an image when type is image", () => {
    render(
      <MediaModal
        media={{ type: "image", src: "/test.png" }}
        alt="Test image"
        onClose={onClose}
      />,
    );
    const img = screen.getByAltText("Test image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test.png");
  });

  it("renders a video when type is video", () => {
    const { container } = render(
      <MediaModal
        media={{ type: "video", src: "/test.mp4" }}
        onClose={onClose}
      />,
    );
    const video = container.querySelector("video");
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("src", "/test.mp4");
  });

  it("closes on Escape key", () => {
    render(
      <MediaModal
        media={{ type: "image", src: "/test.png" }}
        onClose={onClose}
      />,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes on backdrop click", () => {
    const { container } = render(
      <MediaModal
        media={{ type: "image", src: "/test.png" }}
        onClose={onClose}
      />,
    );
    // Click the backdrop (outermost div)
    fireEvent.click(container.firstChild!);
    expect(onClose).toHaveBeenCalled();
  });

  it("does not close when clicking content area", () => {
    render(
      <MediaModal
        media={{ type: "image", src: "/test.png" }}
        alt="Test"
        onClose={onClose}
      />,
    );
    fireEvent.click(screen.getByAltText("Test"));
    // onClick stopPropagation prevents onClose
    expect(onClose).not.toHaveBeenCalled();
  });

  it("sets body overflow to hidden on mount", () => {
    render(
      <MediaModal
        media={{ type: "image", src: "/test.png" }}
        onClose={onClose}
      />,
    );
    expect(document.body.style.overflow).toBe("hidden");
  });
});
