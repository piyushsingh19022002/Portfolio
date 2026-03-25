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

  // Active line highlight relative to the timeline container
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
          className="text-3xl md:text-4xl font-bold text-white mb-16 font-mono"
        >
          🎓 Education
        </motion.h2>

        {/* Floating Effect for the entire timeline */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div ref={containerRef} className="relative">
            {/* Dim Vertical Timeline Line (Base) */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-white/10 origin-top"
            />

            {/* Bright Active Timeline Line (Scroll driven) */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-white/80 origin-top shadow-[0_0_10px_rgba(255,255,255,0.7)] z-0"
            />

            <div className="flex flex-col gap-8 md:gap-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.15)"
                  }}
                  className="relative flex items-start gap-6 md:gap-8 p-4 -ml-4 md:-ml-6 md:p-6 rounded-2xl border border-transparent"
                >
                  {/* Glow Dot Container */}
                  <div className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
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
                          boxShadow: [
                            "0 0 8px rgba(255,255,255,0.5)",
                            "0 0 16px rgba(255,255,255,0.8)",
                            "0 0 8px rgba(255,255,255,0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                        className="h-3 w-3 rounded-full bg-white"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col w-full group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white font-mono tracking-tight group-hover:text-gray-200 transition-colors">
                        {item.degree}
                      </h3>
                      <span className="text-sm text-[#cbd5e1] font-mono sm:mt-0 mt-1 shrink-0">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-base text-[#cbd5e1] font-mono mb-1 leading-relaxed">
                      {item.institution}
                    </p>
                    <p className="text-sm text-[#cbd5e1] font-mono font-medium">
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
