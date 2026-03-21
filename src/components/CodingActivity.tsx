"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Activity, Github } from "lucide-react";

export default function CodingActivity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="activity" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase text-center"
        >
          Activity & Stats
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-gradient-to-r from-gray-500 to-blue-500 mt-4 rounded-full origin-center" 
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        {/* LEFT SIDE: Description */}
        <motion.div variants={leftVariants} className="w-full lg:w-1/3 flex flex-col space-y-8">
          <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
              💻 Problem Solving
            </h3>
            
            <div className="space-y-5 text-[#cbd5e1] font-light leading-relaxed flex-1">
              <p className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">▹</span>
                Practiced Data Structures & Algorithms aggressively to refine logic building.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">▹</span>
                Solved problems consistently on LeetCode and GeeksforGeeks.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">▹</span>
                Strong foundational knowledge in arrays, recursion, and core data structures.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href="https://leetcode.com/" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] group">
                <span className="flex items-center gap-2">
                  <Code size={18} className="text-orange-500" /> LeetCode
                </span>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-300" />
              </a>
              <a href="https://auth.geeksforgeeks.org/" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] group">
                <span className="flex items-center gap-2">
                  <Activity size={18} className="text-green-500" /> GeeksforGeeks
                </span>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Stats & Graphs */}
        <motion.div variants={rightVariants} className="w-full lg:w-2/3 flex flex-col space-y-8">
          
          {/* Section 1: Coding Activity */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 pl-2">
              <Activity className="text-blue-400" size={24} />
              Coding Activity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={cardVariants} className="bg-[#0f172a] p-4 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all flex items-center justify-center min-h-[160px] overflow-hidden group">
                {/* LeetCode Stats Placeholder */}
                <div className="text-center w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <img src="https://leetcard.jacoblin.cool/PiyushSengar?theme=dark&font=Space%20Mono&ext=activity" alt="LeetCode Stats Placeholder" className="rounded-lg opacity-80 group-hover:opacity-100 transition-opacity max-h-36 object-cover mx-auto w-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
              </motion.div>
              <motion.div variants={cardVariants} className="bg-[#0f172a] p-6 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all flex items-center justify-center min-h-[160px] group relative overflow-hidden">
                {/* GFG Stats Custom Graph (Faux for Visual) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="text-center w-full">
                  <p className="text-white/80 font-mono text-sm mb-4">GFG Problem Solved (Monthly)</p>
                  <div className="flex gap-2 lg:gap-3 justify-center items-end h-[70px] opacity-70 group-hover:opacity-100 transition-opacity">
                    {[30, 45, 60, 40, 80, 55, 95].map((h, i) => (
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        key={i} 
                        className="w-4 bg-gradient-to-t from-green-600 to-green-400 rounded-sm" 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Section 2: GitHub Activity */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4 pl-2">
              <Github className="text-white" size={24} />
              GitHub Activity
            </h3>
            
            <motion.div variants={cardVariants} className="bg-[#0f172a] p-5 rounded-xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all overflow-hidden flex justify-center w-full">
              {/* GitHub Contribution Heatmap Placeholder */}
              <div className="w-full overflow-x-auto scroller">
                 <img src="https://ghchart.rshah.org/2180c5/PiyushSengar" alt="GitHub Contributions" className="opacity-80 hover:opacity-100 transition-opacity min-w-[600px] h-[110px] object-cover mx-auto hue-rotate-15 mix-blend-screen" />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={cardVariants} className="bg-[#0f172a] rounded-xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all flex justify-center overflow-hidden">
                <img src="https://github-readme-stats.vercel.app/api?username=PiyushSengar&theme=tokyonight&hide_border=true&show_icons=true&bg_color=0f172a" alt="GitHub Stats" className="opacity-90 hover:opacity-100 transition-opacity w-full object-cover mix-blend-screen" />
              </motion.div>
              <motion.div variants={cardVariants} className="bg-[#0f172a] rounded-xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all flex justify-center overflow-hidden">
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=PiyushSengar&theme=tokyonight&hide_border=true&background=0f172a" alt="GitHub Streak" className="opacity-90 hover:opacity-100 transition-opacity w-full object-cover mix-blend-screen" />
              </motion.div>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
