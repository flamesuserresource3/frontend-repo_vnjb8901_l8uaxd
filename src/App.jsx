import React from 'react';
import Hero from './components/Hero';
import ServiceTiers from './components/ServiceTiers';
import Process from './components/Process';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white antialiased">
      <Hero />
      <ServiceTiers />
      <Process />
      <FooterCTA />
    </div>
  );
}
