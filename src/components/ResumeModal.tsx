"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] bg-black/90 flex flex-col items-center justify-center backdrop-blur-sm p-4 sm:p-8"
        >
          {/* Close Area Background (Click to close) */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Bar Navigation */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#151515]">
              <h3 className="text-white font-semibold flex items-center gap-3 tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
                Resume Preview
              </h3>
              <button 
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Iframe Container */}
            <div className="relative flex-1 bg-black/50 flex items-center justify-center overflow-hidden">
              <div className="absolute flex flex-col items-center gap-3 z-0">
                <Loader2 className="animate-spin text-blue-500" size={32} />
                <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">Loading Drive Preview...</span>
              </div>
              <iframe
                src="https://drive.google.com/file/d/127jFNWT8FIsEybxOoz97-neYv45vIaLO/preview"
                className="w-full h-full border-none relative z-10"
                allow="autoplay"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
