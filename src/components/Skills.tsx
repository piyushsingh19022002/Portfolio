"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiJsonwebtokens, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillsList = [
  { name: "React", Icon: FaReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: SiExpress },
  { name: "REST APIs", Icon: TbApi },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "Docker", Icon: FaDocker },
  { name: "AWS (Basics)", Icon: FaAws },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Git", Icon: FaGitAlt },
  { name: "GitHub", Icon: FaGithub },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const}
    }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[50vh]">
      
      {/* Subtle Section Header */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase"
        >
          MY SKILLS
        </motion.h2>
      </div>

      {/* Skills Icon Flex Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-10 md:gap-14 max-w-4xl mx-auto"
      >
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center gap-4 group w-[80px] sm:w-[100px]"
          >
            {/* Minimal SVG Icon */}
            <skill.Icon className="text-5xl sm:text-6xl text-gray-400 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            
            {/* Descriptive Label */}
            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm text-center group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
