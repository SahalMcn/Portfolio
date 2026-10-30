"use client";

import { useEffect, useRef, useState } from "react";

function useInView({ threshold = 0.1, triggerOnce = true } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);

  return { ref, isInView };
}

interface ExperienceData {
  role: string;
  company: string;
  date: string;
  location: string;
  techStack: string[];
  points: string[];
}

const experiences: ExperienceData[] = [
  {
    role: "Associate Software Engineer",
    company: "Lilac Infotech",
    date: "02/2026 – Present",
    location: "Calicut, Kerala",
    techStack: [
      "Flutter",
      "Dart",
      "BLoC",
      "DDD Architecture",
      "Pusher",
      "Agora RTC",
      "AZUL",
      "PayPal",
      "FCM",
    ],
    points: [
      "Architect clean UI from Figma designs, integrate REST APIs, and manage complex asynchronous state using BLoC and Domain-Driven Design (DDD) architecture.",
      "Integrate Pusher for real-time live events, Agora for interactive audio/video calling, and AZUL & PayPal payment flows.",
      "Migrated push notifications from OneSignal to pure Firebase Cloud Messaging (FCM) for a live application with 10K+ downloads.",
      "Diagnose production exceptions via Firebase Crashlytics, boost runtime performance, and collaborate with backend engineers on CI/CD workflows.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Tomercon Developers",
    date: "04/2025 – 09/2025",
    location: "Kerala, India",
    techStack: [
      "Flutter",
      "Dart",
      "Provider",
      "REST APIs",
      "Firebase Auth",
      "Cloud Firestore",
    ],
    points: [
      "Built modular Flutter screens, integrated RESTful endpoints, and configured secure authentication using Firebase & Cloud Firestore.",
      "Utilized Provider pattern while collaborating with senior engineers on rapid feature releases, performance tuning, and production bug fixes.",
    ],
  },
  {
    role: "Flutter Developer Trainee",
    company: "Haris & Co. Academy (HACA)",
    date: "07/2024 – 12/2024",
    location: "Calicut, Kerala",
    techStack: [
      "Flutter",
      "Dart",
      "CRUD Operations",
      "State Management",
      "UI Architecture",
    ],
    points: [
      "Completed an intensive 6-month Flutter/Dart training program covering mobile development fundamentals.",
      "Designed and built a Student Management System as final capstone project covering CRUD operations, local/remote data handling, and UI architecture.",
    ],
  },
];

function ExperienceItem({ exp, index }: { exp: ExperienceData; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-10 pb-12 last:pb-0 transition-all duration-700 ease-out delay-[${index * 150}ms] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Sleek Timeline Dot */}
      <div className="absolute left-[-5px] top-2 w-3 h-3 bg-accent-blue rounded-full shadow-[0_0_0_4px_var(--bg)] z-10" />

      <div className="space-y-3">
        {/* Header */}
        <div>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-text">
            {exp.role} <span className="text-muted font-normal mx-1">—</span>{" "}
            <span className="text-accent-blue">{exp.company}</span>
          </h3>
          <div className="font-mono text-xs md:text-sm text-muted mt-1.5 tracking-wide uppercase flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{exp.date}</span>
            {exp.location && (
              <>
                <span>·</span>
                <span>{exp.location}</span>
              </>
            )}
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {exp.techStack.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-card border border-dot text-muted hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2.5 font-body text-muted leading-relaxed list-none pt-1">
          {exp.points.map((point, i) => (
            <li key={i} className="relative pl-5 text-sm md:text-base">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-dot rounded-full" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-20"
    >
      <div className="md:w-1/4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text sticky top-28">
          Experience
        </h2>
      </div>

      <div className="md:w-3/4 flex-1">
        <div className="relative border-l border-dot ml-2 md:ml-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
