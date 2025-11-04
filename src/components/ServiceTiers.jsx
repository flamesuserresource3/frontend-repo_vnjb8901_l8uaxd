import React from 'react';
import { motion } from 'framer-motion';
import { Search, Megaphone, BarChart3, Check, Globe, Palette, ShoppingBag, Code2 } from 'lucide-react';

const tiers = [
  {
    name: 'Launch',
    price: '$3,500/mo',
    highlight: 'Best for new brands or fresh product launches',
    features: [
      'Website build: Elementor or Framer (1–3 pages)',
      'Shopify starter theme styling (optional)',
      'Technical SEO setup + on-page fixes',
      'Starter social kit (8 posts/mo)',
      'Monthly performance snapshot',
    ],
    accent: 'from-indigo-500 to-fuchsia-500',
  },
  {
    name: 'Scale',
    price: '$6,500/mo',
    highlight: 'Full web + design + growth operating system',
    features: [
      'Website: Framer or Elementor (5–8 pages) + CMS',
      'Shopify template customization & CRO tweaks',
      'SEO sprints (content + internal links)',
      'Design support (brand + ad creatives)',
      'Weekly reporting & roadmap sync',
    ],
    featured: true,
    accent: 'from-fuchsia-500 to-cyan-400',
  },
  {
    name: 'Dominate',
    price: '$10,000+/mo',
    highlight: 'Aggressive scale for category leaders',
    features: [
      'Multi-site or advanced Framer/WordPress systems',
      'Custom Shopify sections & A/B testing',
      'Full-funnel SEO + link building',
      'Motion/3D creative & campaign systems',
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
            <Code2 size={14} className="text-indigo-400" />
            Web Dev • Design • SEO • Social • Ads
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Productized packages for speed and clarity
          </h2>
          <p className="mt-3 text-zinc-300">
            Choose a package or mix with individual services. Clean scopes, predictable timelines, compounding results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
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
        <div id="services" className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { icon: Globe, title: 'Elementor WordPress', copy: 'Flexible CMS, fast builds, and maintainable design systems with Elementor Pro.' },
            { icon: Globe, title: 'Framer Websites', copy: 'Motion-rich marketing sites with components, CMS, and lightning performance.' },
            { icon: ShoppingBag, title: 'Shopify Stores', copy: 'Conversion-first theme customization, PDP optimization, and A/B testing.' },
            { icon: Palette, title: 'Graphic Design', copy: 'Brand identity, social kits, ad creative, and presentation design on tap.' },
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
