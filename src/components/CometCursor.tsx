"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 12;

// Use simple CSS overrides for stroke mechanics instead of JS arrays

export default function CometCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    // Gracefully fallback on touch interfaces
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    }
    
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const points = Array.from({ length: TRAIL_LENGTH }, () => ({ x: mouseX, y: mouseY }));

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;

    const render = () => {
      // 1. Sync actual head element
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // 2. Compute smooth SVG tail trajectory
      let currentX = mouseX;
      let currentY = mouseY;

      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const point = points[i];
        
        // Kinematic fluid interpolation pulls points toward the cursor smoothly
        point.x += (currentX - point.x) * 0.45;
        point.y += (currentY - point.y) * 0.45;
        
        currentX = point.x;
        currentY = point.y;

        // Apply path updates directly to SVG line segments
        if (i > 0) {
          const prevPoint = points[i - 1];
          const line = linesRef.current[i - 1];
          if (line) {
            line.setAttribute("x1", prevPoint.x.toString());
            line.setAttribute("y1", prevPoint.y.toString());
            line.setAttribute("x2", point.x.toString());
            line.setAttribute("y2", point.y.toString());
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-normal dark:mix-blend-screen">
      {/* SVG Continuous Trail */}
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_4px_rgba(147,197,253,0.4)]"
      >
        {Array.from({ length: TRAIL_LENGTH - 1 }).map((_, i) => (
          <line
            key={i}
            ref={(el) => {
              if (el) linesRef.current[i] = el;
            }}
            className="stroke-black dark:stroke-white transition-colors duration-300"
            strokeWidth={6} // Matches head dimension exactly
            strokeLinecap="round" // Creates a fluid seamless hose curve via overlapping rounded joints
            opacity={Math.max(0, 0.9 - i / (TRAIL_LENGTH - 1))} // Progressive fade out gradient
          />
        ))}
      </svg>

      {/* Comet Head */}
      <div
        ref={cursorRef}
        className="absolute left-0 top-0 w-[6px] h-[6px] rounded-full bg-black dark:bg-white shadow-[0_0_12px_4px_rgba(0,0,0,0.5)] dark:shadow-[0_0_12px_4px_rgba(255,255,255,0.9)] transition-colors duration-300"
        style={{ marginLeft: "-3px", marginTop: "-3px", transform: "translate(-100px, -100px)" }}
      />
    </div>
  );
}
