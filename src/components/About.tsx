export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-24"
    >
      <div className="md:w-1/3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
          About
        </h2>
      </div>

      <div className="md:w-2/3 space-y-12 max-w-2xl">
        <div className="space-y-6 font-body text-lg leading-relaxed text-muted">
          <p>
            Flutter Developer with production experience building and
            maintaining cross-platform iOS and Android apps in Dart. Strong in
            state management (Bloc, Riverpod, Provider), REST API integration,
            Firebase, and third-party SDKs such as Agora and Pusher.
          </p>
          <p>
            Progressed from trainee to intern to full-time engineer, working in
            agile teams alongside backend and DevOps engineers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
          <div className="space-y-2">
            <div className="font-display font-bold text-4xl md:text-5xl text-text">
              2+{" "}
              <span className="text-xl md:text-2xl text-accent-blue font-medium">
                yrs
              </span>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Building in production
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-4xl md:text-5xl text-text">
              2
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Full-stack apps shipped solo
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-2xl md:text-3xl text-text pt-2 leading-tight">
              Calicut,
              <br />
              Kerala
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted mt-2">
              Based in
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
