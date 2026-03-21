export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-10 px-6 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-3 text-[#94a3b8] text-sm font-light">
        <p className="tracking-wide">© 2026 Piyush Singh</p>
        <p className="tracking-wide flex items-center gap-1.5">
          Built with <span className="text-red-500 animate-pulse">❤️</span> using React
        </p>
      </div>
    </footer>
  );
}
