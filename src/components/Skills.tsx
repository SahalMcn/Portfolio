const categories = [
  {
    label: "// mobile",
    skills: ["Flutter", "Dart", "iOS & Android"],
  },
  {
    label: "// state management",
    skills: ["Bloc", "Riverpod", "Provider", "GetX"],
  },
  {
    label: "// backend & integration",
    skills: [
      "REST APIs",
      "Firebase (Auth, Firestore)",
      "Agora SDK",
      "Pusher (WebSocket)",
      "Razorpay",
    ],
  },
  {
    label: "// tools & other",
    skills: [
      "Git",
      "CI/CD",
      "HTML/CSS/JS",
      "AI Prompt Engineering (Certified)",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-24"
    >
      <div className="md:w-1/3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
          Skills
        </h2>
      </div>

      <div className="md:w-2/3 max-w-3xl">
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="font-mono text-sm text-muted tracking-wide">
                {category.label}
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="font-body text-text bg-card border border-dot px-4 py-2 rounded-lg hover:text-accent-blue hover:border-accent-blue/50 transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
