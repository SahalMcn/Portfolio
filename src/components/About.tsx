export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-20"
    >
      <div className="md:w-1/4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text sticky top-28">
          About
        </h2>
      </div>

      <div className="md:w-3/4 space-y-12 flex-1">
        <div className="space-y-6 font-body text-lg md:text-xl leading-relaxed text-muted max-w-3xl">
          <p>
            Flutter Developer with hands-on experience building and deploying
            cross-platform iOS and Android apps in Dart. Strong in state management
            (BLoC, Riverpod, Provider), Domain-Driven Design (DDD) Clean Architecture,
            REST API integration, Firebase, and real-time SDKs including Pusher and Agora.
          </p>
          <p>
            Contributed to commercial products published on Google Play and the App Store,
            including international multi-service on-demand mobility platforms, community
            fitness apps with 10K+ downloads, and edtech platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-dot">
          <div className="space-y-2">
            <div className="font-display font-bold text-4xl md:text-5xl text-text">
              10K+
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              App Downloads
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-4xl md:text-5xl text-text">
              6+
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Apps Shipped
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-display font-bold text-3xl md:text-4xl text-text leading-tight">
              Calicut,
              <br />
              Kerala
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted mt-2">
              Based In
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
