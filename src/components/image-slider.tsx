"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  section: string;
  autoSlide?: boolean;
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  section,
  autoSlide = true,
  interval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlideInterval);
  }, [autoSlide, interval, images.length]);

  const nextImage = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm border border-gray-800/50">
        <img
          src={images[currentIndex]}
          alt={`${section} activity`}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105 opacity-90"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-gray-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-700/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-gray-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-700/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-gray-400" : "bg-gray-600/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
