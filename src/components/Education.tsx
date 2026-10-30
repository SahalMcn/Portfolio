export default function Education() {
  const languages = [
    "English (Fluent)",
    "Malayalam (Native)",
    "Tamil (Intermediate)",
    "Hindi (Basic)",
  ];

  return (
    <section
      id="education"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-20"
    >
      <div className="md:w-1/4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text sticky top-28">
          Education
        </h2>
      </div>

      <div className="md:w-3/4 flex-1 space-y-10">
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-xl text-text">
            Bachelor of Commerce (B.Com) — Computer Applications
          </h3>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            University of Calicut · 08/2020 – 06/2024
          </p>
        </div>

        <div className="space-y-4 pt-6 border-t border-dot">
          <h4 className="font-display font-semibold text-lg text-text">
            Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="font-mono text-xs text-text border border-dot px-3 py-1.5 rounded-lg bg-card"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
