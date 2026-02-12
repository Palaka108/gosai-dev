import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'IntelligenceHub',
    tag: 'SECOND BRAIN',
    description:
      'A personal AI command center — voice capture, idea processing, research synthesis, and task management powered by Telegram + n8n + Supabase.',
    tech: ['Supabase', 'n8n', 'Telegram', 'AI APIs'],
  },
  {
    name: 'LectureTan',
    tag: 'EDTECH',
    description:
      'Volunteer cohort management and live session tooling for spiritual education programs. Real-time Q&A, session scheduling, and participant tracking.',
    tech: ['React', 'Supabase', 'Real-time', 'Auth'],
  },
  {
    name: 'PRD Command Center',
    tag: 'PRODUCTIVITY',
    description:
      'A product requirements dashboard that tracks every project from idea to deployment — synced across Notion, Supabase, and GitHub.',
    tech: ['Notion API', 'Supabase', 'React', 'n8n'],
  },
  {
    name: 'Quiz Engine',
    tag: 'LEARNING',
    description:
      'Dynamic quiz generation and assessment platform with admin dashboards, response tracking, and CSV exports. Built for teams that learn together.',
    tech: ['React', 'Supabase', 'Admin UI', 'Analytics'],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 hover:border-cyan-400/20 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-400/70 border border-cyan-400/20 rounded px-2 py-0.5">
            {project.tag}
          </span>
          <ExternalLink className="text-white/20 group-hover:text-cyan-400/50 transition-colors" size={16} />
        </div>

        <h3 className="text-xl font-semibold text-white/90 mb-3">{project.name}</h3>
        <p className="text-sm text-white/40 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-white/30 bg-white/[0.04] rounded px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">
              Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built & Shipped
          </h2>
          <p className="mt-3 text-white/40 max-w-xl">
            A selection of systems we've designed, built, and deployed — each one solving a real operational problem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
