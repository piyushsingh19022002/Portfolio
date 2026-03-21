"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import cloud from "@/assets/certificates/cloud-computing.png";
import dsa from "@/assets/certificates/dsa.png";
import flutter from "@/assets/certificates/flutter.png";
import genai from "@/assets/certificates/gen-ai.png";
import laravel from "@/assets/certificates/laravel.png";
import mern from "@/assets/certificates/mern.png";
import networking from "@/assets/certificates/networking.png";
import prompt from "@/assets/certificates/prompt-engineering.png";

const certifications = [
  { 
    name: "Cloud Computing", 
    provider: "NPTEL – IIT Kharagpur",
    date: "2025",
    image: cloud
  },
  { 
    name: "Networking Fundamentals", 
    provider: "Google",
    date: "2024",
    image: networking
  },
  { 
    name: "MERN Stack", 
    provider: "PW Skills",
    date: "2025",
    image: mern
  },
  { 
    name: "Data Structures & Algorithms", 
    provider: "PW Skills",
    date: "2026",
    image: dsa
  },
  { 
    name: "Flutter Development", 
    provider: "Cipher Schools",
    date: "2025",
    image: flutter
  },
  { 
    name: "Laravel Backend", 
    provider: "Udemy",
    date: "2026",
    image: laravel
  },
  { 
    name: "Generative AI", 
    provider: "Infosys",
    date: "2025",
    image: genai
  },
  { 
    name: "Prompt Engineering", 
    provider: "Infosys",
    date: "2025",
    image: prompt
  },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(0);

  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-6xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight uppercase"
        >
          Certifications
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-gray-400 dark:bg-gray-600 mt-4 rounded-full origin-center" 
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: List of Certifications (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-2">
          {certifications.map((cert, index) => {
            const isActive = activeCert === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setActiveCert(index)}
                className={`group p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                  isActive 
                    ? "bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                    : "bg-transparent border-transparent hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/5 dark:hover:border-white/5"
                }`}
              >
                <div className="flex flex-col">
                  <span className={`font-semibold md:text-lg transition-colors duration-300 ${isActive ? "text-slate-800 dark:text-white" : "text-slate-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-200"}`}>
                    {cert.name}
                  </span>
                  <span className={`text-xs mt-1 transition-colors duration-300 ${isActive ? "text-slate-500 dark:text-gray-400" : "text-gray-400 dark:text-gray-600"}`}>
                    Tap to view
                  </span>
                </div>
                
                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Interactive Preview Card (60%) */}
        <div className="w-full lg:w-[60%] sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCert}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full bg-white dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 p-6 flex flex-col gap-6 shadow-[0_0_50px_rgba(0,0,0,0.05)] dark:shadow-[0_0_50px_rgba(255,255,255,0.02)] group"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-black/5 dark:border-white/5 bg-gray-100 dark:bg-[#050505] flex items-center justify-center">
                <Image 
                  src={certifications[activeCert].image} 
                  alt={certifications[activeCert].name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                  priority
                />
                
                {/* Dark/Light overlay fade at bottom for text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0a0a0a]/90 via-white/20 dark:via-[#0a0a0a]/20 to-transparent pointer-events-none" />
                
                {/* Centered large placeholder text if image is completely dark/missing */}
                <span className="absolute text-black/10 dark:text-white/10 font-bold text-4xl uppercase tracking-widest -rotate-12 pointer-events-none">
                  {certifications[activeCert].provider}
                </span>
              </div>
              
              {/* Metadata */}
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-wide">
                  {certifications[activeCert].name}
                </h3>
                <div className="flex items-center justify-between text-slate-600 dark:text-gray-400 mt-2 border-t border-black/10 dark:border-white/10 pt-4">
                  <span className="font-semibold text-slate-800 dark:text-gray-300 uppercase tracking-wider text-sm">
                    {certifications[activeCert].provider}
                  </span>
                  <span className="font-mono text-sm bg-black/5 dark:bg-white/10 px-3 py-1 rounded">
                    {certifications[activeCert].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
