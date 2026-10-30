export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-20"
    >
      <div className="md:w-1/4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text sticky top-28">
          Contact
        </h2>
      </div>

      <div className="md:w-3/4 flex-1">
        <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-text mb-12 tracking-tight">
          Let&apos;s build something.
        </h3>

        <ul className="space-y-6 font-body text-xl md:text-2xl text-text list-none">
          <li>
            <a
              href="mailto:sahalmuhammedcn@gmail.com"
              className="inline-block hover:text-accent-blue hover:underline decoration-accent-blue underline-offset-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-sm"
            >
              sahalmuhammedcn@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:+918592020391"
              className="inline-block hover:text-accent-blue hover:underline decoration-accent-blue underline-offset-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-sm"
            >
              +91 8592020391
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/sahalmuhammedcn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-accent-blue hover:underline decoration-accent-blue underline-offset-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-sm"
            >
              linkedin.com/in/sahalmuhammedcn
            </a>
          </li>
          <li className="text-muted cursor-default text-lg md:text-xl pt-2">
            Calicut, Kerala, India
          </li>
        </ul>
      </div>
    </section>
  );
}
