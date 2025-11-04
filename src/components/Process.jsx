import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileCheck2, FlaskConical, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Discovery & Goals',
    copy: 'We define outcomes, audiences, and constraints. Clear metrics and timelines from day one.',
  },
  {
    icon: FileCheck2,
    title: 'Blueprint & Setup',
    copy: 'Tracking, keywords, audiences, and creative anchors. We assemble the growth stack and workflows.',
  },
  {
    icon: FlaskConical,
    title: 'Sprints & Experiments',
    copy: 'Two-week sprints across SEO, social, and paid. We test, learn, and compound what works.',
  },
  {
    icon: Trophy,
    title: 'Scale & Systemize',
    copy: 'Double down on winners, automate delivery, and expand channels with confidence.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-[#0b0b12] py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How we ship growth</h2>
          <p className="mt-3 text-zinc-300">A proven operating system that blends search, social, and paid into one compounding engine.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 p-2 text-white ring-1 ring-white/10">
                  <s.icon size={18} />
                </div>
                <h3 className="font-medium text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.copy}</p>
              {idx < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
