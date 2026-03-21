"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
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
          className="flex flex-col space-y-6 max-w-[550px] mx-auto lg:mx-0"
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 uppercase"
          >
            About <span className="bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <motion.div variants={textVariants} className="space-y-5 text-[#cbd5e1] text-base leading-relaxed font-light">
            <p>
              I am a Computer Science undergraduate (2023–2027) with a strong passion for building scalable and efficient web applications using the MERN stack. As a self-driven developer, I continuously explore new technologies to improve my skills.
            </p>
            <p>
              I have built real-world projects like a multilingual language learning platform and a community-driven chatbot system, focusing on performance optimization, user engagement, and backend scalability.
            </p>
            <p>
              Along with development, I am actively learning DevOps and Cloud technologies to understand how applications are deployed and scaled in production environments.
            </p>
            <p>
              I am currently seeking opportunities as a Full Stack Developer while expanding my expertise in DevOps and Cloud.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={textVariants} className="flex gap-5 pt-4">
            <a href="https://github.com/PiyushSengar" target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/piyushsengar" target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="p-3.5 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(156,163,175,0.3)] transition-all transform hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Illustration */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          >
            {/* Minimal Developer Illustration Placeholder */}
            {/* Replaced with a stylized glowing 3D-like box representing code */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-600/20 to-blue-500/20 rounded-full blur-[60px]" />
            <div className="absolute inset-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl -rotate-6 shadow-2xl flex flex-col overflow-hidden">
               {/* Faux Editor Window */}
               <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
               </div>
               <div className="p-6 flex-1 flex flex-col gap-3 opacity-60">
                 <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-gray-500/50 to-transparent" />
                 <div className="h-3 w-1/2 rounded-full bg-blue-500/30" />
                 <div className="h-3 w-5/6 rounded-full bg-white/10 mt-4" />
                 <div className="h-3 w-2/3 rounded-full bg-white/10" />
                 <div className="h-3 w-4/5 rounded-full bg-white/10" />
               </div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
