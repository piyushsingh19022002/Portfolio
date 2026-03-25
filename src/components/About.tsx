"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import myImage from "@/assets/myimage.png";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

 const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

  const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

  const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

  return (
    <section id="about" className="min-h-screen py-24 flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column: Text */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-6 max-w-[550px] mx-auto lg:mx-0 order-2 lg:order-1"
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-2 uppercase"
          >
            About <span className="bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <motion.div variants={textVariants} className="space-y-5 text-gray-700 dark:text-gray-300 text-base leading-relaxed font-light max-w-3xl">
            <p>
              I’m Piyush Singh — a full-stack developer who enjoys building systems that are not just functional, but meaningful. I don’t see development as just writing code; I see it as designing solutions that can handle real users, real data, and real-world challenges.
            </p>
            <p>
              I didn’t start with clarity — I started with confusion. Errors I couldn’t understand, code that wouldn’t run, and problems that felt impossible at the time. But over time, something changed. Every bug I fixed improved not just my code, but the way I think. What began as curiosity turned into consistency, and consistency turned into confidence. Now, I approach problems with a mindset of breaking them down, understanding them deeply, and solving them the right way.
            </p>
            <p>
              Good code solves problems. Great systems prevent them. I believe in writing code that is clean, maintainable, and built for the long run. Because in real-world development, it’s not about how fast something works — it’s about how well it holds up over time.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={textVariants} className="flex gap-5 pt-4">
            <a href="https://github.com/piyushsingh19022002" target="_blank" rel="noreferrer" className="p-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/piyushsingh19/" target="_blank" rel="noreferrer" className="p-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="mailto:piyushsenger205@gmail.com" className="p-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Personal Image */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center lg:justify-end order-1 lg:order-2 w-full"
        >
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px]"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full blur-[80px]" />
            
            {/* Floating Image Container with hover effects */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              initial={{ rotate: 3 }}
              animate={{ rotate: 3 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const}}
              className="relative w-full h-full rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden z-10 bg-black/5 dark:bg-white/5"
            >
              <Image 
                src={myImage}
                alt="Piyush Singh"
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
