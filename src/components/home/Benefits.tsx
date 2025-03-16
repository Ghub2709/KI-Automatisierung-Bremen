import React from 'react';
import { ClockIcon, SparklesIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Zeitersparnis',
      description: 'Reduzieren Sie repetitive Aufgaben um bis zu 70% durch intelligente Automatisierung.',
      icon: <ClockIcon className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Qualitätssteigerung',
      description: 'Konstant hohe Qualität durch standardisierte, fehlerfreie Prozesse.',
      icon: <SparklesIcon className="h-8 w-8" />,
      color: 'from-secondary to-secondary-dark',
    },
    {
      id: 3,
      title: 'Kosteneinsparung',
      description: 'Senken Sie operative Kosten und fokussieren Sie sich auf wertschöpfende Tätigkeiten.',
      icon: <CurrencyEuroIcon className="h-8 w-8" />,
      color: 'from-accent to-accent-dark',
    },
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            Transformieren Sie Ihr Unternehmen mit <span className="gradient-text">KI-Automatisierung</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Warum immer mehr Bremer Unternehmen auf intelligente Automatisierung setzen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="card-bordered hover:shadow-md group transition-all">
              <div className={`w-14 h-14 rounded-2xl mb-6 p-3 flex items-center justify-center text-white bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/leistungen" className="inline-flex items-center text-primary hover:text-primary-light font-medium">
            Mehr über unsere Leistungen erfahren
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 