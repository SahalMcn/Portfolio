import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Solo Gadget Mart",
    link: "https://sologadgetmart.vercel.app/",
    subtitle: "",
    tags: ["Next.js", "Supabase", "Razorpay"],
    bullets: [
      "Full-stack e-commerce platform with admin dashboard, WebSocket order alerts, and global cart state management",
    ],
  },
  {
    title: "Lume Jewellery",
    link: "https://lumebyesandes.web.app/",
    subtitle: "",
    tags: ["Flutter Web", "Firebase", "Provider", "Razorpay"],
    bullets: [
      "Serverless e-commerce web app with Razorpay checkout and Firestore transactions for concurrent inventory management",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col md:flex-row gap-12 lg:gap-24"
    >
      <div className="md:w-1/3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
          Projects
        </h2>
      </div>

      <div className="md:w-2/3 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-dot shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-accent-blue/50 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex-1">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display font-bold text-2xl text-text group-hover:text-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-sm"
                >
                  {project.title}
                  <ExternalLink
                    size={20}
                    className="text-muted group-hover:text-accent-blue transition-colors"
                  />
                </Link>
                <p className="font-body text-muted mt-2">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs text-accent-blue border border-accent-blue/30 px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-8 space-y-3 font-body text-muted text-sm leading-relaxed list-none">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-5">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-dot rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
