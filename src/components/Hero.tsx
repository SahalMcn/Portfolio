"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the center of the section
      const x = (e.clientX - rect.left - rect.width / 2) / 50;
      const y = (e.clientY - rect.top - rect.height / 2) / 50;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-80px)] pt-20 flex flex-col justify-center max-w-7xl mx-auto px-6"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
        {/* Left Side: Text Content (55%) */}
        <div className="w-full lg:w-[55%] space-y-8 z-10">
          <div className="space-y-4">
            <p className="font-mono text-sm text-muted tracking-wide uppercase">
              Flutter Developer · Full-Stack Side Projects
            </p>
            <p className="font-mono text-text">Sahal Muhammed C N</p>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-text">
              Flutter Developer from <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                Calicut, Kerala
                {/* SVG Underline Accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4 text-accent-yellow z-[-1]"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 15C45.5 4 125.5 2 198 12"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className={
                      !prefersReducedMotion
                        ? "animate-[dash_2s_ease-out_forwards]"
                        : ""
                    }
                    strokeDasharray="200"
                    strokeDashoffset={prefersReducedMotion ? "0" : "200"}
                  />
                  <style>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </svg>
              </span>
            </h1>
          </div>

          <p className="font-body text-lg text-muted max-w-xl leading-relaxed">
            Mobile-first developer who ships production Flutter apps by day and
            full-stack e-commerce platforms by night — from database schema to
            payment integration.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent-blue text-white font-body font-medium rounded-lg hover:bg-accent-blue/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-accent-blue"
            >
              View Résumé
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-8 py-3 bg-transparent border border-muted text-text font-body font-medium rounded-lg hover:bg-card hover:border-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-accent-blue"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side: Terminal Card (45%) */}
        <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0 z-10">
          {/* Decorative Floating Dots */}
          {!prefersReducedMotion && (
            <>
              <div
                className="absolute -top-8 -left-8 w-16 h-16 bg-accent-yellow/20 rounded-full blur-xl animate-float"
                style={{
                  transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
                }}
              />
              <div
                className="absolute -bottom-12 -right-4 w-24 h-24 bg-accent-blue/20 rounded-full blur-xl animate-float"
                style={{
                  animationDelay: "2s",
                  transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
                }}
              />
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-accent-blue/50 rounded-full"
                style={{
                  transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
                }}
              />
              <div
                className="absolute -bottom-6 left-12 w-3 h-3 bg-accent-yellow/50 rounded-full"
                style={{
                  transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)`,
                }}
              />
            </>
          )}

          {/* Terminal Window */}
          <div className="relative bg-card rounded-xl shadow-lg border border-dot overflow-hidden">
            {/* Top Bar */}
            <div className="bg-bg/50 border-b border-dot px-4 py-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex-1 text-center">
                <span className="font-mono text-xs text-muted">
                  whoami.dart
                </span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-muted mb-2">{"// role"}</div>
              <div>
                <span className="text-accent-blue">class</span>{" "}
                <span className="text-text">Sahal {"{"}</span>
              </div>
              <div className="pl-4 mt-1">
                <span className="text-text">stack = [</span>
                <span className="text-text">{"'Flutter'"}</span>
                <span className="text-text">, </span>
                <span className="text-text">{"'Next.js'"}</span>
                <span className="text-text">, </span>
                <span className="text-text">{"'Supabase'"}</span>
                <span className="text-text">];</span>
              </div>
              <div className="pl-4 mt-1">
                <span className="text-text">based_in = </span>
                <span className="text-text">{"'Calicut, Kerala'"}</span>
                <span className="text-text">;</span>
              </div>
              <div className="pl-4 mt-4">
                <span className="text-accent-blue">print</span>
                <span className="text-text">(stack);</span>
              </div>
              <div>
                <span className="text-text">{"}"}</span>
                <span
                  className={`inline-block w-2 h-4 ml-1 align-middle bg-text ${!prefersReducedMotion ? "animate-blink" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-muted uppercase tracking-widest">
          Scroll
        </span>
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, "#about")}
          className={`text-muted hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-full p-1 ${!prefersReducedMotion ? "animate-bounce" : ""}`}
          aria-label="Scroll down to About section"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
