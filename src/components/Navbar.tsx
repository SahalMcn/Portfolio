"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "body") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "border-b border-dot bg-bg/90 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => handleSmoothScroll(e, "body")}
            className="font-mono text-lg font-medium lowercase tracking-wide flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded px-2 -ml-2"
          >
            <span className="text-accent-blue mr-2">&gt;</span>
            sahal.dev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="font-mono text-sm lowercase tracking-widest text-muted hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded px-3 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-dot" />

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

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle (mobile) */}
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-text p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-lg"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-card bg-dot-pattern">
          <div className="px-6 h-20 flex items-center justify-between border-b border-dot bg-card/90 backdrop-blur-sm">
            <Link
              href="#"
              onClick={(e) => handleSmoothScroll(e, "body")}
              className="font-mono text-lg font-medium lowercase tracking-wide flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded px-2 -ml-2"
            >
              <span className="text-accent-blue mr-2">&gt;</span>
              sahal.dev
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-text p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-lg"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col space-y-8 bg-card/70">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-mono text-2xl lowercase tracking-widest text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded py-2 inline-block w-fit"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-8 flex space-x-6 border-t border-dot">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-text hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-muted flex items-center justify-center text-text hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
