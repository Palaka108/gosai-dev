export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold tracking-[0.15em] text-white/40">
            GOSAI
          </span>
          <span className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Gosai. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="text-xs text-white/30 hover:text-cyan-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-xs text-white/30 hover:text-cyan-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#process"
            className="text-xs text-white/30 hover:text-cyan-400 transition-colors"
          >
            Process
          </a>
          <a
            href="#contact"
            className="text-xs text-white/30 hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
