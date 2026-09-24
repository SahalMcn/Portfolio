"use client";

import { useEffect, useRef, useState } from "react";

// Simple hook for scroll animation
function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      }
    }, options);

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.triggerOnce]);

  return { ref, isInView };
}

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Lilac Infotech",
    date: "02/2026 – Present",
    location: "Calicut, Kerala",
    points: [
      "Build and deploy cross-platform Flutter applications for iOS and Android in a production engineering team",
      "Integrate Agora SDK for live video/audio streaming and Pusher for real-time WebSocket notifications, enabling in-app real-time communication features",
      "Collaborate with DevOps and Laravel backend engineers on API integration and CI/CD pipelines",
      "Built and deployed cross-platform Flutter apps for iOS and Android, using Bloc, Riverpod and Provider for scalable state management",
      "Integrated Agora SDK for video/audio streaming and Pusher for real-time WebSocket notifications",
      "Integrated REST APIs and collaborated with DevOps and Laravel engineers on CI/CD workflows in an agile team",
      "Debugged issues and improved performance in existing production apps",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Tomercon Developers",
    date: "04/2025 – 09/2025",
    location: "",
    points: [
      "Built and maintained Flutter applications alongside senior developers, contributing features, bug fixes, and performance tuning",
      "Gained hands-on production experience with Firebase integration, state management (Provider/Riverpod), and REST API consumption",
      "Built and maintained Flutter apps, working with senior developers on features, bug fixes, and performance",
      "Implemented Firebase (Auth, Firestore) integration, state management with Provider/Bloc, and REST API consumption",
    ],
  },
  {
    role: "Flutter Developer Trainee",
    company: "HACA (Haris & Co. Academy)",
    date: "07/2024 – 12/2024",
    location: "",
    points: [
      "Completed an intensive 6-month Flutter/Dart training program covering core mobile development fundamentals",
      "Designed and built a Student Management System as a capstone project, covering CRUD operations, local/remote data handling, and UI architecture",
      "Completed 6-month Flutter/Dart training program; built a Student Management System as final project",
    ],
  },
];

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-12 pb-12 last:pb-0 transition-all duration-700 ease-out delay-[${index * 150}ms] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] top-2 w-3 h-3 bg-accent-blue rounded-full shadow-[0_0_0_4px_var(--bg)] z-10" />

      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-text">
            {exp.role} <span className="text-muted font-normal mx-1">—</span>{" "}
            <span className="text-accent-blue">{exp.company}</span>
          </h3>
          <div className="font-mono text-xs md:text-sm text-muted mt-2 tracking-wide uppercase flex flex-wrap gap-x-2 gap-y-1">
            <span>{exp.date}</span>
            {exp.location && (
              <>
                <span className="hidden sm:inline">·</span>
                <span>{exp.location}</span>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <ul className="space-y-3 font-body text-muted leading-relaxed list-none">
          {exp.points.map((point, i) => (
            <li key={i} className="relative pl-5">
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
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-24"
    >
      <div className="md:w-1/3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
          Experience
        </h2>
      </div>

      <div className="md:w-2/3 max-w-3xl">
        <div className="relative border-l border-dot ml-2 md:ml-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
