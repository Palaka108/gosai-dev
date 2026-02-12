import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'particles' | 'text' | 'exit'>('particles');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 2400);
    const t3 = setTimeout(onComplete, 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Generate grid nodes for the neural-net animation
  const nodes = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.8,
    size: 2 + Math.random() * 3,
  }));

  // Generate connecting lines between nearby nodes
  const lines: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 25) {
        lines.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          delay: Math.max(nodes[i].delay, nodes[j].delay),
        });
      }
    }
  }

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0a0a0f' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          {/* Neural network SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {lines.map((line, i) => (
              <motion.line
                key={i}
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke="rgba(34,211,238,0.15)"
                strokeWidth="0.08"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: line.delay, ease: 'easeOut' }}
              />
            ))}
            {nodes.map((node) => (
              <motion.circle
                key={node.id}
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size * 0.06}
                fill="rgba(34,211,238,0.6)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 0.8, 0.5] }}
                transition={{ duration: 0.8, delay: node.delay, ease: 'easeOut' }}
              />
            ))}
          </svg>

          {/* GOSAI text */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
              phase === 'text'
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-[0.3em] text-white/90">
              GOSAI
            </h1>
            <motion.div
              className="h-[1px] bg-cyan-400 mt-4"
              initial={{ width: 0 }}
              animate={phase === 'text' ? { width: 200 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            />
            <motion.p
              className="mt-4 text-sm md:text-base tracking-[0.25em] text-cyan-400/70 font-mono uppercase"
              initial={{ opacity: 0 }}
              animate={phase === 'text' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              AI Automation Consulting
            </motion.p>
          </motion.div>

          {/* Scan line effect */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2.5, ease: 'linear', repeat: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
