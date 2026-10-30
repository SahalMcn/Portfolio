const categories = [
  {
    label: "// Mobile Development",
    skills: ["Flutter", "Dart", "iOS & Android", "Figma-to-Flutter UI", "Bloc", "Provider", "Riverpod"],
  },
  {
    label: "// Architecture & Design Patterns",
    skills: [
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
      "Repository Pattern",
      "State Management",
      "Reusable UI Component Architecture",
    ],
  },
  {
    label: "// Backend, APIs & Real-Time",
    skills: [
      "REST APIs",
      "Pusher (WebSockets)",
      "Agora RTC (Video & Audio)",
      "Firebase Cloud Messaging (FCM)",
      "Firebase Auth & Firestore",
      "AZUL Gateway",
      "PayPal",
      "Razorpay",
    ],
  },
  {
    label: "// Tooling, Mobile Features & Testing",
    skills: [
      "Git & GitHub",
      "CI/CD Workflows",
      "Background Location",
      "Dynamic PDF Generation",
      "Multi-Language Localization",
      "Deep Linking",
      "Firebase Crashlytics",
      "Skeletonizer Shimmer",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-20"
    >
      <div className="md:w-1/4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text sticky top-28">
          Skills
        </h2>
      </div>

      <div className="md:w-3/4 flex-1 space-y-10">
        {categories.map((category, index) => (
          <div key={index} className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-accent-blue font-semibold">
              {category.label}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="font-body text-sm text-text bg-card border border-dot px-3.5 py-1.5 rounded-lg hover:text-accent-blue hover:border-accent-blue/50 transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
