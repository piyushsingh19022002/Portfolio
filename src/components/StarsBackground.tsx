"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

export default function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const colors = ['#ffffff', '#E0E0E0', '#93c5fd'];
      const newStars: Star[] = [];
      const totalStars = Math.floor(Math.random() * 21) + 40; // 40-60 stars
      
      let highlightCount = 0;

      for (let i = 0; i < totalStars; i++) {
        let size = 1; // Small by default
        const rand = Math.random();
        
        if (rand > 0.95 && highlightCount < 3) {
          size = Math.floor(Math.random() * 2) + 3; // 3 or 4 px
          highlightCount++;
        } else if (rand > 0.7) {
          size = 2; // Medium px
        }

        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2, // 2-5 seconds
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none bg-transparent">
      {/* Background Deep Gradients */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
      
      {/* Optional subtle soft blue/white tone layer at bottom left to blend with scroll */}
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] hidden dark:block bg-blue-400/5 blur-[120px] rounded-full mix-blend-screen" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full hidden dark:block"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: star.size > 2 ? `0 0 8px rgba(255,255,255,0.8)` : 'none',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
