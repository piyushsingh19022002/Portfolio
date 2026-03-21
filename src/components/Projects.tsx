"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Code2 } from "lucide-react";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const projectsData = [
    {
      title: "Vocal Platform",
      description: "A multilingual language learning platform with audio lessons, quizzes, and personalized learning features.",
      features: ["JWT Authentication", "Audio playback system", "Gamification features"],
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/PiyushSengar",
      demo: "#",
      glowColor: "from-gray-500/20 to-blue-500/20",
      accent: "text-gray-400",
      borderHover: "hover:border-gray-500 hover:shadow-[0_0_50px_rgba(75,85,99,0.2)]",
    },
    {
      title: "CleanUpCrew",
      description: "Platform for community cleanup events featuring chatbot integration and location-based coordination.",
      features: ["Chatbot integration", "Location-based tracking", "Community events"],
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/PiyushSengar",
      demo: "#",
      glowColor: "from-emerald-500/20 to-green-500/20",
      accent: "text-emerald-400",
      borderHover: "hover:border-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]",
    },
    {
      title: "Delhi Water Monitoring",
      description: "Water quality monitoring system integrated with data visualization for immediate insights.",
      features: ["Real-time monitoring", "Data visualization", "Automated alerts"],
      tech: ["PHP", "MySQL", "JavaScript"],
      github: "https://github.com/PiyushSengar",
      demo: "#",
      glowColor: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400",
      borderHover: "hover:border-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
        >
          Projects
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-gradient-to-r from-gray-500 to-blue-500 mt-4 rounded-full origin-left" 
        />
      </div>

      <div className="space-y-32">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center`}
            >
              {/* Laptop Mockup */}
              <motion.div 
                variants={isEven ? slideInLeft : slideInRight} 
                className={`relative group perspective-[1000px] w-full max-w-xl mx-auto md:max-w-none ${!isEven ? "md:order-2" : ""}`}
              >
                <div className="relative w-full transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  {/* Screen border */}
                  <div className="bg-[#1e1e1e] p-2 md:p-3 rounded-t-2xl md:rounded-t-3xl border-t border-x border-white/20 shadow-2xl relative z-10">
                    <div className="absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/50" />
                    <div className="bg-[#0a0a0a] rounded-lg md:rounded-xl overflow-hidden aspect-[16/10] relative flex items-center justify-center border border-black shadow-inner">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.glowColor} mix-blend-screen opacity-50`} />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent" />
                      
                      <div className="absolute inset-0 opacity-20 flex flex-col p-4 md:p-6 gap-2 md:gap-3 pointer-events-none">
                        <div className="h-2 w-1/4 bg-blue-500 rounded" />
                        <div className="h-2 w-1/2 bg-gray-500 rounded ml-4" />
                        <div className="h-2 w-1/3 bg-white rounded ml-4" />
                        <div className="h-2 w-2/3 bg-white rounded" />
                        <div className="h-2 w-1/5 bg-blue-500 rounded ml-8" />
                      </div>
                      
                      <Code2 size={56} className="text-white/20 z-10 drop-shadow-2xl" />
                      
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 flex gap-1.5 md:gap-2">
                        <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-500/80" />
                      </div>
                    </div>
                  </div>
                  {/* Keyboard base */}
                  <div className="h-3 md:h-5 w-[110%] -left-[5%] relative bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] rounded-b-lg md:rounded-b-2xl border-x border-b border-white/5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] z-20 flex justify-center">
                    <div className="w-1/4 h-1 md:h-1.5 bg-[#121212] rounded-b-md shadow-inner" />
                  </div>
                  
                  {/* Glow under laptop */}
                  <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-gradient-to-r ${project.glowColor} blur-[40px] rounded-full pointer-events-none z-0`} />
                </div>
              </motion.div>

              {/* Terminal UI */}
              <motion.div 
                variants={isEven ? slideInRight : slideInLeft} 
                className={`h-full flex items-center ${!isEven ? "md:order-1" : ""}`}
              >
                <div className={`w-full bg-[#020617] rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-sm group transition-all duration-500 hover:border-white/20 ${project.borderHover}`}>
                  {/* Terminal Header */}
                  <div className="bg-[#0f172a]/80 border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-md">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-white/40 text-xs flex items-center gap-2 tracking-widest hidden sm:flex">
                      <Terminal size={14} />
                      <span>bash - {project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>
                    <div className="w-10 sm:hidden" />
                    <div className="w-10 hidden sm:block" />
                  </div>
                  
                  {/* Terminal Body */}
                  <div className="p-6 md:p-8 space-y-7 text-[#cbd5e1] leading-relaxed">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-green-400 font-bold">➜</span> 
                      <span className="text-blue-400 font-bold">~</span> 
                      <span className="text-white bg-white/10 px-1 rounded">cat</span> 
                      <span className="break-all">{project.title.replace(/\s+/g, '_')}.md</span>
                      <span className="w-2 h-4 bg-white/50 animate-pulse inline-block ml-1" />
                    </div>
                    
                    <div className={`pl-5 border-l-2 border-white/10 space-y-5 transition-colors group-hover:border-white/30`}>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-3">
                        <span className="text-2xl">📁</span> {project.title}
                      </h3>
                      <p className="opacity-90 leading-loose">
                        <span className={`${project.accent} font-bold mr-2`}>{">"}</span>
                        {project.description}
                      </p>
                      
                      <div className="space-y-3 pt-2">
                        <p className={`${project.accent} font-bold tracking-wider`}>⚙ Key Features:</p>
                        <ul className="list-disc pl-6 opacity-90 space-y-1.5 marker:text-white/50">
                          {project.features.map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 pt-2">
                        <p className={`${project.accent} font-bold tracking-wider`}>🛠 Tech Stack:</p>
                        <p className="opacity-90 pl-1 font-semibold text-white/80">{project.tech.join(", ")}</p>
                      </div>
                    </div>

                    {/* Action Buttons inside terminal context */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-md border border-white/20 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all text-white font-medium text-xs uppercase tracking-widest group/btn">
                        <Github size={16} className="group-hover/btn:scale-110 transition-transform" /> GitHub
                      </a>
                      <a href={project.demo} className="flex items-center gap-2 px-6 py-2.5 rounded-md border border-white/20 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all text-white font-medium text-xs uppercase tracking-widest group/btn">
                        <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" /> Live Demo
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
