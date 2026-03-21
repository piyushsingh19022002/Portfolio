"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Programming", href: "#programming" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] sm:w-[90%] md:w-[85%] lg:max-w-6xl`}
      >
        <div className="flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold tracking-widest text-white">
              PS
            </a>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm font-semibold tracking-wider px-4 py-2 rounded-full hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Moon size={18} />
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-gray-600 to-blue-600 shadow-[0_0_15px_rgba(107,114,128,0.3)] hover:shadow-[0_0_25px_rgba(107,114,128,0.6)] transition-shadow"
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden origin-top"
          >
            <div className="flex flex-col space-y-2 p-6 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white font-semibold text-lg tracking-wide py-3 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-2">
                <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Moon size={20} />
                  <span className="font-medium">Theme</span>
                </button>
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold bg-gradient-to-r from-gray-600 to-blue-600 shadow-lg"
                >
                  <FileText size={16} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
