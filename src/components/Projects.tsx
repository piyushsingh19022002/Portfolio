"use client";

import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import vocalImg from "@/assets/vocal.png";
import cleanupImg from "@/assets/cleanup.png";
import waterImg from "@/assets/water.png";

// Native Typewriter Component triggered on scroll-view
function TerminalTypewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 15); // Ultra-fast terminal print speed

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <div ref={ref} className="font-mono text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-gray-300 whitespace-pre-wrap">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-2 sm:w-2.5 h-3 sm:h-4 bg-slate-500 dark:bg-gray-400 align-middle"
      />
    </div>
  );
}

export default function Projects() {
  const projectsData = [
    {
      title: "Vocal Platform",
      description: "A multilingual language learning platform with audio lessons, quizzes, and personalized learning.",
      features: ["JWT Authentication", "Audio playback system", "Gamification features"],
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/piyushsingh19022002/Vocal---Language-Learning-Platform",
      demo: "https://llp-7khm.vercel.app/",
      image: vocalImg,
    },
    {
      title: "CleanUpCrew",
      description: "Platform for community cleanup events featuring chatbot integration and location-based coordination.",
      features: ["Chatbot integration", "Location-based tracking", "Community events"],
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/piyushsingh19022002/CleanUpCrew-Community-Cleanup-Event-ChatBotAI",
      demo: "#",
      image: cleanupImg,
    },
    {
      title: "Delhi Water Monitoring",
      description: "Water quality monitoring system integrated with data visualization for immediate insights.",
      features: ["Real-time monitoring", "Data visualization", "Automated alerts"],
      tech: ["PHP", "MySQL", "JavaScript"],
      github: "https://github.com/piyushsingh19022002/Delhi-Water-Monitoring-System",
      demo: "#",
      image: waterImg,
    }
  ];

  const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } }
};

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto overflow-hidden">
      
      <div className="flex flex-col items-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight uppercase"
        >
          Projects
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-gray-400 dark:bg-gray-600 mt-4 rounded-full origin-left" 
        />
      </div>

      <div className="space-y-32">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          // Process terminal structural text dynamically for each project
          const terminalContent = `> cat ${project.title.toLowerCase().replace(/\s+/g, '_')}.md\n\n📁 ${project.title}\n\n> ${project.description}\n\n⚙ Key Features:\n${project.features.map(f => `* ${f}`).join('\n')}\n\n🛠 Tech Stack:\n${project.tech.map(t => `* ${t}`).join('\n')}`;

          return (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
            >
              
              {/* LEFT SIDE: Laptop Mockup */}
              <motion.div 
                variants={isEven ? slideInLeft : slideInRight} 
                className={`w-full lg:w-1/2 flex justify-center ${!isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="group relative w-full max-w-lg transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
                  {/* Screen Frame */}
                  <div className="bg-[#121212] p-2 sm:p-3 rounded-t-2xl sm:rounded-t-3xl border-t border-x border-white/20 shadow-2xl relative z-10">
                    <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20" /> {/* Mac Camera dot */}
                    </div>
                    {/* Inner Screen */}
                    <div className="bg-[#050505] relative aspect-[16/10] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                      
                      {/* Sub-graphic screen bleed */}
                      <div className="absolute inset-0 bg-white/5 mix-blend-screen opacity-50 z-20 pointer-events-none" />
                      
                      {/* Project Image Native Rendering */}
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover z-10"
                        priority={index <= 1}
                      />
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="relative h-4 sm:h-5 w-[110%] -left-[5%] bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-xl sm:rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-b border-gray-600 z-20 flex justify-center">
                    <div className="w-1/4 h-1 sm:h-1.5 bg-gray-400 rounded-b-md shadow-inner" />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE: Terminal UI */}
              <motion.div 
                variants={isEven ? slideInRight : slideInLeft} 
                className={`w-full lg:w-1/2 h-full ${!isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="w-full bg-white dark:bg-[#0a0a0a] rounded-xl border border-black/10 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.03)] overflow-hidden flex flex-col">
                  {/* MacOS Terminal Window Header */}
                  <div className="bg-gray-100 dark:bg-[#1e1e1e] border-b border-black/10 dark:border-white/10 px-4 py-3 flex items-center relative">
                    <div className="flex gap-2 absolute left-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="w-full text-center text-xs text-gray-400 dark:text-gray-500 font-mono tracking-widest hidden sm:block">
                      bash - {project.title.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                  </div>
                  
                  {/* Terminal Canvas */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between min-h-[350px]">
                    <TerminalTypewriter text={terminalContent} />
                    
                    {/* Action Links */}
                    <div className="mt-8 flex flex-wrap gap-4 border-t border-black/10 dark:border-white/10 pt-6">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/10 transition-all text-black dark:text-white font-mono text-xs uppercase tracking-widest">
                        <Github size={16} /> GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded bg-black/5 dark:bg-white/10 border border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-all text-black dark:text-white font-mono text-xs uppercase tracking-widest">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
