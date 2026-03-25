"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    id: 1,
    degree: "B.Tech CSE",
    duration: "2023–Present",
    institution: "Lovely Professional University, Punjab",
    score: "CGPA: 8.2"
  },
  {
    id: 2,
    degree: "Class 12",
    duration: "2021",
    institution: "Morning Star Children\u2019s Academy, Uttar Pradesh",
    score: "Percentage: 90.6%"
  },
  {
    id: 3,
    degree: "Class 10",
    duration: "2019",
    institution: "Maharishi Vidya Mandir, Uttar Pradesh",
    score: "Percentage: 94.8%"
  }
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="education" className="w-full py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 font-mono text-center"
        >
          🎓 Education
        </motion.h2>

        <motion.div
           animate={{ y: [0, -5, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div ref={containerRef} className="relative max-w-4xl mx-auto">
            {/* Dim Vertical Timeline Line (Base) */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[9px] md:left-[11px] top-6 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-600 origin-top"
            />

            {/* Bright Active Timeline Line (Scroll driven) */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[9px] md:left-[11px] top-6 bottom-0 w-[2px] bg-gray-900 dark:bg-gray-200 origin-top z-0"
            />

            <div className="flex flex-col gap-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-start gap-6 md:gap-8 group"
                >
                  {/* Glow Dot Container */}
                  <div className="relative z-10 mt-5 flex shrink-0 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        className="h-3 w-3 rounded-full bg-black dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                      />
                    </motion.div>
                    {/* Placeholder space for the absolute dot so the flex items-start gap-8 aligns properly */}
                    <div className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Content Card Wrapper */}
                  <div className="flex flex-col w-full bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 dark:border-white/10 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-xl dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 font-mono tracking-tight transition-colors">
                        {item.degree}
                      </h3>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 font-mono sm:mt-0 mt-1 shrink-0">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-base text-gray-700 dark:text-gray-400 font-mono mb-1 leading-relaxed">
                      {item.institution}
                    </p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-mono">
                      {item.score}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
