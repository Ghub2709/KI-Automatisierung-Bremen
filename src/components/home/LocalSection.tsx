import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const LocalSection = () => {
  return (
    <section className="section bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-secondary/20 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center text-sm text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPinIcon className="h-5 w-5 mr-2" />
              Bremen, Deutschland
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-white">
              Lokale KI-Expertise für Bremer Unternehmen
            </h2>
            
            <p className="text-lg text-neutral-300 mb-6">
              Als in Bremen ansässiges Unternehmen verstehen wir die spezifischen Herausforderungen 
              lokaler Geschäfte und bieten persönliche Betreuung vor Ort.
            </p>
            
            <div className="space-y-4 text-neutral-300">
              <p className="flex items-start">
                <span className="inline-block h-6 w-6 mr-2 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0"></span>
                Wir kennen die Bremer Unternehmenslandschaft und haben unsere Lösungen speziell für die 
                Bedürfnisse lokaler Unternehmen entwickelt.
              </p>
              <p className="flex items-start">
                <span className="inline-block h-6 w-6 mr-2 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0"></span>
                Der persönliche Kontakt ist uns wichtig: Wir sind nicht nur digital, sondern 
                auch persönlich für Sie da - mit kurzen Wegen und schnellen Reaktionszeiten.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Bremen map/image placeholder */}
            <div className="rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden border border-neutral-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-block p-4 rounded-full bg-white/10 mb-4">
                    <MapPinIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bremen</h3>
                  <p className="text-neutral-400">Hanseatische KI-Lösungen</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSection; 