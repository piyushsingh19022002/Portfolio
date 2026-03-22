"use client";

import { motion, easeInOut } from "framer-motion";
import { Code, ExternalLink, Activity, Github } from "lucide-react";

export default function CodingActivity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
  };

  return (
    <section id="activity" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight uppercase text-center"
        >
          Activity & Stats
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-gray-400 dark:bg-gray-600 mt-4 rounded-full origin-center" 
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row gap-8 lg:gap-10"
      >
        
        {/* LEFT SIDE: Problem Solving Details */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex flex-col text-black dark:text-white">
          <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] h-full flex flex-col group hover:border-black/20 dark:hover:border-white/20 hover:scale-[1.02] transition-all duration-500">
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 tracking-wide">
              💻 Problem Solving
            </h3>
            
            <div className="space-y-6 text-slate-600 dark:text-gray-400 font-light leading-relaxed flex-1">
              <p className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">▹</span>
                Practiced Data Structures & Algorithms aggressively to refine logic building.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">▹</span>
                Solved problems consistently on LeetCode and GeeksforGeeks.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">▹</span>
                Strong foundational knowledge in arrays, recursion, and core data structures.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href="https://leetcode.com/u/piyushsingh19/" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between px-5 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 rounded-xl text-black dark:text-white font-medium transition-all hover:border-orange-500/30 dark:hover:border-orange-500/30 group btn">
                <span className="flex items-center gap-3">
                  <Code size={18} className="text-orange-500" /> LeetCode Profile
                </span>
                <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/piyushsingh1902/" target="_blank" rel="noreferrer" className="w-full flex items-center justify-between px-5 py-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 rounded-xl text-black dark:text-white font-medium transition-all hover:border-green-500/30 dark:hover:border-green-500/30 group btn">
                <span className="flex items-center gap-3">
                  <Activity size={18} className="text-green-500" /> GFG Profile
                </span>
                <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Interactive Global Widgets */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* GitHub Massive Dashboard */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-white dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:scale-[1.01] transition-all duration-500 p-6 flex flex-col gap-6 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <h3 className="text-black dark:text-white font-bold flex items-center gap-3 tracking-wide text-lg">
              <Github size={20} className="text-gray-500 dark:text-gray-400" /> GitHub Statistics
            </h3>
            
            <div className="flex flex-col xl:flex-row gap-4 justify-center items-center w-full">
              {/* GitHub API Readme Stats */}
              <img 
                src="https://github-readme-stats.vercel.app/api?username=piyushsingh19022002&show_icons=true&theme=transparent&title_color=000&text_color=000" 
                alt="GitHub Stats" 
                className="w-full xl:w-1/2 rounded-xl object-contain border border-black/5 dark:border-white/5 dark:hidden" 
              />
              <img 
                src="https://github-readme-stats.vercel.app/api?username=piyushsingh19022002&show_icons=true&theme=dark" 
                alt="GitHub Stats" 
                className="w-full xl:w-1/2 rounded-xl object-contain border border-black/5 dark:border-white/5 hidden dark:block" 
              />
              
              {/* GitHub API Streak Stats */}
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=piyushsingh19022002&theme=transparent&hide_border=true&title_color=000&text_color=000" 
                alt="GitHub Streak" 
                className="w-full xl:w-1/2 rounded-xl object-contain border border-black/5 dark:border-white/5 dark:hidden" 
              />
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=piyushsingh19022002&theme=dark" 
                alt="GitHub Streak" 
                className="w-full xl:w-1/2 rounded-xl object-contain border border-black/5 dark:border-white/5 hidden dark:block" 
              />
            </div>
            
            {/* GitHub Contributions Render */}
            <div className="w-full pt-4 border-t border-black/10 dark:border-white/5 flex flex-col items-center">
               <span className="text-xs text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-4">Contribution Graph</span>
               <div className="w-full overflow-x-auto scroller pb-2">
                 <img 
                   src="https://ghchart.rshah.org/piyushsingh19022002" 
                   alt="GitHub Commits Graph" 
                   className="min-w-[700px] w-full object-cover dark:invert opacity-80 hover:opacity-100 transition-opacity" 
                 />
               </div>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col items-center shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] h-full justify-center">
            <h3 className="text-black dark:text-white font-bold flex items-center gap-3 w-full mb-6 tracking-wide text-lg">
              <Code size={20} className="text-orange-500" /> LeetCode Metrics
            </h3>
            <img 
              src="https://leetcard.jacoblin.cool/piyushsingh19?theme=light" 
              alt="LeetCode Stats Card" 
              className="w-full object-contain rounded-xl border border-black/5 dark:border-white/5 dark:hidden" 
            />
            <img 
              src="https://leetcard.jacoblin.cool/piyushsingh19?theme=dark" 
              alt="LeetCode Stats Card" 
              className="w-full object-contain rounded-xl border border-black/5 dark:border-white/5 hidden dark:block" 
            />
          </motion.div>

          {/* GeeksForGeeks Interactive Card */}
          <motion.a 
            href="https://www.geeksforgeeks.org/user/piyushsingh1902/" 
            target="_blank" 
            rel="noreferrer"
            variants={itemVariants} 
            className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 p-6 flex flex-col items-center justify-center text-center gap-5 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] group cursor-pointer h-full min-h-[250px]"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300 mb-2">
              <Activity size={36} className="text-green-500" />
            </div>
            
            <div className="space-y-1 mt-auto">
              <h4 className="text-black dark:text-white font-bold text-xl tracking-wide">GeeksforGeeks Profile</h4>
              <p className="text-slate-500 dark:text-gray-400 text-sm group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors">@piyushsingh1902</p>
            </div>

            <div className="mt-auto text-xs font-mono uppercase tracking-widest bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-5 py-2.5 rounded-full text-zinc-600 dark:text-white/70 group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-black dark:group-hover:text-white transition-all flex items-center gap-2">
              View Profile <ExternalLink size={14} />
            </div>
          </motion.a>

        </div>

      </motion.div>
    </section>
  );
}
