import React from "react";
import { useEffect } from "react";

interface MediaModalProps {
  media: { type: "image" | "video"; src: string };
  alt?: string;
  onClose: () => void;
}

const MediaModal = ({ media, alt, onClose }: MediaModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none transition-colors"
        aria-label="Close"
      >
        &times;
      </button>
      <div
        className="max-w-4xl max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={alt || "Project media"}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        ) : (
          <video
            src={media.src}
            controls
            autoPlay
            className="max-w-full max-h-[85vh] rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
