import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, ShoppingBag, PenSquare, Image as ImageIcon, Search, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Elementor WordPress Site',
    copy: 'Custom, fast, and scalable WordPress sites with Elementor Pro and clean design systems.',
    accent: 'from-indigo-500 to-fuchsia-500',
  },
  {
    icon: Globe,
    title: 'Framer Website',
    copy: 'Blazing-fast, animated marketing sites with Framer—perfect for modern product launches.',
    accent: 'from-fuchsia-500 to-cyan-400',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Store Design',
    copy: 'High-converting storefronts, optimized product pages, and seamless checkout UX.',
    accent: 'from-cyan-400 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    copy: 'Logo, color, typography, and a robust style guide for consistent cross-channel visuals.',
    accent: 'from-violet-500 to-rose-500',
  },
  {
    icon: ImageIcon,
    title: 'Graphic Design Suite',
    copy: 'Social templates, ad creatives, presentation decks, and print assets on demand.',
    accent: 'from-rose-500 to-amber-400',
  },
  {
    icon: Search,
    title: 'SEO Sprint',
    copy: 'Technical audit, on-page fixes, content roadmap, and measurement setup in 30 days.',
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    icon: Megaphone,
    title: 'Social Media Kit',
    copy: 'Channel strategy, content pillars, design templates, and publishing workflows.',
    accent: 'from-indigo-400 to-fuchsia-400',
  },
  {
    icon: PenSquare,
    title: 'Landing Page Design',
    copy: 'Conversion-first layouts, persuasive copy, and motion accents for higher signups.',
    accent: 'from-sky-400 to-violet-500',
  },
];

export default function IndividualServices() {
  return (
    <section className="relative w-full bg-[#0b0b12] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_10%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(700px_350px_at_90%_80%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Individual services</h2>
          <p className="mt-3 text-zinc-300">Pick exactly what you need—from web builds in WordPress, Framer, and Shopify to brand and creative support.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition duration-300 group-hover:opacity-40`} />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/5 p-2 text-white ring-1 ring-white/10">
                  <s.icon size={18} />
                </div>
                <h3 className="font-medium text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.copy}</p>
              <button className="mt-5 inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
                Inquire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
