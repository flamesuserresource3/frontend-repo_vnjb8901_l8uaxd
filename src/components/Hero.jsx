import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, Globe, Palette, ShoppingBag, Code2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  // Parallax stage similar to svz.io feel
  const stageRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 15 });
  const tx = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 110, damping: 16 });
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 110, damping: 16 });

  const onMove = (e) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12]">
      {/* Glow gradients (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(88,101,242,0.35),rgba(0,0,0,0)_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),rgba(0,0,0,0)_60%)] blur-3xl" />
      </div>

      {/* Nav */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-900/30">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-white">Nebula Studio</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
        </div>
        <a href="#cta" className="group relative hidden rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 md:inline-flex">
          Get Proposal
          <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
        </a>
      </div>

      {/* Content + Spline + Parallax stage */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-4 md:grid-cols-2 md:pb-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Sparkles size={14} className="text-fuchsia-400" />
            Web dev (WordPress • Framer • Shopify) + Design + Growth
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ship modern websites and brands—
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"> with productized clarity</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
            Elementor WordPress, Framer, and Shopify builds paired with graphic design and growth services. Clear scopes, fast timelines, measurable outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="interactive-cta inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-900/30 transition [transform-style:preserve-3d] hover:brightness-110">
              View Packages
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore Services
            </a>
          </div>

          {/* Tech chips with subtle parallax */}
          <motion.div
            ref={stageRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX: rx, rotateY: ry }}
            className="mt-8 grid w-full max-w-md grid-cols-2 gap-3 [perspective:1000px]"
          >
            {[
              { Icon: Globe, label: 'Elementor WordPress' },
              { Icon: Globe, label: 'Framer' },
              { Icon: ShoppingBag, label: 'Shopify Design' },
              { Icon: Palette, label: 'Graphic Design' },
            ].map(({ Icon, label }) => (
              <motion.div
                key={label}
                style={{ x: tx, y: ty }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 shadow-inner"
              >
                <Icon size={16} />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="order-1 h-[440px] w-full rounded-2xl border border-white/10 bg-white/5 p-2 md:order-2 md:h-[560px]">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {/* Main Spline scene (interactive) */}
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Secondary floating layer for extra interaction */}
            <motion.div
              style={{ x: tx, y: ty }}
              className="pointer-events-none absolute left-6 top-6 hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 md:block"
            >
              <div className="flex items-center gap-2">
                <Code2 size={14} />
                Interactive scene — drag to explore
              </div>
            </motion.div>
            {/* Non-blocking overlay gradients */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(99,102,241,0.18),transparent),radial-gradient(800px_400px_at_0%_120%,rgba(236,72,153,0.12),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
