import React from 'react';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import ServicesOverview from '@/components/home/ServicesOverview';
import Pricing from '@/components/home/Pricing';
import LocalSection from '@/components/home/LocalSection';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesOverview />
      <Pricing />
      <LocalSection />
      <CTA />
    </>
  );
} 