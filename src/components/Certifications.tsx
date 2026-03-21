"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const certificationsCol1 = [
    { name: "Cloud Computing", provider: "NPTEL – IIT Kharagpur" },
    { name: "Computer Networking", provider: "Google" },
    { name: "Full Stack Web Development", provider: "PW Skills" },
    { name: "Data Structures & Algorithms in Java", provider: "PW Skills" },
  ];

  const certificationsCol2 = [
    { name: "Flutter Development", provider: "Cipher Schools" },
    { name: "Laravel Development", provider: "Udemy" },
    { name: "Generative AI & AI Tools", provider: "Udemy" },
    { name: "Prompt Engineering", provider: "Infosys" },
  ];

  const CertificationItem = ({ name, provider }: { name: string, provider: string }) => (
    <motion.div 
      variants={itemVariants} 
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
    >
      <div className="mt-1 bg-white/5 p-2 rounded-full border border-white/10 group-hover:border-gray-500/50 group-hover:bg-gray-500/10 transition-colors">
        <Award className="text-gray-400 group-hover:text-gray-300 transition-colors" size={20} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-gray-400 transition-colors tracking-wide leading-tight">
          {name}
        </h3>
        <p className="text-[#cbd5e1] text-sm md:text-base font-light mt-1.5 opacity-80">
          {provider}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 relative z-10 w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase text-center"
        >
          Certifications
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
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
      >
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          {certificationsCol1.map((cert, index) => (
            <CertificationItem key={index} name={cert.name} provider={cert.provider} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-4">
          {certificationsCol2.map((cert, index) => (
            <CertificationItem key={index} name={cert.name} provider={cert.provider} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
