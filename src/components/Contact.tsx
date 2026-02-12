import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">
              Contact
            </span>
            <div className="w-8 h-[1px] bg-cyan-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to automate?
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Tell us about your business and we'll identify the highest-impact AI automations you can deploy this month.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@gosai.dev"
              className="group flex items-center gap-2 px-8 py-3.5 rounded bg-cyan-500 hover:bg-cyan-400 text-dark-900 font-semibold transition-all tracking-wide text-sm"
            >
              <Mail size={16} />
              hello@gosai.dev
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded border border-white/20 text-white/70 hover:border-cyan-400/50 hover:text-cyan-400 transition-all tracking-wide text-sm"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
