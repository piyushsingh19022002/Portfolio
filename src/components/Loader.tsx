"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  useEffect(() => {
    // Reveal (0.8s) + Stagger + Hold (1.5s) = ~2.5s display time before exiting
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                transition: { duration: 1, ease: "easeOut", staggerChildren: 0.4 } 
              }
            }}
            className="flex flex-col items-center text-center"
          >
            {/* Main Heading */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide"
              style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}
            >
              Piyush Singh
            </motion.h1>
            
            {/* Subheading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-base md:text-xl text-[#cbd5e1] font-medium mt-5 tracking-[0.2em] uppercase"
            >
              Full Stack Web Developer
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
