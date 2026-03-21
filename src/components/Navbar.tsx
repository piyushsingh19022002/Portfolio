"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ResumeModal from "@/components/ResumeModal";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Programming", href: "#activity" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Scroll spy to highlight active section continuously
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const element = document.getElementById(link.href.replace("#", ""));
        
        // Edge case: Top of page resolves to Home
        if (link.name === "Home" && scrollPosition < 600) {
          setActiveSection("Home");
          return;
        }

        if (element) {
          const { top } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
            setActiveSection(link.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, sectionName: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (targetId === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* LEFT COMPONENT: Fixed Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-6 md:left-10 z-[100]"
      >
        <Link href="/" className="text-2xl font-bold text-black dark:text-white tracking-widest cursor-none">
          PS
        </Link>
      </motion.div>

      {/* CENTER COMPONENT: Floating Glass Navbar (Desktop Only) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center gap-2 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-6 py-3 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.name;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href, link.name)}
              className="relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out cursor-none group"
            >
              <span 
                className={`relative z-10 transition-all duration-300 group-hover:tracking-wide ${
                  isActive ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                }`}
              >
                {link.name}
              </span>
              
              {/* Highlight active section with Framer Motion layout styling */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full blur-[1px]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </motion.nav>

      {/* RIGHT COMPONENT: Action Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed top-6 right-6 md:right-10 z-[100] flex items-center gap-4"
      >
        <ThemeToggle />

        {/* Resume Button */}
        <button
          onClick={() => setIsResumeOpen(true)}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-black dark:text-white font-bold text-sm bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-black/10 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-none"
        >
          Resume
        </button>

        {/* Mobile Hamburger Layout Fallback */}
        <button
          className="md:hidden p-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white cursor-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* MOBILE POPUP MENU */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-[90] bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href, link.name)}
            className={`text-2xl font-bold transition-all duration-300 cursor-none ${
              activeSection === link.name ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsResumeOpen(true);
          }}
          className="mt-4 px-8 py-3 rounded-full text-black dark:text-white font-bold text-lg bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 cursor-none"
        >
          View Resume
        </button>
      </motion.div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
