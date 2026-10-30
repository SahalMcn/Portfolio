"use client";

import { useState, useEffect } from "react";
import { FileText, Mail, MessageSquare, Linkedin, Check } from "lucide-react";

export default function RecruiterBar() {
  const [visible, setVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("sahalmuhammedcn@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Recruiter Quick Actions"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="bg-card/95 backdrop-blur-md border border-dot rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center justify-between gap-2 sm:gap-3">
        {/* Candidate Info */}
        <div className="flex items-center gap-2.5 pl-1 sm:pl-2 min-w-0">
          <div className="w-8 h-8 rounded-full bg-accent-blue/15 text-accent-blue font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-accent-blue/30">
            SM
          </div>
          <div className="min-w-0 hidden xs:block">
            <div className="font-display font-semibold text-xs sm:text-sm text-text truncate">
              Sahal Muhammed
            </div>
            <div className="font-mono text-[10px] text-muted truncate">
              Flutter Developer
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent-blue text-white font-body text-xs font-medium hover:bg-accent-blue/90 transition-colors shadow-sm"
          >
            <FileText size={13} />
            <span className="hidden sm:inline">Résumé</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-bg border border-dot text-text font-body text-xs hover:border-accent-blue/40 transition-colors"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check size={13} className="text-accent-blue" />
                <span className="text-accent-blue font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Mail size={13} className="text-muted" />
                <span className="hidden sm:inline">Email</span>
              </>
            )}
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918592020391"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-bg border border-dot text-text hover:border-accent-blue/40 transition-colors"
            aria-label="WhatsApp Chat"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={14} className="text-muted" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sahalmuhammedcn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-bg border border-dot text-text hover:border-accent-blue/40 transition-colors"
            aria-label="LinkedIn Profile"
            title="View LinkedIn Profile"
          >
            <Linkedin size={14} className="text-muted" />
          </a>
        </div>
      </div>
    </aside>
  );
}
