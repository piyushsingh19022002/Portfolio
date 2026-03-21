export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 py-10 px-6 bg-gray-50 dark:bg-[#020617] relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-3 text-slate-500 dark:text-[#94a3b8] text-sm font-light">
        <p className="tracking-wide">© 2026 Piyush Singh</p>
        <p className="tracking-wide flex items-center gap-1.5">
          Built with <span className="text-red-500 animate-pulse">❤️</span> using React
        </p>
      </div>
    </footer>
  );
}
