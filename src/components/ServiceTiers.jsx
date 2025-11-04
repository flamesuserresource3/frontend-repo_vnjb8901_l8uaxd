import React from 'react';
import { motion } from 'framer-motion';
import { Search, Megaphone, BarChart3, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Launch',
    price: '$2,500/mo',
    highlight: 'Best for startups testing traction',
    features: [
      'Technical SEO audit + quick wins',
      'Foundational keyword map & on-page fixes',
      'Social content kit (8 posts/mo)',
      'Basic ad campaigns (Search + Social)',
      'Monthly performance snapshot',
    ],
    accent: 'from-indigo-500 to-fuchsia-500',
  },
  {
    name: 'Scale',
    price: '$5,500/mo',
    highlight: 'Balanced growth across channels',
    features: [
      'SEO sprints (content + internal linking)',
      '12–16 social posts + community loops',
      'Conversion-focused ad funnels',
      'Landing page optimization & CRO tests',
      'Weekly reporting & roadmap sync',
    ],
    featured: true,
    accent: 'from-fuchsia-500 to-cyan-400',
  },
  {
    name: 'Dominate',
    price: '$9,500/mo',
    highlight: 'Aggressive scale for category leaders',
    features: [
      'Full-funnel SEO (topical authority + links)',
      'Daily social engine + creator UGC',
      'High-budget paid mix with incrementality',
      'Advanced analytics & attribution',
      'Dedicated strategist + growth PM',
    ],
    accent: 'from-cyan-400 to-indigo-500',
  },
];

const MotionCard = ({ children, className }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ServiceTiers() {
  return (
    <section id="pricing" className="relative w-full bg-[#0b0b12] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(56,189,248,0.18),transparent),radial-gradient(800px_400px_at_90%_90%,rgba(168,85,247,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Search size={14} className="text-indigo-400" />
            SEO • Social • SEM • SMM
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Productized growth, packaged for clarity
          </h2>
          <p className="mt-3 text-zinc-300">
            Pick a plan, plug in your brand, and get a measurable engine across search, social, and paid—without reinventing the scope every month.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <MotionCard
              key={t.name}
              className={`relative rounded-2xl border ${
                t.featured ? 'border-fuchsia-400/30' : 'border-white/10'
              } bg-white/[0.04] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  Most Popular
                </div>
              )}
              <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${t.accent}`} />
              <h3 className="mt-4 text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-sm text-zinc-300">{t.highlight}</p>
              <div className="mt-5 text-3xl font-semibold text-white">{t.price}</div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 rounded-full bg-white/5 p-1 text-emerald-400 ring-1 ring-white/10">
                      <Check size={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r ${t.accent} px-4 py-2.5 font-medium text-white transition hover:brightness-110`}
              >
                Start with {t.name}
              </a>
            </MotionCard>
          ))}
        </div>

        {/* Channel highlights */}
        <div id="services" className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Search, title: 'Search Engine Optimization', copy: 'Technical foundations, content velocity, and topical authority that compounds organic traffic.' },
            { icon: Megaphone, title: 'Social Media Marketing', copy: 'Narratives that spark conversation. Ship high-signal content and community loops.' },
            { icon: BarChart3, title: 'Search + Social Ads', copy: 'Full-funnel paid strategy with creative testing, conversion tracking, and scale controls.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/5 p-2 text-white">
                  <item.icon size={18} />
                </div>
                <h4 className="font-medium text-white">{item.title}</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
