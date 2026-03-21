"use client";

import { motion } from "framer-motion";
import { Layout, Server, Cloud, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="text-gray-400" size={28} />,
    skills: ["React.js", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: <Server className="text-blue-400" size={28} />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "DevOps & Cloud",
    icon: <Cloud className="text-gray-400" size={28} />,
    skills: ["Docker", "AWS (Basics)"],
  },
  {
    category: "Database",
    icon: <Database className="text-blue-400" size={28} />,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: <Wrench className="text-gray-400" size={28} />,
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase"
        >
          Skills
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-gradient-to-r from-gray-500 to-blue-500 mt-4 rounded-full origin-left" 
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((data, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col p-8 rounded-2xl bg-slate-900 border border-white/10 hover:border-gray-500/50 hover:shadow-[0_0_30px_rgba(75,85,99,0.3)] transition-all duration-300 group"
          >
            <div className="p-4 bg-white/5 w-max rounded-xl mb-6 group-hover:bg-white/10 transition-colors">
              {data.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
              {data.category}
            </h3>
            
            <ul className="flex flex-col space-y-3">
              {data.skills.map((skill, i) => (
                <li key={i} className="text-[#cbd5e1] text-lg flex items-center font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-70" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
