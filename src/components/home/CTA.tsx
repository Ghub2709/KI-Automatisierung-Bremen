import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="section py-20 md:py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
      <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-white/5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Bereit für mehr Effizienz in Ihrem Unternehmen?
          </h2>
          
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Vereinbaren Sie ein kostenloses 30-minütiges Erstgespräch und erfahren Sie, 
            welche Prozesse in Ihrem Unternehmen automatisiert werden können.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-lg bg-white text-primary hover:bg-neutral-100 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Termin vereinbaren
            </Link>
            <Link href="/leistungen" className="btn-lg bg-transparent text-white border-2 border-white/30 hover:bg-white/10 font-medium">
              Mehr erfahren
            </Link>
          </div>
          
          <p className="text-white/60 mt-8">Keine Vertragsbindung. Unverbindliches Erstgespräch.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA; 