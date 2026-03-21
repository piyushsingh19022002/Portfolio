"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import avatarImg from "@/assets/avatar.png";
const typewriterPhrases = [
  "I BUILD SCALABLE WEB APPLICATIONS",
  "I DEPLOY & MANAGE SYSTEMS",
  "I DESIGN MODERN BACKENDS",
  "I WORK WITH CLOUD & DEVOPS",
  "I TURN IDEAS INTO PRODUCTS"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(65);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const currentPhraseIndex = loopNum % typewriterPhrases.length;
      const fullText = typewriterPhrases[currentPhraseIndex];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Handle pause states and cycle
      if (!isDeleting && text === fullText) {
        // Pause heavily at the end of the built sentence (1000ms delay)
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        // Sentences fully deleted: move to the next phrase loop and pause
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(65);
        timer = setTimeout(handleType, 400); // 400ms breather before typing the next string
      } else {
        // Adjust backspace deletion speed explicitly to be faster than natural typing
        // Typing speed: ~65ms per character. Deleting speed: ~40ms.
        const nextSpeed = isDeleting ? 40 : 65;
        setTypingSpeed(nextSpeed);
        timer = setTimeout(handleType, nextSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Clean sequential rendering
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
        className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >
        {/* Dynamic Space Avatar Container */}
        <motion.div 
          variants={itemVariants}
          className="relative flex items-center justify-center mb-10"
        >
          {/* Subtle Outer Boundary Ring */}
          <div className="absolute inset-[-15px] rounded-full border border-black/10 dark:border-white/10" />

          {/* Rotating Comet Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-[-15px] rounded-full"
          >
            {/* Comet Tail (Conic Gradient Masked into a stroke) */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 90deg, transparent 60%, rgba(255,255,255,0.4) 100%)",
                maskImage: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1px))",
                WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1px))"
              }}
            />
            {/* Glowing Comet Head */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-black dark:bg-white rounded-full shadow-[0_0_12px_4px_rgba(0,0,0,0.5)] dark:shadow-[0_0_12px_4px_rgba(255,255,255,0.8)]" />
          </motion.div>

          {/* Focal Avatar */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gray-200 border border-black/10 dark:border-white/20 overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex-shrink-0 z-10">
            {/* Custom 3D Avatar Static Rendering */}
            <Image 
              src={avatarImg} 
              alt="Piyush Singh Avatar" 
              className="w-full h-full object-cover object-top rounded-full pointer-events-none"
              priority
            />
          </div>
        </motion.div>

        {/* Line 1: Small greeting */}
        <motion.h2 
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium tracking-widest mb-4 uppercase"
        >
          HI, MY NAME IS
        </motion.h2>

        {/* Line 2: Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-black dark:text-white mb-6 uppercase tracking-tight leading-none drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] w-full"
        >
          PIYUSH SINGH
        </motion.h1>

        {/* Line 3: Description with Typewriter Cycle Engine */}
        <motion.div 
          variants={itemVariants}
          className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12 font-medium tracking-widest uppercase flex items-center justify-center min-h-[4.5rem] sm:min-h-[3rem] px-4"
        >
          <span className="text-center">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="ml-1 font-light text-black dark:text-white inline-block"
          >
            |
          </motion.span>
        </motion.div>

        {/* Buttons Row */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mt-4"
        >
          {/* Primary Action */}
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20 px-8 py-3.5 rounded-full font-bold shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>

          {/* Secondary Action */}
          <motion.a 
            href="https://drive.google.com/uc?export=download&id=127jFNWT8FIsEybxOoz97-neYv45vIaLO"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-gray-700 dark:text-gray-300 border border-black/10 dark:border-white/20 px-8 py-3.5 rounded-full font-bold hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            Download Resume
            <Download size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
