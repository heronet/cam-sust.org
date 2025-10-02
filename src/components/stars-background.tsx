"use client";
import { useState, useEffect } from "react";

interface StarProps {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
}

// Animated stars background
const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    const generateStars = (): void => {
      const newStars: StarProps[] = [];
      for (let i = 0; i < 80; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 4 + 3,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-gray-400 rounded-full animate-pulse opacity-30"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
export default StarsBackground;
