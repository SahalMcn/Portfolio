import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  category: "Mobile" | "Web";
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  tags: string[];
  bullets: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "D-Libre",
    subtitle:
      "International on-demand mobility & logistics platform featuring cab booking with live meter & fixed fare pricing, driver bidding, and parcel delivery (Dominican Republic).",
    category: "Mobile",
    link: "https://apps.apple.com/us/app/d-libre/id6812353361",
    appStoreLink: "https://apps.apple.com/us/app/d-libre/id6812353361",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.lilacinfotech.dlibre.customer&hl=en",
    tags: [
      "Flutter",
      "Dart",
      "BLoC",
      "DDD Architecture",
      "Pusher",
      "AZUL Gateway",
      "PayPal",
      "Background Location",
      "Dynamic PDF",
    ],
    bullets: [
      "Architected core modules for cab booking with live meter and fixed fare pricing, real-time driver-passenger bidding, motorcycle taxi, and pet taxi services.",
      "Engineered complete parcel delivery and motorbike courier workflows with background live coordinate tracking and instant ride receipts.",
      "Integrated Pusher real-time events for driver-rider sync, combined AZUL & PayPal payment processing, and established dynamic PDF generation/sharing.",
    ],
    featured: true,
  },
  {
    title: "Action Club",
    subtitle:
      "Community fitness platform with regional multi-language localization (10K+ Downloads · 4.4★ on Google Play & App Store).",
    category: "Mobile",
    link: "https://play.google.com/store/apps/details?id=com.actionclub.android&hl=en",
    appStoreLink:
      "https://apps.apple.com/in/app/actionclub-get-things-done/id6747101011",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.actionclub.android&hl=en",
    tags: ["Flutter", "FCM", "Localization", "Provider"],
    bullets: [
      "Migrated mission-critical push notification infrastructure from OneSignal to pure Firebase Cloud Messaging (FCM), optimizing delivery speed and payload control.",
      "Implemented clean dynamic multi-language localization supporting 4 international languages, enhancing regional accessibility.",
      "Refactored UI components and centralized application state management as commercial product requirements scaled.",
    ],
  },
  {
    title: "Imprints Academy",
    subtitle:
      "EdTech learning platform with payment processing and fluid UX transitions (5K+ Downloads · 4.9★ on Google Play & App Store).",
    category: "Mobile",
    link: "https://play.google.com/store/apps/details?id=com.imprintsacademy.mocktest&hl=en",
    appStoreLink:
      "https://apps.apple.com/in/app/imprints-academy/id6502551632",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.imprintsacademy.mocktest&hl=en",
    tags: ["Flutter", "REST APIs", "FCM", "Razorpay", "Skeletonizer"],
    bullets: [
      "Integrated targeted FCM push notification flows and engineered polished UI transitions utilizing Skeletonizer shimmer loading states for improved perceived performance.",
      "Diagnosed and corrected payment verification edge cases by redesigning API response handlers and gateway verification pipelines.",
    ],
  },
  {
    title: "Foodmine",
    subtitle:
      "Synchronized multi-app food & grocery ecosystem: Customer App, Vendor App, and Delivery Partner App.",
    category: "Mobile",
    tags: ["Flutter Multi-App", "Pusher", "FCM", "Geolocation", "REST APIs"],
    bullets: [
      "Engineered an ecosystem consisting of 3 distinct applications supporting restaurant dishes, fresh groceries, and flexible fulfillment (dine-in, pickup, delivery).",
      "Implemented WebSocket updates via Pusher, FCM notifications, and background location services for live driver tracking.",
    ],
  },
  {
    title: "Stethzcope",
    subtitle:
      "HIPAA-compliant telemedicine platform with low-latency audio/video consultation.",
    category: "Mobile",
    tags: ["Flutter", "Agora WebRTC", "REST APIs", "Video & Audio Calling"],
    bullets: [
      "Reworked and upgraded legacy Agora RTC SDK implementation, successfully restoring stable low-latency audio and video consultation calls between physicians and patients.",
    ],
  },
  {
    title: "Solo Gadget Mart",
    subtitle:
      "Full-stack e-commerce platform with real-time operations and admin controls.",
    category: "Web",
    link: "https://sologadgetmart.vercel.app/",
    tags: ["Next.js", "Supabase", "Razorpay", "WebSockets"],
    bullets: [
      "Built a full-stack e-commerce web platform with admin dashboard, real-time WebSocket order notifications, Razorpay checkout, and shared cart sync.",
    ],
  },
  {
    title: "Lume Jewellery",
    subtitle:
      "Responsive Flutter Web e-commerce portal with concurrent inventory management.",
    category: "Web",
    link: "https://lumebyesandes.web.app/",
    tags: ["Flutter Web", "Cloud Firestore", "Provider", "Razorpay"],
    bullets: [
      "Developed a responsive Flutter Web e-commerce portal with transactional Cloud Firestore inventory management and seamless online payments.",
    ],
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-20"
    >
      <div className="md:w-1/4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text sticky top-28">
          Projects
        </h2>
      </div>

      <div className="md:w-3/4 flex-1 space-y-8">
        {/* Featured Flagship Project: D-Libre */}
        {featured && (
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-dot hover:border-accent-blue/50 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Column: Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-blue font-semibold">
                    {"// Featured Production App"}
                  </span>
                  <span className="font-mono text-xs text-muted">·</span>
                  <span className="font-mono text-xs text-muted">Dominican Republic</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-text group-hover:text-accent-blue transition-colors">
                  {featured.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                  {featured.subtitle}
                </p>

                {/* Direct Store Links */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {featured.appStoreLink && (
                    <Link
                      href={featured.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bg border border-dot font-mono text-xs text-text hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
                    >
                      <span>App Store</span>
                      <ExternalLink size={12} />
                    </Link>
                  )}
                  {featured.playStoreLink && (
                    <Link
                      href={featured.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bg border border-dot font-mono text-xs text-text hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
                    >
                      <span>Google Play</span>
                      <ExternalLink size={12} />
                    </Link>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featured.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs text-accent-blue border border-accent-blue/30 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Deliverables */}
                <ul className="space-y-2 font-body text-muted text-xs sm:text-sm leading-relaxed list-none pt-4 border-t border-dot">
                  {featured.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-5">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-dot rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Clean Phone Showcase */}
              <div className="w-full lg:w-72 shrink-0 flex justify-center">
                <div className="relative w-56 h-[440px] rounded-3xl border-2 border-dot p-2 bg-bg shadow-md">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                    <Image
                      src="/d-libre-app.png"
                      alt="D-Libre App Store Screen"
                      fill
                      className="object-cover"
                      sizes="224px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regularProjects.map((project, index) => {
            const primaryLink =
              project.appStoreLink || project.playStoreLink || project.link;

            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-7 border border-dot hover:border-accent-blue/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      {primaryLink ? (
                        <Link
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-display font-bold text-xl text-text group-hover:text-accent-blue transition-colors"
                        >
                          <span>{project.title}</span>
                          <ExternalLink size={16} className="text-muted group-hover:text-accent-blue transition-colors shrink-0" />
                        </Link>
                      ) : (
                        <h4 className="font-display font-bold text-xl text-text">
                          {project.title}
                        </h4>
                      )}
                    </div>

                    <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-bg border border-dot text-muted shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Store / Web Links */}
                  {(project.appStoreLink || project.playStoreLink || (project.link && !project.appStoreLink)) && (
                    <div className="flex flex-wrap items-center gap-2 mt-3.5">
                      {project.appStoreLink && (
                        <Link
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg border border-dot font-mono text-[11px] text-text hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
                        >
                          <span>App Store</span>
                          <ExternalLink size={10} />
                        </Link>
                      )}
                      {project.playStoreLink && (
                        <Link
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg border border-dot font-mono text-[11px] text-text hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
                        >
                          <span>Google Play</span>
                          <ExternalLink size={10} />
                        </Link>
                      )}
                      {project.link && !project.appStoreLink && !project.playStoreLink && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg border border-dot font-mono text-[11px] text-text hover:text-accent-blue hover:border-accent-blue/40 transition-colors"
                        >
                          <span>Live Web App</span>
                          <ExternalLink size={10} />
                        </Link>
                      )}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs text-accent-blue border border-accent-blue/30 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-6 pt-4 border-t border-dot space-y-2 font-body text-muted text-xs sm:text-sm leading-relaxed list-none">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-dot rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
