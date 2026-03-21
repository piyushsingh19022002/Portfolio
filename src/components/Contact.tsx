"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Sparkles, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Automatically hide success block and reset form wrapper mechanics after 6s
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please make sure you are connected to the internet.");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 w-full overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background ambient glow - mapped to gracefully invert if needed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-gradient-to-tr from-gray-200/50 to-blue-200/50 dark:from-gray-900/10 dark:to-blue-900/10 blur-[120px] pointer-events-none z-[-1]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[700px] w-full flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-gray-500/30 bg-black/5 dark:bg-gray-500/10 text-slate-700 dark:text-gray-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(156,163,175,0.15)]">
            <Sparkles size={16} /> Open to Opportunities
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-6 leading-tight">
          Let’s Build <span className="text-gray-500 dark:text-gray-400">Something Great</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-slate-600 dark:text-[#cbd5e1] text-base md:text-lg leading-relaxed font-light mb-12 max-w-2xl">
          I enjoy working on impactful projects and collaborating with like-minded people. Drop a message below and I'll get back to you!
        </motion.p>

        {/* Dynamic Form UI System */}
        <motion.div variants={itemVariants} className="w-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[0_0_40px_rgba(255,255,255,0.02)]">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.1)] dark:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <CheckCircle2 className="text-green-600 dark:text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2 tracking-wide">Message Sent!</h3>
              <p className="text-slate-500 dark:text-gray-400">Thanks for reaching out. I've sent a confirmation to your email and will respond to you soon.</p>
              <button 
                onClick={() => setStatus("idle")} 
                className="mt-6 text-sm text-slate-500 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-gray-400 pl-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/20 dark:focus:ring-white/30 transition-all font-light"
                    placeholder="Enter your name"
                    disabled={status === "loading"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-gray-400 pl-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/20 dark:focus:ring-white/30 transition-all font-light"
                    placeholder="email@example.com"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-gray-400 pl-1">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-1 focus:ring-black/20 dark:focus:ring-white/30 transition-all font-light resize-none"
                  placeholder="How can I help you?..."
                  disabled={status === "loading"}
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400"/> {errorMessage}
                </p>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="mt-2 w-full flex items-center justify-center gap-3 px-8 py-4 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 text-black dark:text-white rounded-xl font-bold tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <><Loader2 size={18} className="animate-spin text-slate-500 dark:text-gray-400" /> <span className="text-slate-600 dark:text-gray-300">Sending Message...</span></>
                ) : (
                  <><Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Anchors */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-10 mt-16 text-slate-500 dark:text-gray-500">
          <a href="https://github.com/piyushsingh19022002" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-all group">
            <Github size={20} className="group-hover:text-black dark:group-hover:text-white transition-colors" />
            <span className="font-medium text-sm tracking-wider uppercase relative">
               GitHub
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/piyushsingh19/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-all group">
            <Linkedin size={20} className="group-hover:text-black dark:group-hover:text-white transition-colors" />
            <span className="font-medium text-sm tracking-wider uppercase relative">
               LinkedIn
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
