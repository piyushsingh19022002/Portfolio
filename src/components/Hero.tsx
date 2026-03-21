"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden pt-20" id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
      >
        {/* Small greeting */}
        <motion.h2 
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl font-medium tracking-wide mb-6"
        >
          Hey, I'm <span className="bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent font-bold">Piyush Singh</span> 🚀
        </motion.h2>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] leading-tight"
        >
          Full Stack Developer <span className="text-gray-400 font-light mx-2 hidden md:inline-block">|</span><br className="md:hidden" /> DevOps & Cloud Engineer
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-[#cbd5e1] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          I build scalable web applications and deploy them using modern DevOps practices.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-blue-600 text-white px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(75,85,99,0.4)] hover:shadow-[0_0_30px_rgba(75,85,99,0.7)] transition-all"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>

          {/* Secondary Button */}
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white border border-white/20 hover:border-white/40 transition-all bg-transparent backdrop-blur-sm"
          >
            Download Resume
            <Download size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle floating backdrop element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-br from-gray-600/20 to-blue-600/20 rounded-full blur-[100px] pointer-events-none z-0"
      />
    </section>
  );
}
