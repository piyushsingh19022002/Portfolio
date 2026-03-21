"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() < 0.95 ? Math.random() * 2 + 1 : Math.random() * 3 + 3, // mostly small, some larger glowy ones
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full ${star.size > 3 ? 'bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]' : 'bg-white/60'}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: star.size > 3 ? [0.4, 1, 0.4] : [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Subtle constellation lines via static SVG (optional enhancement to match the screenshot bottom-left) */}
      <svg className="absolute w-full h-full opacity-10">
        <line x1="10%" y1="80%" x2="20%" y2="70%" stroke="white" strokeWidth="1" />
        <line x1="20%" y1="70%" x2="15%" y2="90%" stroke="white" strokeWidth="1" />
        <line x1="20%" y1="70%" x2="30%" y2="85%" stroke="white" strokeWidth="1" />
        <line x1="80%" y1="20%" x2="90%" y2="30%" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  );
}
