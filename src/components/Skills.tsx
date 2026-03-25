"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, 
  FaGithub, FaJava, FaPython, FaServer, FaBrain, 
  FaUsers, FaComments, FaClock, FaAws 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiFramer, SiMongodb, SiExpress, SiPostgresql, SiVercel, 
  SiPostman, SiCplusplus, SiMysql, SiDocker, 
  SiSelenium, SiApachemaven
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: FaPython },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "ReactJS", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: FaServer }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: TbBrandVscode },
      { name: "Postman", icon: SiPostman }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Selenium", icon: SiSelenium },
      { name: "Maven", icon: SiApachemaven },
      { name: "AWS", icon: FaAws }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-20 font-mono text-center"
        >
          ⚡ Skills
        </motion.h2>

        <div className="flex flex-col gap-y-16 md:gap-y-20">
          {skillCategories.map((cat, catIndex) => (
            <div key={cat.title} className="flex flex-col items-center w-full">
              {/* Subtle Category Label */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] text-center mb-8 font-mono select-none"
              >
                {cat.title}
              </motion.h3>

              {/* Grid Cluster */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 w-full justify-items-center">
                {cat.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  // Seed for pseudo-random float animation mapping
                  const randomDelay = ((catIndex * 7) + index) * 0.15 % 2;
                  // Stagger float speed between 2.5 and 4s
                  const floatDuration = 2.5 + (index % 3) * 0.6;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        opacity: { duration: 0.4, delay: index * 0.05 },
                        scale: { duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 100 }
                      }}
                      className="relative group flex items-center justify-center cursor-pointer"
                    >
                      {/* Floating Animation Wrapper */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: floatDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: randomDelay
                        }}
                        className="relative flex flex-col items-center justify-center p-3"
                      >
                        {/* Tooltip */}
                        <div className="absolute top-0 -translate-y-full opacity-0 pointer-events-none group-hover:-translate-y-[120%] group-hover:opacity-100 transition-all duration-300 bg-black text-white dark:bg-white dark:text-black text-[10px] md:text-sm font-mono font-bold px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap z-50">
                          {skill.name}
                        </div>

                        {/* Icon Container with Backplate and Box Shadow */}
                        <div className="flex items-center justify-center p-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur transition-all duration-300 transform group-hover:scale-[1.2] shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_35px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]">
                          <Icon className="text-4xl md:text-6xl text-gray-700 dark:text-gray-300 opacity-80 group-hover:text-black dark:group-hover:text-white group-hover:opacity-100 transition-colors duration-300" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Faint Divider between clusters */}
              {catIndex !== skillCategories.length - 1 && (
                <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/5 to-transparent mt-12 md:mt-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
