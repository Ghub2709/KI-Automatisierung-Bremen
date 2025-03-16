import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-neutral-900 to-neutral-800 relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-white leading-tight">
            <span className="gradient-text font-bold">KI-Automatisierung</span> für Bremer Unternehmen
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Mehr Zeit für Ihr Kerngeschäft durch intelligente Automatisierung von Prozessen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakt" className="btn-primary btn-lg">
              Kostenloses Erstgespräch vereinbaren
            </Link>
            <Link href="/leistungen" className="btn-white">
              Alle Leistungen entdecken
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-6 text-center">
              <div className="text-accent font-bold text-2xl mb-1">100%</div>
              <div className="text-white text-sm">Zufriedenheit</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-6 text-center">
              <div className="text-accent font-bold text-2xl mb-1">70%</div>
              <div className="text-white text-sm">Zeitersparnis</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-6 text-center">
              <div className="text-accent font-bold text-2xl mb-1">24/7</div>
              <div className="text-white text-sm">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 