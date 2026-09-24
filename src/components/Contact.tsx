export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-24">
      <div className="md:w-1/3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">Contact</h2>
      </div>
      
      <div className="md:w-2/3 max-w-3xl">
        <h3 className="font-display font-bold text-5xl md:text-6xl text-text mb-12 tracking-tight">
          Let's build something.
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
          <li className="text-muted cursor-default">
            Calicut, Kerala
          </li>
        </ul>
      </div>
    </section>
  );
}
