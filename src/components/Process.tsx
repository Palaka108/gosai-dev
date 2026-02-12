import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We audit your current workflows, tools, and bottlenecks to find the highest-leverage automation opportunities.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Strategy & Scoping',
    description: 'A clear roadmap with prioritized initiatives, architecture decisions, and defined deliverables — before any code is written.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build & Integrate',
    description: 'Rapid implementation using proven tools: n8n, Supabase, AI APIs, CRM platforms. We build in weeks, not months.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Optimize',
    description: 'Deploy, monitor, and iterate. Ongoing advisory support ensures your systems evolve as your business scales.',
  },
];

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section id="process" className="relative py-28 px-6">
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
              Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: '-30px' });
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent" />
                )}

                <div className="relative rounded-xl border border-white/[0.06] bg-dark-800/30 p-6">
                  <span className="text-3xl font-bold text-cyan-400/10 font-mono absolute top-4 right-4">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
                    <Icon className="text-cyan-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
