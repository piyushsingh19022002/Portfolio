"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Sparkles } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 w-full overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-gradient-to-tr from-gray-900/10 to-blue-900/10 blur-[120px] pointer-events-none z-[-1]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[600px] w-full flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-500/30 bg-gray-500/10 text-gray-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(156,163,175,0.15)]">
            <Sparkles size={16} /> Open to Opportunities
          </span>
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight"
        >
          🚀 Let’s Build <span className="bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent">Something Great</span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-[#cbd5e1] text-base md:text-lg leading-relaxed font-light mb-12"
        >
          I enjoy working on impactful projects and collaborating with like-minded people. If you're looking for a developer who can build scalable applications and explore DevOps & Cloud solutions, I’d love to connect.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <a 
            href="mailto:piyushsenger205@gmail.com" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest hover:bg-gray-200 hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Mail size={18} /> Say Hello
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-10 mt-16 text-[#cbd5e1]">
          <a href="https://github.com/PiyushSengar" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-all group">
            <Github size={20} className="group-hover:text-gray-400 transition-colors" />
            <span className="font-medium text-sm tracking-wider uppercase relative">
              GitHub
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
          <a href="https://linkedin.com/in/piyushsengar" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-all group">
            <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
            <span className="font-medium text-sm tracking-wider uppercase relative">
              LinkedIn
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
