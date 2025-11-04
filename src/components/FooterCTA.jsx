import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Rocket } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="cta" className="relative w-full bg-[#0b0b12] pb-16 pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
      <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-900/30">
          <Rocket size={20} />
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">Ready to accelerate?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-zinc-300">
          Tell us about your goals and we’ll send a tailored plan within 48 hours. Clear pricing, fast setup, and measurable outcomes.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-white/90">
              <Mail size={18} className="text-zinc-300" />
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-110"
          >
            Get proposal
            <ArrowRight size={18} className="ml-2" />
          </button>
        </form>

        <p className="mt-3 text-xs text-zinc-400">No spam. Just signal and results.</p>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl items-center justify-between px-6 text-sm text-zinc-400">
        <span>© {new Date().getFullYear()} Nebula Growth</span>
        <div className="hidden gap-6 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>
      </div>
    </section>
  );
}
