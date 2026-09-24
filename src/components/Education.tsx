export default function Education() {
  const languages = ["English (Fluent)", "Malayalam (Native)", "Tamil (Intermediate)", "Hindi (Basic)"];

  return (
    <section id="education" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-24">
      <div className="md:w-1/3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">Education</h2>
      </div>
      
      <div className="md:w-2/3 max-w-3xl space-y-12">
        <div className="space-y-2">
          <h3 className="font-body font-medium text-lg text-text">
            Bachelor of Commerce (B.Com), Specialization in Computer Applications
          </h3>
          <p className="font-mono text-sm text-muted uppercase tracking-wide">
            University of Calicut · 08/2020 – 06/2024
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl md:text-2xl text-text">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span 
                key={index}
                className="font-mono text-xs text-text border border-dot px-3 py-1.5 rounded-full"
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
