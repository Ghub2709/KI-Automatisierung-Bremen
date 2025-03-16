import React from 'react';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const features = [
    'Unbegrenzte Nutzung aller KI-Automatisierungen',
    '5 Stunden persönliche Betreuung & Anpassung',
    'Regelmäßige Updates & Optimierungen',
    'Priorisierter Support',
    'Individuelle Anpassungen',
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">Preismodell</span>
          <h2 className="mb-6">Transparentes Preismodell ohne versteckte Kosten</h2>
          <p className="text-lg text-neutral-600">
            Mit unserem Komplettpaket erhalten Sie alle Leistungen zu einem festen monatlichen Preis.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="p-8 bg-gradient-to-r from-primary to-secondary text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Komplettpaket</h3>
              <div className="flex items-center justify-center">
                <span className="text-5xl font-bold">500€</span>
                <span className="ml-2 text-lg opacity-80">pro Monat</span>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link href="/kontakt" className="btn-primary w-full flex justify-center py-3">
                  Jetzt starten
                </Link>
                <p className="text-sm text-center text-neutral-500 mt-4">
                  Unverbindliches Erstgespräch, keine Vertragsbindung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 