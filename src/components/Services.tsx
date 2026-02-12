import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, Target, Workflow, Bot, Database } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead Generation Engines',
    tag: 'GROWTH',
    description:
      'AI-powered outbound and inbound pipelines that identify, qualify, and nurture leads — turning cold prospects into warm conversations at scale.',
  },
  {
    icon: Bot,
    title: 'Individual AI Optimizations',
    tag: 'PRODUCTIVITY',
    description:
      'Custom AI workflows tailored to how you actually work. From email triage to research synthesis, we build automations around your daily routines.',
  },
  {
    icon: Brain,
    title: 'Second Brain Systems',
    tag: 'KNOWLEDGE',
    description:
      'Structured personal knowledge management powered by AI. Capture, connect, and resurface your ideas when they matter most.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    tag: 'OPERATIONS',
    description:
      'End-to-end process automation using n8n, Supabase, and AI APIs. Eliminate repetitive tasks and connect your tools into seamless systems.',
  },
  {
    icon: Zap,
    title: 'AI Strategy Consulting',
    tag: 'ADVISORY',
    description:
      'Identify where AI creates real leverage in your business. We audit your operations and deliver a prioritized roadmap of high-impact automations.',
  },
  {
    icon: Database,
    title: 'CRM & Data Infrastructure',
    tag: 'FOUNDATION',
    description:
      'Build the data backbone that powers everything else. CRM configuration, pipeline architecture, and analytics designed for founders who ship.',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-xl border border-white/[0.06] bg-dark-800/50 p-6 hover:border-cyan-400/20 transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
            <Icon className="text-cyan-400" size={20} />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-400/60 border border-cyan-400/20 rounded px-2 py-0.5">
            {service.tag}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white/90 mb-2">{service.title}</h3>
        <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="services" className="relative py-28 px-6">
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
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What We Build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
