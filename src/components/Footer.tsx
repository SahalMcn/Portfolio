import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-dot py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted">
          © 2026 Sahal Muhammed C N
        </p>
        
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full border border-muted flex items-center justify-center text-muted hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full border border-muted flex items-center justify-center text-muted hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
